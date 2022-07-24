import React from "react";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { CartContext } from "../../context/CartContext";
import { UserContext } from "../../context/UserContext";

const userId = localStorage.getItem("userId");
const Payment = () => {
  const { cartTotal } = useContext(CartContext);
  const { userData } = useContext(UserContext);

  const [payment, setPayment] = useState({
    // User Data from context api to be added here
    name: userData.firstname + " " + userData.lastname,
    img: "https://webasset.fraazo.com/production/b70a67f4e825e3d388ac4466952c20a8.svg", //dont replace this img
    price: cartTotal,
  });

  const [user, setUser] = useState();

  const getUser = async (userId) => {
    console.log(userId);
    try {
      let response = await fetch(
        `https://fraazonem201.herokuapp.com/users/${userId}`
      );
      let data = await response.json();
      console.log(data);
      setUser(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUser();
    handlePayment();
  }, []);

  const initPayment = (data) => {
    const options = {
      key: "rzp_test_0kgfyTFRAwA2TL",
      amount: data.amount,
      currency: data.currency,
      name: payment.name,
      description: "Transaction",
      image: payment.img,
      order_id: data.id,
      handler: async (response) => {
        try {
          const verifyUrl = "https://fraazonem201.herokuapp.com/payment/verify";
          const { data } = await axios.post(verifyUrl, response);
          console.log(data);
        } catch (error) {
          console.log(error);
        }
        let redirect_url;
        if (
          typeof response.razorpay_payment_id == "undefined" ||
          response.razorpay_payment_id < 1
        ) {
          redirect_url = "/";
        } else {
          redirect_url = "/success"; // on payment success route to the ordersuccess page
        }
        window.location.href = redirect_url;
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  const handlePayment = async () => {
    try {
      const orderUrl = "https://fraazonem201.herokuapp.com/payment/orders";
      const { data } = await axios.post(orderUrl, { amount: payment.price });
      initPayment(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return <></>;
};

export default Payment;
