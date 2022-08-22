import React, { useEffect, useState } from 'react'
import { Image, Flex, Text } from '@chakra-ui/react'

export function Card({ item, idx }) {  

    return (
        <Flex
            w='100%'
            h='100px'
            position='relative'
            overflow='hidden'
            borderRadius='12px'
            cursor='pointer'
            transition='all 0.5s ease'
            boxShadow='10px 5px 15px #00000040'
            _hover={{
                boxShadow: '10px 5px 8px #00000040',
                transform: 'scale(1.05)'
            }}
        >
            <Image
                position='absolute'
                objectFit='cover'
                w='100%'
                h='100%'
                src={item.src}
                alt={item.description}
            />
            <Flex zIndex='2' alignSelf='flex-end' bgColor='#ffffff90' w='100%'>
                <Text
                    fontFamily='Poppins'
                >
                    {item.description}

                </Text>

            </Flex>
        </Flex>
    )
}
