import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Button, HamburgerIcon, VStack } from 'native-base';
import { useScreenWidth } from '../../hooks';

const routes = [
  { name: 'Home', path: '/' },
  { name: 'Nostalgia', path: '/music?artist=Leina&song=nostalgia' },
  { name: 'ブルーライト', path: '/music?artist=Others&song=ブルーライト' },
  { name: '死ぬのがいいわ', path: '/music?artist=Others&song=死ぬのがいいわ' },
  { name: '東京', path: '/music?artist=Others&song=東京' },
  { name: '革命道中', path: '/music?artist=Others&song=革命道中' },
]

const MusicNavbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const screenWidth = useScreenWidth();

  const getLinkStyle = (isActive: boolean) => ({
    color: isActive ? 'white' : 'white',
    fontWeight: isActive ? 'bold' : 'normal',
  });

  const Menu = () => (
    <VStack space={4} height="100vh" justifyItems="flex-start" >
        {routes.map((route) => (
          <NavLink key={route.path} to={route.path} style={{ textDecoration: 'none', }}>
            {({ isActive }) => (
              <Button variant="ghost" _text={getLinkStyle(isActive)}>
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

export default MusicNavbar;