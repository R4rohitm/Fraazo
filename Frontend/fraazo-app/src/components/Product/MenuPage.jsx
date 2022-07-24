import React, { useState } from "react";
import styles from "./Menu.module.css";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";
import { MinusIcon, AddIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import ProductItem from "./ProductItem";

const MenuPage = () => {
  const [type, setType] = useState("exoticfruits");
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let res = await fetch("https://fraazonem201.herokuapp.com/items/");
      let data = await res.json();
      //console.log(data)
      setProduct(data);
    };
    getData();
  }, [setType]);

  // FRUITS
  let exoticfruits = product.filter((el) => {
    return el.category === "fruits" && el.subcategory === "exotic";
  });

  let freshfruits = product.filter((el) => {
    return el.category === "fruits" && el.subcategory === "fresh";
  });

  let fruitscombos = product.filter((el) => {
    return el.category === "fruits" && el.subcategory === "combos";
  });

  let mangoes = product.filter((el) => {
    return el.category === "fruits" && el.subcategory === "mangoes";
  });

  //Vegetables
  let dailyveggies = product.filter((el) => {
    return el.category === "vegetables" && el.subcategory === "daily";
  });
  let herbsLeafes = product.filter((el) => {
    return el.category === "vegetables" && el.subcategory === "herbs";
  });
  let exoticVegetables = product.filter((el) => {
    return el.category === "vegetables" && el.subcategory === "exotic";
  });
  let cutpeeledsprouts = product.filter((el) => {
    return el.category === "vegetables" && el.subcategory === "cuts";
  });
  let vegetableCombo = product.filter((el) => {
    return el.category === "vegetables" && el.subcategory === "combos";
  });

  return (
    <div className={styles.menu_page_container}>
      <div className={styles.menu_page_left_container}>
        <Accordion allowToggle>
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      Fruits
                    </Box>
                    {isExpanded ? (
                      <MinusIcon style={{ color: "#4fbb90" }} fontSize="12px" />
                    ) : (
                      <AddIcon style={{ color: "#4fbb90" }} fontSize="12px" />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  onClick={() => setType("exoticfruits")}
                  className={styles.left_accordianPanel}
                  pb={4}
                >
                  Exotic Fruits
                </AccordionPanel>
                <AccordionPanel
                  onClick={() => setType("freshfruits")}
                  className={styles.left_accordianPanel}
                  pb={4}
                >
                  Fresh Fruits
                </AccordionPanel>
                <AccordionPanel
                  onClick={() => setType("fruitscombos")}
                  className={styles.left_accordianPanel}
                  pb={4}
                >
                  Fruits Combos
                </AccordionPanel>
                <AccordionPanel
                  onClick={() => setType("mangoes")}
                  className={styles.left_accordianPanel}
                  pb={4}
                >
                  Mangoes
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      Vegetables
                    </Box>
                    {isExpanded ? (
                      <MinusIcon style={{ color: "#4fbb90" }} fontSize="12px" />
                    ) : (
                      <AddIcon style={{ color: "#4fbb90" }} fontSize="12px" />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  onClick={() => setType("veggies")}
                  className={styles.left_accordianPanel}
                  pb={4}
                >
                  Daily Veggies
                </AccordionPanel>
                <AccordionPanel
                  onClick={() => setType("herbs")}
                  className={styles.left_accordianPanel}
                  pb={4}
                >
                  Herbs & Leafies
                </AccordionPanel>
                <AccordionPanel
                  onClick={() => setType("exoticVegetables")}
                  className={styles.left_accordianPanel}
                  pb={4}
                >
                  Exotic Vegetables
                </AccordionPanel>
                <AccordionPanel
                  onClick={() => setType("cutSprouts")}
                  className={styles.left_accordianPanel}
                  pb={4}
                >
                  Cuts, Peeled & Sprouts
                </AccordionPanel>
                <AccordionPanel
                  onClick={() => setType("vegetableCombo")}
                  className={styles.left_accordianPanel}
                  pb={4}
                >
                  Vegetable Combos
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        </Accordion>
      </div>
      <div className={styles.menu_page_right_container}>
        {type === "exoticfruits" ? (
          <div>
            <h2 style={{ paddingBottom: "20px" }}>Exotic Fruits</h2>
            <div className={styles.product_page_container}>
              {exoticfruits.map((el) => (
                <ProductItem key={el._id} {...el} />
              ))}
            </div>
          </div>
        ) : type === "freshfruits" ? (
          <div>
            <h2 style={{ paddingBottom: "20px" }}>Fresh Fruits</h2>
            <div className={styles.product_page_container}>
              {freshfruits.map((el) => (
                <ProductItem key={el._id} {...el} />
              ))}
            </div>
          </div>
        ) : type === "fruitscombos" ? (
          <div>
            <h2 style={{ paddingBottom: "20px" }}>Fruit Combos</h2>
            <div className={styles.product_page_container}>
              {fruitscombos.map((el) => (
                <ProductItem key={el._id} {...el} />
              ))}
            </div>
          </div>
        ) : type === "mangoes" ? (
          <div>
            <h2 style={{ paddingBottom: "20px" }}>Mangoes</h2>
            <div className={styles.product_page_container}>
              {mangoes.map((el) => (
                <ProductItem key={el._id} {...el} />
              ))}
            </div>
          </div>
        ) : type === "veggies" ? (
          <div>
            <h2 style={{ paddingBottom: "20px" }}>Daily Veggies</h2>
            <div className={styles.product_page_container}>
              {dailyveggies.map((el) => (
                <ProductItem key={el._id} {...el} />
              ))}
            </div>
          </div>
        ) : type === "herbs" ? (
          <div>
            <h2 style={{ paddingBottom: "20px" }}>Herbs & Leafies</h2>
            <div className={styles.product_page_container}>
              {herbsLeafes.map((el) => (
                <ProductItem key={el._id} {...el} />
              ))}
            </div>
          </div>
        ) : type === "exoticVegetables" ? (
          <div>
            <h2 style={{ paddingBottom: "20px" }}>Exotic Vegetables</h2>
            <div className={styles.product_page_container}>
              {exoticVegetables.map((el) => (
                <ProductItem key={el._id} {...el} />
              ))}
            </div>
          </div>
        ) : type === "cutSprouts" ? (
          <div>
            <h2 style={{ paddingBottom: "20px" }}>Cuts, Peeled & Sprouts</h2>
            <div className={styles.product_page_container}>
              {cutpeeledsprouts.map((el) => (
                <ProductItem key={el._id} {...el} />
              ))}
            </div>
          </div>
        ) : type === "vegetableCombo" ? (
          <div>
            <h2 style={{ paddingBottom: "20px" }}>Vegetable Combos</h2>
            <div className={styles.product_page_container}>
              {vegetableCombo.map((el) => (
                <ProductItem key={el._id} {...el} />
              ))}
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default MenuPage;
