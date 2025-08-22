import React from "react";
import { Box, Divider, Heading, HStack, Select, Switch, Text} from "native-base";
import { parseRuby } from "../../utils/music/rubyParser";
import { MINI_STORY_N3 } from "../../consts/MiniStory";
import { AudioPlayer } from "../../components";

type MiniStoryProps = {
  story: MiniStory;
  selectedStory: string;
  onStoryChange: (id: string) => void;
  selectedLevel: 'N2' | 'N3';
  onLevelChange: (level: 'N2' | 'N3') => void;
}

const MiniStory: React.FC<MiniStoryProps> = ({ 
  story, selectedStory, onStoryChange, selectedLevel, onLevelChange 
}) => {
  const [isHidden, setIsHidden] = React.useState(true);
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
    return (
      <HStack>
        <Box flex={1} alignItems={"center"} justifyContent={"flex-start"} mt={1}>
          {rubypart.character !== "" && <p style={{ fontSize: "1.3rem",  marginTop: "0.5rem", marginBottom: "0.5rem", lineHeight: "2rem"}}>{rubypart.character}:</p>}
        </Box>
        <Box flex={11} key={index}>
          <p style={{ fontSize: "1.3rem", marginTop: "0.5rem", marginBottom: "0.5rem", lineHeight: "2rem"}} dangerouslySetInnerHTML={{ __html: formattedDialogue }}  />
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
          <Box  flex={2} justifyContent={"center"}>
            <p style={{ color: isHidden ? "white" : "red" }}>{rubypart.english}</p>
          </Box>
        </HStack>
        <Divider />
      </>
    )
  });

  return (
    <Box backgroundColor="gray.50">
      <Heading size="lg" mt={10} mb={5} textAlign="center" color={"pink.400"}>
        ミニストーリー
      </Heading>
      <Box m={4} borderWidth={1} borderColor="red.400" borderRadius="md" p={2}>
        {storyParts}
      </Box>
      <Box m={4} borderWidth={1} borderColor="red.400" borderRadius="md" p={2}>
        {words}
      </Box>
      
      <HStack mx={4} my={5} justifyContent={"space-between"}>
        <Box width={"25%"}>
          <Select selectedValue={selectedStory} onValueChange={(itemValue) => onStoryChange(itemValue)}>
            <Select.Item label="-- Select a story --" value="" />
            {Object.keys(MINI_STORY_N3).map((key) => (
              <Select.Item key={key} label={key} value={key} />
            ))}
          </Select>
        </Box>
        <Box width={"25%"}>
          <Select size="sm" selectedValue={selectedLevel} onValueChange={(itemValue) => onLevelChange(itemValue as 'N2' | 'N3')}>
            <Select.Item label="-- Select a level --" value="" />
            <Select.Item label="N2" value="N2" />
            <Select.Item label="N3" value="N3" />
          </Select>
        </Box>
        <AudioPlayer level={selectedLevel} fileName={story.audio} />
        <Box paddingLeft={5}>
          <HStack space={2}>
            <Switch
              onValueChange={(val) => setIsHidden(!val)}
              colorScheme="red"
              isChecked={!isHidden}
            />
            <Text color="red.500">Show</Text>
          </HStack>
        </Box>
      </HStack>

      <Box m={4} borderWidth={1} borderColor="cyan.400" borderRadius="md" p={2}>
        <Text textAlign={"justify"}>{translation}</Text>
      </Box>

    </Box>
  )
};

export default MiniStory;
