import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Button, HamburgerIcon, VStack } from 'native-base';
import { useScreenWidth } from '../../hooks';

const routes = [
  { name: 'Home', path: '/' },
  { name: 'Kanji', path: '/kanji' },
  { name: 'Words', path: '/words' },
  { name: 'Periods', path: '/periods' },
  { name: 'Days of the month', path: '/days-of-the-month' },
  { name: 'Potential form', path: '/potential-form' },
  { name: 'Words quizz', path: '/words-quizz' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const screenWidth = useScreenWidth();

  const getLinkStyle = (isActive: boolean) => ({
    color: isActive ? 'white' : 'white',
    fontWeight: isActive ? 'bold' : 'normal',
    textDecorationLine: 'none',
  });

  const Menu = () => (
    <VStack space={4} justifyContent="center">
        {routes.map((route) => (
          <NavLink key={route.path} to={route.path}>
            {({ isActive }) => (
              <Button variant="ghost" _text={getLinkStyle(isActive)} backgroundColor={isActive ? 'darkBlue.800' : 'darkBlue.900'}>
                {route.name}
              </Button>
            )}
          </NavLink>
        ))}
      </VStack>
  );

  return screenWidth < 900 ? (
    <>
      {isOpen && (
        <Box bg="darkBlue.900" px="4" py="3" width="100%" height="100%">
          <Menu />
        </Box>
      )}
      {!isOpen && (
        <Button onPress={() => setIsOpen(true)} variant="solid" colorScheme="light" position="absolute" top="10px" left="10px" zIndex={2}>
          <HamburgerIcon color="white" />
        </Button>
      )}
    </>
  ) : (
    <Box bg="darkBlue.900" px="4" py="3" width="15%" height="100%">
      <Menu />
    </Box>
  );
};

export default Navbar;