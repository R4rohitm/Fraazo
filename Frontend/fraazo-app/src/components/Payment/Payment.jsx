import React from 'react';
import { useState , useEffect } from 'react';
import axios from 'axios';

const Payment = () => {
    const [payment, setPayment] = useState({
      // User Data from context api to be added here
      name: "Nameh Dhiman",
      img: "https://webasset.fraazo.com/production/b70a67f4e825e3d388ac4466952c20a8.svg", //dont replace this img
      price: 250,
    });

    useEffect(() => {
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
            const verifyUrl = "http://localhost:8080/payment/verify";
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
            redirect_url = "/success";  // on payment success route to the ordersuccess page
          }
          window.location.href = redirect_url;
        },
      };
      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    };

    const handlePayment = async () => {
      try {
        const orderUrl = "http://localhost:8080/payment/orders"; 
        const { data } = await axios.post(orderUrl, { amount: payment.price });
        initPayment(data.data);
      } catch (error) {
        console.log(error);
      }
    };

  return (
    <></>
  )
}

export default Payment