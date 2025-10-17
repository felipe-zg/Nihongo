import React from "react";
import { Box, Button, Divider, Heading, HStack, Select, Stack, Switch, Text} from "native-base";
import { parseRuby } from "../../utils/music/rubyParser";
import { MiniStoryTopics } from "../../consts/MiniStory";
import { AudioPlayer } from "../../components";

type MiniStoryProps = {
  story: MiniStory;
  selectedStory: string;
  onStoryChange: (id: string) => void;
  selectedLevel: 'N2' | 'N3';
  onLevelChange: (level: 'N2' | 'N3') => void;
  selectedTopic: keyof typeof MiniStoryTopics | "";
  onTopicChange: (topic: keyof typeof MiniStoryTopics | "") => void;
  availableStories: string[];
  selectedStartPage: number;
  onStartPageChange: (page: number) => void;
  selectedEndPage: number;
  onEndPageChange: (page: number) => void;
  availablePages: number[];
  onNextStory: () => void;
}

const MiniStory: React.FC<MiniStoryProps> = ({ 
  story,
  selectedStory,
  onStoryChange,
  selectedLevel,
  onLevelChange,
  selectedTopic,
  onTopicChange,
  availableStories,
  selectedStartPage,
  onStartPageChange,
  selectedEndPage,
  onEndPageChange,
  availablePages,
  onNextStory,
}) => {
  const [isFuriganaHidden, setIsFuriganaHidden] = React.useState(false);
  const [isKanjiHidden, setIsKanjiHidden] = React.useState(false);
  const [isLargeLetter, setIsLargeLetter] = React.useState(false);
  const { rubyStory, rubyWords, translation } = story;

  const redColor = '#ee1313ff';
  const whiteColor = '#fdf6f6ff';

  const storyParts = rubyStory.map((rubypart, index) => {
    let color = whiteColor;
    const parts = parseRuby(rubypart.dialogue);
    const formattedDialogue = parts.map(a => {
      if (a.kanji === '<') {
        color = isKanjiHidden ? "transparent" : redColor;
        return null;
      }
      if (a.kanji === '>') {
        color = whiteColor;
        return null;
      }

      const mainContent = a.furigana ? 
        `<ruby style="color: ${color};">
          ${a.kanji}
          ${isFuriganaHidden || isKanjiHidden ? '' : '<rt>' + a.furigana + '</rt>'}
        </ruby>` 
      : a.kanji;
      return `<span style="color: ${color};">${mainContent}</span>`;
    }
    ).join('');
    const fontSize = isLargeLetter ? '2rem' : '1.3rem';
    return (
      <HStack>
        {rubypart.character !== "" && (
          <Box flex={1} alignItems={"center"} justifyContent={"flex-start"} mt={1}>
            <p style={{ color: "#ea84cdff", fontSize: fontSize,  marginTop: "0.5rem", marginBottom: "0.5rem", lineHeight: "2rem"}}>{rubypart.character}:</p>
          </Box>
        )}
        <Box flex={11} key={index}>
          <p style={{ fontSize: fontSize, marginTop: "0.5rem", marginBottom: "0.5rem", lineHeight: isLargeLetter && (isFuriganaHidden || isKanjiHidden) ? "3rem" : "2rem"}} dangerouslySetInnerHTML={{ __html: formattedDialogue }}  />
        </Box>
      </HStack>
    )
  });

  const words = rubyWords.map((rubypart, index) => {
    const parts = parseRuby(rubypart.kanji);
    const formattedWords = parts.map(a =>
      a.furigana
        ? `<ruby>${a.kanji}<rt style="color: ${isFuriganaHidden ? "transparent" : redColor};">${a.furigana}</rt></ruby>`
        : a.kanji
    ).join('');
    return (
      <>
        <HStack>
          <Box flex={1}>
            <p style={{color: whiteColor}} dangerouslySetInnerHTML={{ __html: formattedWords }} />
          </Box>
          <Box  flex={4} justifyContent={"center"}>
            <Text color={isFuriganaHidden ? "transparent" : "red.600"}>{rubypart.english}</Text>
          </Box>
          <Box  flex={1} justifyContent={"center"}>
            <Text color="primary.400">
              {Array.isArray(rubypart.type) ? rubypart.type.join("・") : rubypart.type}
            </Text>
          </Box>
        </HStack>
        {index < rubyWords.length - 1 &&  <Divider />}
      </>
    )
  });

  function goToCardsDeck() {
    window.location.href = `/ministory-cards?level=${selectedLevel}&topic=${selectedTopic}&startPage=${selectedStartPage}&endPage=${selectedEndPage}&availablePages=${availablePages.join(",")}`;
  };

  function goToAudioFiles() {
    window.location.href = `/ministory-audioplayer?level=${selectedLevel}`;
  };

  return (
    <Box >
      <Heading size="lg" mt={10} mb={5} textAlign="center" color={"pink.400"}>
        ミニストーリー
      </Heading>
      <HStack px={5} justifyContent={"space-between"} alignItems={"center"}>
        <HStack space={2}>
          <Switch
            onValueChange={(val) => setIsLargeLetter(val)}
            colorScheme="red"
            isChecked={isLargeLetter}
          />
          <Text color="red.500">Large letters</Text>
        </HStack>
        <Stack space={{ base: 2, md: 8 }} direction={{ base: "column", md: "row" }} alignItems="flex-end">
          <HStack space={2}>
            <Text color="red.500">Show Kanji</Text>
            <Switch
              onValueChange={(val) => setIsKanjiHidden(!val)}
              colorScheme="red"
              isChecked={!isKanjiHidden}
            />
          </HStack>
          <HStack space={2}>
            <Text color="red.500">Show furigana</Text>
            <Switch
              onValueChange={(val) => setIsFuriganaHidden(!val)}
              colorScheme="red"
              isChecked={!isFuriganaHidden}
            />
          </HStack>
        </Stack>
      </HStack>
      <Box m={4} borderWidth={1} borderColor="pink.400" borderRadius="md" p={2}>
        {storyParts}
      </Box>
      <Box m={4} borderWidth={1} borderColor="pink.400" borderRadius="md" p={2}>
        {words}
      </Box>

      <HStack px={4} justifyContent={"space-between"} alignItems={"center"}>
        <AudioPlayer level={selectedLevel} fileName={story.audio} />
        <Button size="sm" variant="outline" colorScheme="secondary" onPress={onNextStory}>Next story</Button>
      </HStack>

      <Box m={4} borderWidth={1} borderColor="cyan.400" borderRadius="md" p={2}>
        <Text color="white" textAlign={"justify"}>{translation}</Text>
      </Box>

      <Box m={4}>
        <Text color="white">Page: {story.page}</Text>
        <Text color="white">Topic: {story.topic}</Text>
      </Box>

      <Stack
        mx={4}
        my={5}
        space={4}
        direction={{ base: "column", md: "row" }}
      >
        <Box>
          <Text color="pink.400">Story:</Text>
          <Select color={"white"} selectedValue={selectedStory} onValueChange={(itemValue) => onStoryChange(itemValue)}>
            <Select.Item label="-- Select a story --" value="" />
            {availableStories.map((key) => (
              <Select.Item key={key} label={key} value={key} />
            ))}
          </Select>
        </Box>
        <Box>
          <Text color="pink.400">Level:</Text>
          <Select color={"white"} size="sm" selectedValue={selectedLevel} onValueChange={(itemValue) => onLevelChange(itemValue as 'N2' | 'N3')}>
            <Select.Item label="-- Select a level --" value="" />
            <Select.Item label="N2" value="N2" />
            <Select.Item label="N3" value="N3" />
          </Select>
        </Box>
        <Box>
          <Text color="pink.400">Topic:</Text>
          <Select color={"white"} size="sm" selectedValue={selectedTopic} onValueChange={(itemValue) => onTopicChange(itemValue as keyof typeof MiniStoryTopics)}>
            <Select.Item label="-- Select a topic --" value="" />
            {Object.entries(MiniStoryTopics).map(([key, value]) => (
              <Select.Item key={key} label={value} value={value} />
            ))}
          </Select>
        </Box>
      </Stack>
      <HStack px={4} space={4}>
        <Box>
          <Text color="pink.400">Start Page</Text>
          <Select color={"white"} selectedValue={String(selectedStartPage)} onValueChange={(itemValue) => onStartPageChange(Number(itemValue))}>
            <Select.Item label="-- Select a start page --" value="" />
            {availablePages.map((key) => (
              <Select.Item key={key} label={String(key)} value={String(key)} />
            ))}
          </Select>
        </Box>
        <Box>
          <Text color="pink.400">End Page</Text>
          <Select color={"white"} selectedValue={String(selectedEndPage)} onValueChange={(itemValue) => onEndPageChange(Number(itemValue))}>
            <Select.Item label="-- Select an end page --" value="" />
            {availablePages.map((key) => (
              <Select.Item key={key} label={String(key)} value={String(key)} />
            ))}
          </Select>
        </Box>
      </HStack>

      <Stack
        mx={4}
        my={10}
        space={4}
        direction={{ base: "column", md: "row" }}
      >
        <Button variant="outline" colorScheme="primary" onPress={goToCardsDeck}>
          Cards deck
        </Button>

        <Button variant="outline" colorScheme="secondary" onPress={goToAudioFiles}>
          Audio files
        </Button>
      </Stack>
    </Box>
  )
};

export default MiniStory;
