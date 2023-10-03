import React from 'react';
import { Box, Flex, Heading, Text, Link, IconButton } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box as="footer" bg="gray.800" color="white" py={10}>
      <Flex justifyContent="space-around">
        <Box>
          <Heading fontSize="xl">Contact Us</Heading>
          <Text>Email: info@example.com</Text>
          <Text>Phone: +123-456-7890</Text>
        </Box>

        <Box>
          <Heading fontSize="xl">Follow Us</Heading>
          <Flex>
            <IconButton
              as={Link}
              href="#"
              target="_blank"
              aria-label="Facebook"
              icon={<FaFacebook />}
              variant="ghost"
              mr={2}
            />
            <IconButton
              as={Link}
              href="#"
              target="_blank"
              aria-label="Twitter"
              icon={<FaTwitter />}
              variant="ghost"
              mr={2}
            />
            <IconButton
              as={Link}
              href="#"
              target="_blank"
              aria-label="Instagram"
              icon={<FaInstagram />}
              variant="ghost"
            />
          </Flex>
        </Box>

        <Box>
          <Heading fontSize="xl">Quick Links</Heading>
          <Link href="#">Home</Link>
          <Link href="#">Products</Link>
          <Link href="#">Services</Link>
          <Link href="#">Blog</Link>
          <Link href="#">Contact</Link>
        </Box>
      </Flex>

      <Box mt={6} textAlign="center">
        <Text>&copy; 2023 Your Agriculture Website. All rights reserved.</Text>
      </Box>
    </Box>
  );
};

export default Footer;
