import React, { useState } from 'react'
import styles from "./Menu.module.css"
import {Accordion,AccordionItem,AccordionButton,AccordionPanel,} from '@chakra-ui/react'
import {MinusIcon,AddIcon}from "@chakra-ui/icons"
import { Box } from '@chakra-ui/react'

const MenuPage = () => {
  const[type,setType]=useState("exoticfruits")
  return (
    <div className={styles.menu_page_container}>
    <div className={styles.menu_page_left_container}>
    <Accordion allowToggle>
    <AccordionItem>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton>
            <Box flex='1' textAlign='left'>
              Fruits
            </Box>
            {isExpanded ? (
              <MinusIcon style={{color:"#4fbb90"}} fontSize='12px' />
            ) : (
              <AddIcon style={{color:"#4fbb90"}} fontSize='12px' />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel onClick={()=>setType("exoticfruits")} className={styles.left_accordianPanel} pb={4}>
         Exotic Fruits
        </AccordionPanel>
        <AccordionPanel onClick={()=>setType("freshfruits")} className={styles.left_accordianPanel} pb={4}>
         Fresh Fruits
        </AccordionPanel>
        <AccordionPanel onClick={()=>setType("fruitscombos")} className={styles.left_accordianPanel} pb={4}>
         Fruits Combos
        </AccordionPanel>
        <AccordionPanel onClick={()=>setType("mangoes")} className={styles.left_accordianPanel} pb={4}>
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
            <Box flex='1' textAlign='left'>
              Vegetables
            </Box>
            {isExpanded ? (
              <MinusIcon style={{color:"#4fbb90"}} fontSize='12px' />
            ) : (
              <AddIcon style={{color:"#4fbb90"}} fontSize='12px' />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel onClick={()=>setType("veggies")} className={styles.left_accordianPanel} pb={4}>
         Daily Veggies
        </AccordionPanel>
        <AccordionPanel onClick={()=>setType("herbs")} className={styles.left_accordianPanel} pb={4}>
         Herbs & Leafies
        </AccordionPanel>
        <AccordionPanel onClick={()=>setType("exoticVegetables")} className={styles.left_accordianPanel} pb={4}>
         Exotic Vegetables
        </AccordionPanel>
        <AccordionPanel onClick={()=>setType("cutSprouts")} className={styles.left_accordianPanel} pb={4}>
         Cuts, Peeled & Sprouts
        </AccordionPanel>
        <AccordionPanel onClick={()=>setType("vegetableCombo")} className={styles.left_accordianPanel} pb={4}>
         Vegetable Combos
        </AccordionPanel>
      </>
    )}
  </AccordionItem>
    </Accordion>
    </div>
    <div className={styles.menu_page_right_container}>
     { type==="exoticfruits" ? (
        <div>exoticfruits</div>
      ): type==="freshfruits" ? (
        <div>freshfruits</div>
      ): type==="fruitscombos" ? (
        <div>fruitscombos</div>
      ): type==="mangoes" ? (
        <div>mangoes</div>
      ): type==="veggies" ? (
        <div>veggies</div>
      ): type==="herbs" ? (
        <div>herbs</div>
      ): type==="exoticVegetables" ? (
        <div>exoticvegetables</div>
      ): type==="cutSprouts" ? (
        <div>cutSprouts</div>
      ): type==="vegetableCombo" ? (
        <div>vegetableCombo</div>
      ) : <div></div>
     }
    </div>

    </div>
  )
}

export default MenuPage