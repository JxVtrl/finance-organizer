import React from 'react'
import { Flex } from '@chakra-ui/layout'
import { Chart } from '../../components'

export function Home() {
  return (
      <Flex bgColor='red' w='100%' h='100%'>
          <Chart />
      </Flex>
  )
}
