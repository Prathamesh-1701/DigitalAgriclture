'use client'
import React from 'react'
// import Pic from './imgs/Profile.HEIC'
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  // Image,
  ChakraProvider,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
// import Logo from "./imgs/logo.png"
import { Link } from 'react-router-dom'
import './Navigation.css'
// import Profile from './imgs/Profile.png'


export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <ChakraProvider>
      <Box bg={useColorModeValue('#333')} px={4} height={"70px"} >
        <Flex h={16} alignItems={'center'} justify={'space-between'} >
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={4} alignItems={'center'}>
            <Box > <Link to='/' width={'150px'}>
        {/* <Image className='logo' src= {Logo} alt="Logo" w={130} h={55} /> */}
        </Link></Box>
            <HStack as={'nav'} color={'white'} spacing={4} display={{ base: 'none', md: 'flex' }}
            >
              

              <Flex as="nav" align="center">
          <Flex as="ul" listStyleType="none">
            <li>
              <Link to="/" className="active" backgroundColor="#4CAF50">
                <Text fontSize="lg" fontWeight="bold" p={2}>
                  Home
                </Text>
              </Link>
            </li>
            <li>
              <Link to="/Adopt" >
                <Text fontSize="lg" fontWeight="bold" p={2}>
                  Forcast
                </Text>
              </Link>
            </li>
            <li>
              <Link to="/Donate">
                <Text fontSize="lg" fontWeight="bold" p={2}>
                  Shop
                </Text>
              </Link>
            </li>
            <li>
              <Link to="/Volunteers">
                <Text fontSize="lg" fontWeight="bold" p={2}>
                Diseases
                </Text>
              </Link>
            </li>
            <li>
              <Link  to="/About">
                <Text fontSize="lg" fontWeight="bold" p={2}>
                  About
                </Text>
              </Link>
            </li>
            <li>
              <Link to="/Contact">
                <Text fontSize="lg" fontWeight="bold" p={2}>
                  Contact
                </Text>
              </Link>
            </li>
          </Flex>
        </Flex>

              
            </HStack>
          </HStack>
          <Flex alignItems={'flex-end'} justifyContent={'flex-end'}>
            <Menu>
              <MenuButton
            //   alignSelf={'flex-end'}
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}
                // bg={'red'}
                >
                    
                <Avatar
                  size={'sm'}
                //   src={Profile}
                //   alt={'pic'}
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Prathamesh Dantkale</MenuItem>
                <MenuItem><Link to="https://www.instagram.com/_prathamesh_1701/">Instagram</Link></MenuItem>
                <MenuItem><Link to="https://twitter.com/prathamesh_1701"> Twitter</Link></MenuItem>
                <MenuDivider />
                <MenuItem><Link to="https://github.com/Prathamesh-1701">GitHub</Link></MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
  <Box
    position="absolute"
    top="70px" // Adjust this value to control the distance from the top
    left={0}
    right={0}
    backgroundColor="#333"
    color="#fff"
    zIndex={1000}
  >
    <Stack as={'nav'} spacing={4}>
      <Link to='/'> <Text fontSize="lg" fontWeight="bold" p={2}>
        Home
      </Text></Link>
      <Link to='/Adopt'> <Text fontSize="lg" fontWeight="bold" p={2}>
        Adopt
      </Text></Link>
      <Link to='/Donate'> <Text fontSize="lg" fontWeight="bold" p={2}>
        Donate
      </Text></Link>
      <Link to='/Volunteers'> <Text fontSize="lg" fontWeight="bold" p={2}>
        Volunteer
      </Text></Link>
      <Link to='/About'> <Text fontSize="lg" fontWeight="bold" p={2}>
        About
      </Text></Link>
      <Link to='/Contact'> <Text fontSize="lg" fontWeight="bold" p={2}>
        Contact
      </Text></Link>
    </Stack>
  </Box>
) : null}

      </Box>

      
    </ChakraProvider>
  )
}
