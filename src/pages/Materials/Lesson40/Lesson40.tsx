import { Box, Divider, Heading, HStack, Text } from "native-base";
import { Text as ColoredText, NewWords, Phrase } from "../components";
import React from "react";

const Lesson40: React.FC = () => {

  return (
    <Box backgroundColor="gray.50" minHeight={"100vh"}>
      <Heading size="md" mb={5} color={"blue.500"}>
        S1 + か, S2
      </Heading>
      <Text>
        When the part 1 of the sentence contains a quention that <Text bold>includes</Text> an interrogative 
        as component of part 2 of the sentence we add particle <ColoredText.Pink>か </ColoredText.Pink> to it.
      </Text>
      <Text>
        We use the plain form of verbs, adjectives and nouns before か in this pattern.
      </Text>
      <Text fontSize="sm" textAlign="center" my={5}>
        Sentence part 1 <ColoredText.Primary>Plain form </ColoredText.Primary><ColoredText.Pink>か </ColoredText.Pink>
        Sentence part 2
      </Text>

      <Phrase
        litMeaning="Please check what time the flight JL107 arrives"
        altMeaning="What time does flight JL107 arrive? Please check"
      >
        <Text>
          JL107便は何時に<ColoredText.Primary>到着する</ColoredText.Primary>
          <ColoredText.Pink>か</ColoredText.Pink>、調べてください。
        </Text>
      </Phrase>

      <Phrase
        litMeaning="We are talking about what would be a good wedding gift"
        altMeaning="What would be a good wedding gift? We are talking"
      >
        <Text>
          結婚のお祝いは何が<ColoredText.Primary>いい</ColoredText.Primary>
          <ColoredText.Pink>か</ColoredText.Pink>、話しています。
        </Text>
      </Phrase>

      <Phrase
        litMeaning="Do you remeber when it was that we first met?"
        altMeaning="When was it that we first met? Do you remember?"
      >
        <Text>
          私たちが初めて<ColoredText.Red>会ったのは</ColoredText.Red><ColoredText.Primary>いつ</ColoredText.Primary>
          <ColoredText.Pink>か</ColoredText.Pink>、覚えていますか。
        </Text>
      </Phrase>


      <NewWords words={[
        { kanji: "便", kana: "びん", meaning: "Flight" },
        { kanji: "到着する", kana: "とうちゃくする", meaning: "To arrive" },
        { kanji: "調べる", kana: "しらべる", meaning: "To search" },
        { kanji: "結婚", kana: "けっこん", meaning: "wedding" },
        { kanji: "お祝い", kana: "おいわい", meaning: "Celebration" },
        { kanji: "覚える", kana: "おぼえる", meaning: "To remember" },
      ]} />

      <Divider my={5} />
      <Heading size="md" mb={5} color={"blue.500"}>
        S1 + かどうか, S2
      </Heading>

      <Text>
        When the sentence contains a question that <Text bold>Does not include</Text> an interrogative 
        as component of part 2 we need to add <ColoredText.Pink>かどうか</ColoredText.Pink> to it instead of just か.
      </Text>
      <Text>It basically works as a "Weather or not"</Text>
      <Text>The same rule applies here, we use the plain form of verbs, adjectives and nous before かどうか</Text>
      <Text fontSize="sm" textAlign="center" my={5}>
        Sentence part 1 <ColoredText.Primary>Plain form 
        </ColoredText.Primary><ColoredText.Pink> かどうか </ColoredText.Pink> Sentence part 2
      </Text>

      <Phrase litMeaning="Please reply by the 20th whether or not you'll attend the year-end party">
        <Text>
          忘年会に<ColoredText.Primary>出席する</ColoredText.Primary>
          <ColoredText.Pink>かどうか</ColoredText.Pink>、２０日までに返事してください。
        </Text>
      </Phrase>

      <Phrase litMeaning="I dont know whether that was true or not">
        <Text>
          ぞの話は<ColoredText.Primary>本当</ColoredText.Primary>
          <ColoredText.Pink>かどうか</ColoredText.Pink>、わかりません。
        </Text>
      </Phrase>

      <Phrase 
        litMeaning="Please check for any mistakes"
        altMeaning="Whether or not there are any mistakes, please check"
      >
        <Text>
          間違いが<ColoredText.Primary>ない</ColoredText.Primary>
          <ColoredText.Pink>かどうか</ColoredText.Pink>、調べてください。
        </Text>
      </Phrase>

      <NewWords words={[
        { kanji: "忘年会", kana: "ぼうねんかい", meaning: "Year-end party" },
        { kanji: "出席", kana: "しゅっせき", meaning: "Participate" },
        { kanji: "返事", kana: "へんじ", meaning: "Reply" },
        { kanji: "間違い", kana: "まちがい", meaning: "Error / Mistake" },
      ]} />
      

      <Divider my={5} />
      <Heading size="md" mb={5} color={"blue.500"}>
        〜てみる
      </Heading>
      <Text>
        We use the て form of verbs + みる to express the idea of trying something out (For the first time).
      </Text>
      <Text mb={5}>
        We can conjugate the たい form of みる to say "Want to try" something out.
      </Text>
      <Phrase litMeaning="I'll try playing this game." >
        <Text>
        このゲームを<ColoredText.Primary>やって</ColoredText.Primary>
        <ColoredText.Pink>みます</ColoredText.Pink>。
        </Text>
      </Phrase>
      <Phrase litMeaning="I want to try the new sweet from mcdonald's" >
        <Text>
          マックの新しいお菓子を<ColoredText.Primary>食べて</ColoredText.Primary>
          <ColoredText.Pink>みたい</ColoredText.Pink>です。
        </Text>
      </Phrase>


      <Divider my={5} />
      <Heading size="md" mb={5} color={"blue.500"}>
        い Adjectives + さ
      </Heading>
      <Text mb={5}>
        By replacing the last い of an い adjective with <ColoredText.Pink>さ</ColoredText.Pink> 
        we can create a noun that expresses the quality of the adjective.
      </Text>

      <Phrase litMeaning="Do you know how to measure the height of a mountain?" >
        <Text>
          山の<ColoredText.Primary>高</ColoredText.Primary><ColoredText.Pink>さ</ColoredText.Pink>
          はどうやって測るか、知っていますか。
        </Text>
      </Phrase>

      <Phrase litMeaning="The new bridge is 3911 meters long" >
        <Text>
          新しい橋の<ColoredText.Primary>長</ColoredText.Primary><ColoredText.Pink>さ</ColoredText.Pink>
          は３９１１メートルです。
        </Text>
      </Phrase>

      <Box my={2} borderColor={"amber.300"} borderWidth={1} borderRadius={5} p={2}>
        <HStack width={{base: "100%", md: "50%"}} justifyContent={"space-between"}>
          <Box flex={1}>
            <Text>
              <ColoredText.Primary>高い</ColoredText.Primary><Text> (High)</Text>
            </Text>
          </Box>
          <Box flex={1}>
            <Text>
              <ColoredText.Pink>高さ</ColoredText.Pink><Text> (Heigth)</Text>
            </Text>
          </Box>
        </HStack>
        <HStack width={{base: "100%", md: "50%"}} justifyContent={"space-between"}>
          <Box flex={1}>
            <Text>
              <ColoredText.Primary>長い</ColoredText.Primary><Text> (Long)</Text>
            </Text>
          </Box>
          <Box flex={1}>
            <Text>
              <ColoredText.Pink>長さ</ColoredText.Pink><Text> (Length)</Text>
            </Text>
          </Box>
        </HStack>
      </Box>

      <NewWords words={[
        { kanji: "測る", kana: "はかる", meaning: "To measure" },
        { kanji: "橋", kana: "はし", meaning: "Bridge" },
      ]} />

      <Divider my={5} />
      <Heading size="md" mb={5} color={"blue.500"}>
        〜でしょうか
      </Heading>
      <Text mb={5}>
        We use でしょう instead of です in interrogative sentences to ask a question without demanding a 
        definitive answer. It's considered more polite as it gives the opportunity to the listener to give 
        a more subjective answer in case they are not sure about the it.
      </Text>

      <Phrase litMeaning="How is Hans doing at school?" >
        <Text>
          ハンスさんは学校で<ColoredText.Primary>どう</ColoredText.Primary>
          <ColoredText.Pink>でしょうか。</ColoredText.Pink>
        </Text>
      </Phrase>

    </Box>
  )
};

export default Lesson40;
