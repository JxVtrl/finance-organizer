import React from 'react'
import { Flex, Avatar, Text } from '@chakra-ui/react'
import { useLocation } from 'react-router'
import { euPhoto } from '../../assets/img'

export function Header() {
  const location = useLocation()

  switch (location.pathname) {
    case '/home':
      return <HomeHeader />
    
    default:
      return <>default</>
  }
}

function HomeHeader() {
  return (
    <Flex align='center' w='100%' justify='space-between' mb="10px">
      <Text fontFamily='Poppins' fontWeight='500' fontSize='18px' color='white'>
        Hello, João
      </Text>
      <Avatar
        transition='all 0.2s ease'
        _hover={{
          transform: 'scale(1.1)'
        }}
        cursor='pointer'
        name='João'
        src={euPhoto}
      />
    </Flex>
  )
}
