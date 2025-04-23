import { Box, Divider, Heading, HStack, Text } from "native-base";
import { Text as ColoredText, NewWords, Phrase } from "../components";
import React from "react";

const Lesson39: React.FC = () => {

  return (
    <Box backgroundColor="gray.50" minHeight={"100vh"}>
      <Heading size="md" mb={5} color={"blue.500"}>
        て Form of verbs and adjectives
      </Heading>
      <Text>
        This form is used, among other uses, to indicate <Text bold>a cause or reason</Text> for the result 
        indicated in the second part of the sentence.
      </Text>
      <Text>
        The second part of the sentence can only be a non-volitional expression, or expression of state.
      </Text>

      <Text mt={5} color="red.500">
        <Text bold>Volitinal actions</Text> describe actions that are intentional or under the subject’s control — basically 
        things a person (or sometimes animal) chooses or decides to do. e.g. 食べる, 飲む, 行く, 来る, 話す.
      </Text>
      <Text mt={1} color="red.500">
        They often appear with: ～たい, ～よう(ましょう), ～つもり, ～ようと思う.
      </Text>

      <Text mt={5} color="red.500">
        <Text bold>Non-Volitinal actions</Text> describe actions or states that happen without the subject’s 
        will, automatically, or naturally — like feelings, sensations, or involuntary movements. 
        e.g. 分かる, 見える, 聞こえる, 降る (ふる)(To fall - rain)
      </Text>
      <Text mt={1} color="red.500">
        They cannot be used with: <br/>
        ～たい (you can’t "want to understand" with 分かる using ～たい) <br/>
        ～よう (volitional form like "let’s...")
      </Text>

      <Text bold color={"primary.300"} mt={5}>
        Verbs and adjectives expressing emotions
      </Text>
      <Box my={2} borderColor={"amber.300"} borderWidth={1} borderRadius={5} p={2}>
        {[
          {word: "びっくりする", meaning: "To be surprised" },
          {word: "うれしい", meaning: "To be happy" },
          {word: "かなしい", meaning: "To be sad" },
          {word: "さびしい", meaning: "To be lonely" },
          {word: "ざんねん", meaning: "To be disappointed" },
          {word: "あんしんする", meaning: "To be relieved" },
          {word: "こまる", meaning: "To be troubled" },
        ].map((item, index) => (
          <HStack>
            <HStack width={{base: "100%", md: "50%"}} justifyContent={"space-between"} key={index}>
              <Box flex={1}>
                <Text color={"amber.300"}>{item.word}</Text>
              </Box>
              <Box flex={1}>
                <Text color={"amber.300"}>{item.meaning}</Text>
              </Box>
            </HStack>
          </HStack>
        ))}
      </Box>
      <Phrase litMeaning="I was surprised to hear the news">
        <Text>
          ニュースを<ColoredText.Primary>聞いて</ColoredText.Primary>、<ColoredText.Pink>びっくりしました。</ColoredText.Pink>
        </Text>
      </Phrase>
      <Phrase litMeaning="I was surprised to hear the news">
        <Text>
          家族に<ColoredText.Primary>会えなくて</ColoredText.Primary>、<ColoredText.Pink>さびしいです。</ColoredText.Pink>
        </Text>
      </Phrase>

      <Text bold color={"primary.300"} mt={5}>
        Verbs and expressions expressing potential or state
      </Text>
      <Phrase litMeaning="Saturday is not good for me, I can't go">
        <Text>
          土曜日は都合が<ColoredText.Primary>悪くて</ColoredText.Primary>、<ColoredText.Pink>行けません。</ColoredText.Pink>
        </Text>
      </Phrase>
      <Phrase litMeaning="What was being talked about was complicated, I couldn't understand it well">
        <Text>
          話が<ColoredText.Primary>複雑で</ColoredText.Primary>、よく<ColoredText.Pink>わかりませんでした。</ColoredText.Pink>
        </Text>
      </Phrase>
      <Phrase litMeaning="There was an accident, the bus was delayed">
        <Text>
          事故が<ColoredText.Primary>あって</ColoredText.Primary>、バスが<ColoredText.Pink>遅れてしまいました。</ColoredText.Pink>
        </Text>
      </Phrase>
      <NewWords words={[
        { kanji: "都合", kana: "つごう", meaning: "Convenience" },
        { kanji: "都合が悪い", kana: "つごうがわるい", meaning: "Incovenient" },
        { kanji: "複雑", kana: "ふくざつ", meaning: "Complicated" },
        { kanji: "事故", kana: "じこ", meaning: "Accident" },
      ]} />

      <Text color="red.500" fontSize="xs" mb={2}>
        *When the second part of the sentence consists of an expression with an intention, order, invitation, 
        or request, から is used instead of て form.
      </Text>
      <Text>
        <ColoredText.Primary>危なくて</ColoredText.Primary>,機械に<ColoredText.Red>触らないで</ColoredText.Red>ください。
      </Text>
      <Text>
        <ColoredText.Primary>危ない</ColoredText.Primary>です<ColoredText.Pink>から</ColoredText.Pink>,
        機械に<ColoredText.Red>触らないで</ColoredText.Red>ください。
      </Text>
      <Text color="amber.500" fontSize="xs">Please don't touch the machine, it's dangerous</Text>

      <NewWords words={[
        { kanji: "危ない", kana: "あぶない", meaning: "Dangerous" },
        { kanji: "機械", kana: "きかい", meaning: "Machine" },
        { kanji: "触る", kana: "さわる", meaning: "To touch" },
      ]} />

      <Text color="yellow.500" bold underline>Noun + で</Text>
      <Text>This is more often used with natual phenomena and events such as accidents, earthwuakes, fires, etc.</Text>
      <Phrase litMeaning="The building fell because of the earthquake">
        <Text>
          <ColoredText.Primary>地震</ColoredText.Primary><ColoredText.Pink>で</ColoredText.Pink> 
          ビルが<ColoredText.Red>倒れました。</ColoredText.Red>。
        </Text>
      </Phrase>
      <Phrase litMeaning="I took a day off because I was sick">
        <Text>
          <ColoredText.Primary>病気</ColoredText.Primary><ColoredText.Pink>で</ColoredText.Pink> 
          会社を<ColoredText.Red>休みました。</ColoredText.Red>。
        </Text>
      </Phrase>
      <NewWords words={[
        { kanji: "地震", kana: "じしん", meaning: "Earthquake" },
        { kanji: "倒れる", kana: "たおれる", meaning: "To fall down (Intransitive)" },
        { kanji: "病気", kana: "びょうき", meaning: "Disease/Sickness" },
      ]} />

      {/*
        *途中で
      */}
      <Divider mt={5} />

      <Heading size="md" mt={5} mb={2} color={"blue.500"}>
        途中で
      </Heading>
      <Text>
        <Text bold>とちゅうで</Text> is used to indicate that something happened in the middle of an action or e
        vent. It means "During" or "On the way to".
      </Text>
      <Text>It's used with the plain form of verbs and noun+の</Text>

      <Phrase litMeaning="In fact, there was an accident on the way, and the bus was delayed">
        <Text>
          実は<ColoredText.Primary>来る</ColoredText.Primary><ColoredText.Pink>途中で</ColoredText.Pink> 
          事故があって、バスが遅れてしまったんです。
        </Text>
      </Phrase>
      <Phrase litMeaning="I felt sick during the marathon">
        <Text>
          <ColoredText.Primary>マラソン</ColoredText.Primary><ColoredText.Red>の</ColoredText.Red> 
          <ColoredText.Pink>途中で</ColoredText.Pink>気分が悪くなりました。
        </Text>
      </Phrase>

      <NewWords words={[
        { kanji: "実", kana: "じつ", meaning: "Actually" },
      ]} />


      {/*
        *ので
      */}
      <Divider mt={5} />
      <Heading size="md" mt={5} mb={2} color={"blue.500"}>
        ので
      </Heading>
      <Text>
        It's the same as から, but more polite. It is used to indicate a reason or cause.
        The only difference is that we add な instead of だ after nouns and な adjectives.
      </Text>
      <Text>Like から, we can use the short form before ので.</Text>
      <Text>
        <Text bold>Note:</Text> ので is used in formal situations, while から is used in informal situations.
      </Text>
      <Phrase litMeaning="I can't understand Japanese, could you please speak in English?">
        <Text>
          日本語が<ColoredText.Primary>わからない</ColoredText.Primary><ColoredText.Pink>ので</ColoredText.Pink> 
          、英語で話していただけませんか。
        </Text>
      </Phrase>
      <Phrase litMeaning="I have something to do, so I will leave first">
        <Text>
          用事が<ColoredText.Primary>ある</ColoredText.Primary><ColoredText.Pink>ので</ColoredText.Pink> 
          お先にしつれします。
        </Text>
      </Phrase>
      <Phrase litMeaning="I have something to do, so I will leave first">
        <Text>
          漢字が<ColoredText.Primary>好き</ColoredText.Primary><ColoredText.Red>な</ColoredText.Red>
          <ColoredText.Pink>ので</ColoredText.Pink>、毎日勉強しています。
        </Text>
      </Phrase>
      
    </Box>
  )
};

export default Lesson39;
