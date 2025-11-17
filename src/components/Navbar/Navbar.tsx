import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Button, VStack, HamburgerIcon, CloseIcon } from 'native-base';
import { motion, useAnimation } from 'framer-motion';

const MotionButton = motion(Button);

const routes = [
  { name: 'ミニストーリー', path: '/ministory' },
  { name: '文字・語彙', path: '/moji-goi-deck' },
  { name: '日本語の森・文法', path: '/grammar/nihongo-no-mori' },
  { name: '漢字 M2', path: '/kanji-m2' },
  { name: '日本語の森復習N3', path: '/JLPT/NihongoNoMori/N3' },
  { name: '日本語500・N3', path: '/JLPT/Nihongo500Mondai?level=N3' },
  { name: '過去のJLPT試験N3', path: '/JLPT/PastExams' },
  { name: 'トモ先生 JLPT', path: '/JLPT/TomoSenseiJLPT' },
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
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const controls = useAnimation();

  const getLinkStyle = (isActive: boolean) => ({
    color: 'white',
    fontWeight: isActive ? 'bold' : 'normal',
  });

  const toggleMenu = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY + 10) {
        // scrolling down
        controls.start({ opacity: 0, y: -10, transition: { duration: 0.4 } });
      } else if (currentScrollY < lastScrollY - 10) {
        // scrolling up
        controls.start({ opacity: 1, y: 0, transition: { duration: 0.4 } });
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  return (
    <>
      {/* Animated Hamburger Button */}
      <MotionButton
        animate={controls}
        onPress={toggleMenu}
        variant="solid"
        colorScheme="light"
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

      {/* Fullscreen Overlay Menu */}
      {isOpen && (
        <Box
          position="fixed"
          top="0"
          left="0"
          width="100vw"
          height="100vh"
          bg="darkBlue.900"
          zIndex={40}
          px="6"
          py="70"
          overflowY="auto"
        >
          <VStack space={4} alignItems="center">
            {routes.map((route) => (
              <NavLink
                key={route.path}
                to={route.path}
                style={{ width: '100%', textDecoration: 'none' }}
                onClick={() => setIsOpen(false)}
              >
                {({ isActive }) => (
                  <Button
                    variant="ghost"
                    width="100%"
                    justifyContent="flex-start"
                    _text={getLinkStyle(isActive)}
                    _hover={{ bg: 'darkBlue.800' }}
                  >
                    {route.name}
                  </Button>
                )}
              </NavLink>
            ))}
          </VStack>
        </Box>
      )}
    </>
  );
};

export default Navbar;
