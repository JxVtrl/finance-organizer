import { Flex } from '@chakra-ui/layout'
import React from 'react'
import { Header } from '../../sections'

export function AppLayout({ children }) {
  return (
    <Flex
      p='20px'
      flexDir='column'
    >
      <Header />
      {children}
      
      </Flex>
  )
}
