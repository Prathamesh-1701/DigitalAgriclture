'use client';

import React from 'react';
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  // useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  BoxProps,
  FlexProps,
  // SlideFade,
  // DrawerOverlay,
  // Button
} from '@chakra-ui/react';
// import './Slidebar'

import { Link } from 'react-router-dom';
import { MdAccountBox } from "react-icons/md";
import {FaDisease,FaShoppingCart} from 'react-icons/fa'
import {
  FiHome,
  FiTrendingUp,
  // FiCompass,
  // FiStar,
  FiSettings,
  FiMenu,
  
} from 'react-icons/fi';
import { IconType } from 'react-icons';
import { ReactText } from 'react';
// import './Slidebar'
interface LinkItemProps {
  name: string;
  icon: IconType;
  link: string;
}

const LinkItems: Array<LinkItemProps> = [
  { name: 'Home', icon: FiHome, link: '/' },
  { name: 'Forcast', icon: FiTrendingUp, link: '/forcast' },
  { name: 'Shop', icon: FaShoppingCart, link: '/shop' },
  { name: 'Diseases', icon: FaDisease, link: '/diseases' },
  { name: 'About', icon: FiSettings, link: '/About' },
  { name: 'Contact', icon: MdAccountBox, link: '/Contact' },
];

// Add CSS using Chakra UI styling
const styles = {
  navItem: {
    textDecoration: 'none',
    _focus: { boxShadow: 'none' },
  },
};


export default function SimpleSidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    // <SlideFade offsetY="20px" >
    <Box  display={'flex'}   >
      {/* Sidebar Content */}
      {/* <SidebarContent onClose={onClose} isOpen={isOpen} display={{ base: 'none', md: 'block' }}  /> */}
      <Drawer

        
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        //  style={bgStyle}
        // size="1px"
        // width={'1%'}
      >
        <DrawerContent >
          {/* <DrawerOverlay/> */}
          <SidebarContent onClose={onClose} isOpen={isOpen} />
        </DrawerContent>
      </Drawer>
      {/* Mobile Nav */}
      <MobileNav isOpen={isOpen} onOpen={onOpen} />
      {/* <div > */}
      
      <Box ml={{ base: 0, md: 0 }} width={'0%'}  >
        {/* Content */}
        {/* <h1>Hello</h1> */}
      </Box>
      {/* </div> */}
    </Box>
    // </SlideFade>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
  isOpen: boolean;
}

const bgStyle = {
  // bgGradient='linear(to-r, green.200, pink.500)'
  // backgroundColor: '#61554D',
  backdropFilter: 'blur(0.01px)',
  backgroundImage: `url(https://plus.unsplash.com/premium_photo-1678344165196-261064eb31e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2187&q=80)`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  // opacity: .7,
};


const SidebarContent = ({ onClose, isOpen, ...rest }: SidebarProps) => {
  return (
    <Box
    // display={ 'Flex' } 
    className="bg" style={bgStyle}
    // backgroundImage={}
    //  backgroundImage={URL('./imgs/Background.jpg')}
      pos="fixed"
      zIndex="1"
      
      fontFamily={'monospace'}
      textDecoration={'none'}
      h="full"
      height={'700px'}
      {...rest}
    >
    
      <Flex  h="200px"   alignItems="center" mx="16" justifyContent="space-around">
        {/* <Box justifyContent={"space-evenly"} > */}
          
        <Text bgGradient='linear(to-r , #FFFFFF, #1BBA9D,#FFFFFF,#1BBA9D , #AEAEAE)' bgClip='text'  marginRight="29%" fontSize="3xl" fontFamily="monospace" fontWeight="bold">

        Empowering Sustainable Agriculture Website
        </Text>
        <CloseButton display={{ base: 'flex', md: 'flex' }}  onClick={onClose} />
        {/* </Box> */}
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} link={link.link} href={link.link}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactText;
  link: string;
  href: string; 
}

const NavItem = ({ icon, children,link, href, ...rest }: NavItemProps) => {
  return (
    <Link to={link}>
    <Box

      color={'white'}
      
      
      href={href}
      _hover={{bgGradient: 'linear(to-r, #086010, #52AE22)', color: 'white' }}
      {...styles.navItem}
      {...rest}
    >
      <Flex align="center" p="4" mx="4" borderRadius="lg" role="group" cursor="pointer">
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{ color: 'white' }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
    </Link>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
  isOpen: boolean;
}

const bgStyle1 = {
  // bgGradient='linear(to-r, green.200, pink.500)'
  // backgroundColor: '#61554D',
  backdropFilter: 'blur(0.01px)',
  backgroundImage: `url(https://img.freepik.com/free-photo/brown-soil-background-gardening_53876-133209.jpg?w=1060&t=st=1696231750~exp=1696232350~hmac=3aed6304a09c1a38c427688b05324b197990260aab1ae256397952796cede031)`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

const MobileNav = ({ onOpen, isOpen, ...rest }: MobileProps) => {


  return (
   
      
    <Flex
    className="bg1" style={bgStyle1}
      // bg={'#61554D'}
      // Padding="750px"
       width={'100%'}
      // Height= {"500px"}
      // marginTop="1%"
      justifyContent={'space-between'}
      // bgGradient='linear(to-l, #FDEF5C, #52AE22)'
      // flexDirection={'column'}
      
      // borderBottomWidth="1px"
      // borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      
      {...rest}
    >
      <Box display="flex" >
      <IconButton 
        bg={'white'}
      margin="3vh"
       variant="outline" onClick={onOpen} 
       aria-label="open menu" icon={<FiMenu />} />
      </Box>
      <Text bgGradient='linear(to-l , #086010, #1BBA9D,#52AE22 )'
  bgClip='text'
  fontSize='6xl'
  fontWeight='extrabold' fontStyle={'oblique'} fontFamily="monospace" paddingRight={'23%'}  >
        DigitalAgriclture
      </Text>
      
    </Flex>
    
    
  );
};
