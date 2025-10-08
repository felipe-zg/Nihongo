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
  availablePages
}) => {
  const [isHidden, setIsHidden] = React.useState(false);
  const [isLargeLetter, setIsLargeLetter] = React.useState(false);
  const { rubyStory, rubyWords, translation } = story;

  const storyParts = rubyStory.map((rubypart, index) => {
    let color = 'black';
    let textDecorationStatus = 'none';
    const parts = parseRuby(rubypart.dialogue);
    const formattedDialogue = parts.map(a => {
      if (a.kanji === '<') {
        color = isHidden ? 'white' : 'red';
        textDecorationStatus = 'none';
        return null;
      }
      if (a.kanji === '>') {
        color = 'black';
        textDecorationStatus = 'none';
        return null;
      }

      const mainContent = a.furigana ? `<ruby>${a.kanji}<rt>${a.furigana}</rt></ruby>` : a.kanji;
      return `<span style="text-decoration:${textDecorationStatus}; color:${color};">
            ${mainContent}
          </span>`;
    }
    ).join('');
    const fontSize = isLargeLetter ? '2rem' : '1.3rem';
    return (
      <HStack>
        {rubypart.character !== "" && (
          <Box flex={1} alignItems={"center"} justifyContent={"flex-start"} mt={1}>
            <p style={{ fontSize: fontSize,  marginTop: "0.5rem", marginBottom: "0.5rem", lineHeight: "2rem"}}>{rubypart.character}:</p>
          </Box>
        )}
        <Box flex={11} key={index}>
          <p style={{ fontSize: fontSize, marginTop: "0.5rem", marginBottom: "0.5rem", lineHeight: "2rem"}} dangerouslySetInnerHTML={{ __html: formattedDialogue }}  />
        </Box>
      </HStack>
    )
  });

  const words = rubyWords.map((rubypart, index) => {
    const parts = parseRuby(rubypart.kanji);
    const formattedWords = parts.map(a =>
      a.furigana
        ? `<ruby>${a.kanji}<rt style="color: ${isHidden ? "white" : "red"};">${a.furigana}</rt></ruby>`
        : a.kanji
    ).join('');
    return (
      <>
        <HStack>
          <Box flex={1}>
            <p dangerouslySetInnerHTML={{ __html: formattedWords }} />
          </Box>
          <Box  flex={4} justifyContent={"center"}>
            <p style={{ color: isHidden ? "white" : "red" }}>{rubypart.english}</p>
          </Box>
          <Box  flex={1} justifyContent={"center"}>
            <p style={{ color: "#3b3b3b"}}>{rubypart.type}</p>
          </Box>
        </HStack>
        <Divider />
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
    <Box backgroundColor="gray.50">
      <Heading size="lg" mt={10} mb={5} textAlign="center" color={"pink.400"}>
        ミニストーリー
      </Heading>
      <Box paddingLeft={5}>
        <HStack space={2}>
          <Switch
            onValueChange={(val) => setIsLargeLetter(val)}
            colorScheme="red"
            isChecked={isLargeLetter}
          />
          <Text color="red.500">Large letters</Text>
        </HStack>
      </Box>
      <Box m={4} borderWidth={1} borderColor="red.400" borderRadius="md" p={2}>
        {storyParts}
      </Box>
      <Box m={4} borderWidth={1} borderColor="red.400" borderRadius="md" p={2}>
        {words}
      </Box>
      
      <HStack mx={4} my={5} justifyContent={"space-between"} alignItems={"center"} padding={2} borderRadius={5}>
        <Box>
          <HStack space={2}>
            <Switch
              onValueChange={(val) => setIsHidden(!val)}
              colorScheme="red"
              isChecked={!isHidden}
            />
            <Text color="red.500">Show</Text>
          </HStack>
        </Box>
        <AudioPlayer level={selectedLevel} fileName={story.audio} />
      </HStack>

      <Box m={4} borderWidth={1} borderColor="cyan.400" borderRadius="md" p={2}>
        <Text textAlign={"justify"}>{translation}</Text>
      </Box>

      <Box m={4}>
        <Text>Page: {story.page}</Text>
        <Text>Topic: {story.topic}</Text>
      </Box>

      <Stack
        mx={4}
        my={5}
        space={4}
        direction={{ base: "column", md: "row" }}
      >
        <Box>
          <Text color="pink.400">Story:</Text>
          <Select selectedValue={selectedStory} onValueChange={(itemValue) => onStoryChange(itemValue)}>
            <Select.Item label="-- Select a story --" value="" />
            {availableStories.map((key) => (
              <Select.Item key={key} label={key} value={key} />
            ))}
          </Select>
        </Box>
        <Box>
          <Text color="pink.400">Level:</Text>
          <Select size="sm" selectedValue={selectedLevel} onValueChange={(itemValue) => onLevelChange(itemValue as 'N2' | 'N3')}>
            <Select.Item label="-- Select a level --" value="" />
            <Select.Item label="N2" value="N2" />
            <Select.Item label="N3" value="N3" />
          </Select>
        </Box>
        <Box>
          <Text color="pink.400">Topic:</Text>
          <Select size="sm" selectedValue={selectedTopic} onValueChange={(itemValue) => onTopicChange(itemValue as keyof typeof MiniStoryTopics)}>
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
          <Select selectedValue={String(selectedStartPage)} onValueChange={(itemValue) => onStartPageChange(Number(itemValue))}>
            <Select.Item label="-- Select a start page --" value="" />
            {availablePages.map((key) => (
              <Select.Item key={key} label={String(key)} value={String(key)} />
            ))}
          </Select>
        </Box>
        <Box>
          <Text color="pink.400">End Page</Text>
          <Select selectedValue={String(selectedEndPage)} onValueChange={(itemValue) => onEndPageChange(Number(itemValue))}>
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
