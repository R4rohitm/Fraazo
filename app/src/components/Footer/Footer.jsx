import React from 'react'
import styles from "./Footer.module.css"
import { HiOutlineMail,HiPhone } from "react-icons/hi";
import image1 from "../Images/img11.svg";
import img2 from "../Images/img12.svg";
import image3 from "../Images/img13.png";
import image4 from "../Images/img14.png";

export const Footer = () => {
  return (
    <>
     <div id={styles.Card}>
        <div id={styles.footer_imgDiv}>
          <img src={image1} alt="img" id={styles.footer_img} />
        </div>

        <div id={styles.Footer_Card}>
          
            <div id={styles.footer_card_1}>
              <div id={styles.footer_card_2}>
                <img src={img2} alt="img" id={styles.footer_card_3} />
                <div id={styles.colorText}>
                  Order online vegetables and fruits directly from the farm.
                  Fraazo is online platform that allows customer to get farm
                  fresh produce directly from farmers.
                </div>
              </div>
              <div id={styles.footer_Card_4}>
                <h3  id={styles.footer_card_5}>
                  Useful Links
                </h3>
                <div ><a id={styles.colorText} href="https://fraazo.com/public/privacy_policy.html" target="blank">Privacy Policy</a></div>
                <div ><a id={styles.colorText} href="https://fraazo.freshdesk.com/support/solutions/61000082765" target="blank">FAQ</a></div>
                <div ><a id={styles.colorText} href="https://fraazo.com/public/terms_and_conditions.html" target="blank">Terms and Conditions</a></div>
              </div>
              <div id={styles.footer_card_7}>
                <h3  id={styles.footer_card_5}>
                  Cities We Serve
                </h3>
                <div id={styles.colorText}>Mumbai</div>
                <div id={styles.colorText}>Hyderabad</div>
                <div id={styles.colorText}>Bangalore</div>
                <div id={styles.colorText}>Delhi</div>
                <div id={styles.colorText}>Noida</div>
                <div id={styles.colorText}>Gurugram</div>
                <div id={styles.colorText}>Pune</div>
              </div>
              <div id={styles.footer_card_8}>
                <h3  id={styles.footer_card_5}>
                   Connect with us
                </h3>

                <div id={styles.footer_card_9}>
                  
                  <div id={styles.footer_card_5} >
                 
                   <div id={styles.colorText}> <HiOutlineMail id="footer_card_10" />    support@fraazo.com</div>
                  </div>
                </div>

                <div id={styles.colorText}>
                <HiPhone />    +91 9152291522
                </div>
                <div>
                  <h3 id={styles.footer_card_5}>
                    Download The App
                  </h3>
                  <div id={styles.footer_card_6}>
                    <a id={styles.colorText} href="https://play.google.com/store/apps/details?id=com.fraazo.app" target="blank"> <img src={image3} alt="img" /></a>
                     <a id={styles.colorText} href="https://apps.apple.com/us/app/fraazo/id1243998420" target="blank"> <img src={image4} alt="img" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div id={styles.footer_card_11}>
              <h1  id={styles.footer_card_12}>
                Fresh Fruits and Vegetables Grocery Shopping Online
              </h1>
              <p >
                The quality of fruits & vegetables is synonymous with its
                freshness, while getting fresh fruits and vegetables is a
                tedious task at times but with Fraazo you can get it delivered
                at your doorstep. Fraazo brings a wide range of farm fresh
                fruits, vegetables and dairy products to you, all in just a
                click. We currently serve about more than 3lacs+ happy customers
                in Mumbai, Navi Mumbai, Thane, Kalyan-Dombivli and Virar. Fraazo
                has made online shopping of fresh produce much easier with its
                hassle-free home delivery options. You can choose the delivery
                slot as per your choice and schedule your order accordingly. Or
                you can simply opt for the option of 90 mins Express Delivery
                and get your order delivered in not more than 90 mins. The farm
                fresh fruits and vegetables on Fraazo are available at best
                prices compared to other vendors & supermarkets. Plus with so
                many exciting offers, one can save up to 20% on their Monthly
                grocery budgets. No need to wait in long queues in crowded
                supermarkets or local mandis for getting the best prices on
                veggies. Kick the stress out & just Fraazo your dose of
                freshness with savings at the comfort of your home. Fraazo
                directly sources fresh fruits and veggies from an extensive
                network of farmers across Maharashtra, hence bringing you fresh
                produce straight from farm to table in less than 12 hours. With
                our Safe & Hygienic packaging and minimal multiple handling, we
                ensure you get the best quality fresh produce.
              </p>
              <p >
                The fruits and vegetables are 100% hand-picked fresh from farm,
                while some products are hydroponically-grown. The wide range of
                fruits and veggies on Fraazo include more than 100+ farm fresh
                vegetables and fruits, starting from regular veggies like dudhi,
                cauliflower, beetroot, cabbage, etc. to exotic veggies like
                broccoli, lettuce etc. We also provide the essential vegetable
                combos like Onion, Potato, Tomato Combo, Salad Combo, Fresh
                Cut-Veg Combos or Fruit Combos like Banana, Apple Combo, & more.
                There are a lot of exciting deals on vegetables & fruits, every
                day of the week, the major highlights being Monday Mandi, Veggie
                Wednesday, Freelivery Thursday & Fruit Friday.For payments, you
                can choose from the multiple payment options as Fraazo accepts
                Debit card, Credit card, UPI options like iMobile, Google Pay,
                8+ e-Wallet options like Phonepe, JioPay, MobiKwik, Sodexo,
                NetBanking and Cash on Delivery (COD). If you ever have an issue
                with missing items or any quality issue, you can raise your
                concern with us in 48 hrs & we shall refund/ replace your
                product with “no-questions-asked-policy”. You can simply connect
                with our Customer Support team via Chat Support or Call on
                9152291522.
              </p>
              <hr id={styles.line1}/>
            </div>
            <div id={styles.copyright}>
               <div id={styles.colorText}> © Copyrights 2022-2023. Fraazo. All Rights Reserved.</div>
            
          </div>
        </div>
      </div>
    </>
  
  )
}
