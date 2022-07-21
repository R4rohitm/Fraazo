import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import MenuPage from './MenuPage'

const Menu = () => {
  return (
    <div>
        <ChakraProvider>
        <MenuPage/>
        </ChakraProvider>
    </div>
  )
}

export default Menu