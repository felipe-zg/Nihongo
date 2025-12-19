import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Box,
  Button,
  VStack,
  HStack,
  Text,
  HamburgerIcon,
  CloseIcon,
} from 'native-base';
import { motion, useAnimation } from 'framer-motion';
import { routes } from './routes';

const MotionButton = motion(Button);

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const controls = useAnimation();

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const toggleSubmenu = (name: string) => {
    setOpenSubmenu((prev) => (prev === name ? null : name));
  };

  /* Hide / show hamburger on scroll */
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY + 10) {
        controls.start({ opacity: 0, y: -10, transition: { duration: 0.3 } });
      } else if (currentScrollY < lastScrollY - 10) {
        controls.start({ opacity: 1, y: 0, transition: { duration: 0.3 } });
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  return (
    <>
      {/* Hamburger */}
      <MotionButton
        animate={controls}
        onPress={toggleMenu}
        position="fixed"
        top="16px"
        left="16px"
        zIndex={50}
        borderRadius="full"
        width="48px"
        height="48px"
        bg="darkBlue.900"
        _pressed={{ bg: 'darkBlue.700' }}
      >
        {isOpen ? <CloseIcon color="white" /> : <HamburgerIcon color="white" />}
      </MotionButton>

      {/* Fullscreen Menu */}
      {isOpen && (
        <Box
          position="fixed"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bg="darkBlue.900"
          zIndex={40}
          px="6"
          py="70"
          overflowY="auto"
        >
          <VStack space={2}>
            {routes.map((route) => {
              /* ---------------- Submenu ---------------- */
              if ('children' in route) {
                const isSubOpen = openSubmenu === route.name;

                return (
                  <Box key={route.name}>
                    <Button
                      variant="ghost"
                      px="3"
                      py="2"
                      onPress={() => toggleSubmenu(route.name)}
                      _hover={{ bg: 'darkBlue.800' }}
                      justifyContent="flex-start"
                    >
                      <HStack
                        width="100%"
                        alignItems="center"
                        justifyContent="space-between"
                      >
                        <Text color="white" fontWeight="bold">
                          {route.name}
                        </Text>

                        <Text
                          color="white"
                          fontSize="sm"
                          style={{
                            transform: [{ rotate: isSubOpen ? '180deg' : '0deg' }],
                          }}
                        >
                          &nbsp;&nbsp;▼
                        </Text>
                      </HStack>
                    </Button>

                    {isSubOpen && (
                      <VStack pl="4" mt="1" space={1}>
                        {route.children.map((child) => (
                          <NavLink
                            key={child.path}
                            to={child.path}
                            style={{ textDecoration: 'none' }}
                            onClick={() => setIsOpen(false)}
                          >
                            {({ isActive }) => (
                              <Button
                                variant="ghost"
                                px="3"
                                py="1.5"
                                justifyContent="flex-start"
                                _text={{
                                  color: 'white',
                                  fontSize: 'sm',
                                  fontWeight: isActive ? 'bold' : 'normal',
                                }}
                                _hover={{ bg: 'darkBlue.800' }}
                              >
                                {child.name}
                              </Button>
                            )}
                          </NavLink>
                        ))}
                      </VStack>
                    )}
                  </Box>
                );
              }

              /* ---------------- Normal link ---------------- */
              return (
                <NavLink
                  key={route.path}
                  to={route.path}
                  style={{ textDecoration: 'none' }}
                  onClick={() => setIsOpen(false)}
                >
                  {({ isActive }) => (
                    <Button
                      variant="ghost"
                      px="3"
                      py="2"
                      justifyContent="flex-start"
                      _text={{
                        color: 'white',
                        fontWeight: isActive ? 'bold' : 'normal',
                      }}
                      _hover={{ bg: 'darkBlue.800' }}
                    >
                      {route.name}
                    </Button>
                  )}
                </NavLink>
              );
            })}
          </VStack>
        </Box>
      )}
    </>
  );
};

export default Navbar;
