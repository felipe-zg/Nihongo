import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Button, HamburgerIcon, VStack } from 'native-base';
import { useScreenWidth } from '../../hooks';

const routes = [
  { name: 'ミニストーリー', path: '/ministory' },
  { name: '文字・語彙', path: '/moji-goi-deck' },
  { name: '日本語の森・文法', path: '/grammar/nihongo-no-mori' },
  { name: '漢字 M2', path: '/kanji-m2' },
  { name: 'JLPT', path: '/JLPT/N3' },
  { name: 'JLPT Vocabs N3', path: '/JLPT/vocabs?level=N3' },
  { name: 'Levels', path: '/' },
  { name: 'Kanji (YDC)', path: '/kanji-ydc' },
  { name: 'Kanji (Genki)', path: '/kanji-genki' },
  { name: 'Kanji practice', path: '/kanji-practice' },
  { name: 'Words (YDC)', path: '/words-ydc' },
  { name: 'Words (Genki)', path: '/words-genki' },
  { name: 'Periods', path: '/periods' },
  { name: 'Days of the month', path: '/days-of-the-month' },
  { name: 'Potential form', path: '/potential-form' },
  { name: 'Words quizz', path: '/words-quizz' },
  { name: 'Verbs', path: '/verbs' },
  { name: 'Lessons', path: '/lessons' },
  { name: 'JLPT Vocabs N2', path: '/JLPT/vocabs?level=N2' },
  { name: 'JLPT Grammar N2', path: '/JLPT/grammar/N2' },
  { name: 'Music', path: '/music/leina/nostalgia' },
  { name: 'Real Japanese Audio', path: '/audio/real-japanese' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const screenWidth = useScreenWidth();

  const getLinkStyle = (isActive: boolean) => ({
    color: isActive ? 'white' : 'white',
    fontWeight: isActive ? 'bold' : 'normal',
  });

  const Menu = () => (
    <VStack space={4} minHeight="100vh" justifyItems="flex-start" >
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

  return screenWidth < 1200 ? (
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