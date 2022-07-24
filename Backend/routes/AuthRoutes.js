require("dotenv").config();
const NodeMailer = require("nodemailer");
const { Router } = require("express");
const UsersModel = require("../Models/UsersModel");
const OTPModel = require("../Models/OTPModel");

const hbs = require("handlebars");

const authRoutes = Router();

const transport = NodeMailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.NODEMAILER_EMAIL,
    pass: process.env.NODEMAILER_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

authRoutes.post("/OTP", async (req, res) => {
  const { email } = req.body;
  console.log(email);

  function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  const otp = random(100000, 999999);

  const OTP = await OTPModel({ email, otp });
  OTP.save((err, otp) => {
    if (err) console.log(err);
    else console.log(otp);
  });

  const content = `<div>
                    <h3>{{otp}} is your verification OTP for Fraazo</h3>
                    <p>Please do not share it with anyone. </p>
                    <p>Team Fraazo</p>
                </div>`;

  const template = hbs.compile(content);

  const userExists = await UsersModel.findOne({ email });
  if (userExists) {
    transport
      .sendMail({
        from: process.env.NODEMAILER_EMAIL,
        to: email,
        subject: "TX-Fraazo",
        html: template({ otp: otp }),
      })
      .then((response) => {
        return res
          .status(200)
          .send({ message: "OTP sent to Email", alreadyExists: true });
      })
      .catch((err) => {
        return res.status(401).send("Something went wrong!");
      });
  } else {
    transport
      .sendMail({
        from: process.env.NODEMAILER_EMAIL,
        to: email,
        subject: "TX-Fraazo",
        html: template({ otp: otp }),
      })
      .then((response) => {
        return res
          .status(200)
          .send({ message: "OTP sent to Email", alreadyExists: false });
      })
      .catch((err) => {
        return res.status(401).send("Something went wrong!");
      });
  }
});

authRoutes.post("/verifyOTP", async(req, res) => {
    const {email, otp} = req.body;
    const otpHash = await OTPModel.findOne({email, otp});
    if (otpHash.otp == otp) {
      const user = await UsersModel.findOne({ email });
      if(user?.email) return res.status(200).send({ msg: "Verified", user: user._id });
      else return res.status(200).send({ msg: "Verified, needs to Register" });
    } else {
      return res.status(404).send("OTP Expired, Please try again!");
    }
});

authRoutes.post("/register", async (req, res) => {
  const { firstname, lastname, email, title, mobile, verified } = req.body;
  const user = await UsersModel.findOne({
    email: email,
    title: title,
    firstname: firstname,
    lastname: lastname,
    mobile: mobile,
  });
  if (!user) {
    const newUser = await UsersModel({
      firstname,
      lastname,
      email,
      title,
      mobile,
      verified: true,
    });
    newUser.save((err, user) => {
      if (err) return res.status(500).send(err);
      else return res.status(200).send(user);
    });
  }
});

module.exports = authRoutes;
