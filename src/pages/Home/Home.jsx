import React, { useEffect, useState } from 'react'
import { Flex, Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { financeTypes } from '../../data'
import { Card } from '../../components'

export function Home() {
  const [financeCards, setFinanceCards] = useState([])

  useEffect(() => {
    setFinanceCards(financeTypes.watch)
  }, [])

  return (
    <Flex w='100%' h='100%' flexDir='column' >
      <HomeHead />
      <Flex flexDir='column' gap='15px' w='100%'>
        {financeCards?.map((item, idx) => <Card key={idx} idx={idx} item={item} /> )}
      </Flex>
    </Flex>
  )
}

function HomeHead() {
  return (
    <Flex mb='10px'>
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<ChevronDownIcon />}
          h='35px'
        >
          Charts
        </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  )
}
