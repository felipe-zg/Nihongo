import React from "react";
import { Box, Divider, Heading, Text} from "native-base";
import { Phrase } from "../components";
import { ColoredText, NewWords } from "../../../components";

const Lesson36: React.FC = () => {

  return (
    <Box backgroundColor="gray.50" minHeight={"100vh"}>
      <Heading size="lg" mb={5} textAlign="center" color={"pink.400"}>
        ために vs ように vs のに
      </Heading>

      <Text fontSize="sm" mb={5} textAlign="justify">
        They're all basically used to express purpose (To; In order to; For; For the sake of), 
        but they are used in different contexts.
      </Text>

      <Heading size="md" mb={5} color={"blue.500"}>
        ために
      </Heading>

      <Text fontSize="sm" textAlign="center">
        <ColoredText.Primary>Short Verb </ColoredText.Primary><ColoredText.Pink>ために</ColoredText.Pink>
      </Text>
      <Text fontSize="sm" textAlign="center" mb={5}>
        <ColoredText.Primary>Noun </ColoredText.Primary><ColoredText.Red>の </ColoredText.Red>
        <ColoredText.Pink>ために</ColoredText.Pink>
      </Text>

      {/* <Text fontSize="sm" textAlign="justify" mb={5}>
        We use <ColoredText.Pink>ために</ColoredText.Pink> when we want to add 
        <ColoredText.Green> another verb</ColoredText.Green> after it. 
      </Text> */}

      <Phrase litMeaning={`"Are you the type of person who eats to live?\nor lives to eat?"`}>
        みんなは<ColoredText.Primary>生きる</ColoredText.Primary><ColoredText.Pink>ために</ColoredText.Pink>
        <ColoredText.Green>食べる</ColoredText.Green><ColoredText.Yellow>派</ColoredText.Yellow>ですか？<br/>
        それとも、<ColoredText.Primary>食べる</ColoredText.Primary><ColoredText.Pink>ために</ColoredText.Pink>
        <ColoredText.Green>生きる</ColoredText.Green><ColoredText.Yellow>派</ColoredText.Yellow>ですか？<br/>
      </Phrase>
      <Text fontSize="xs" ml={5} mb={5}>。。。リンゴアレルギーですけど、リンゴが大好きだから、食べちゃいます。だから、リンゴを食べながら死ぬ派。</Text>

      <Phrase litMeaning="I made obento for my son">
        <ColoredText.Primary>息子</ColoredText.Primary><ColoredText.Red>の</ColoredText.Red>
        <ColoredText.Pink>ために</ColoredText.Pink>お弁当を作りました。
      </Phrase>
      <Phrase litMeaning="I'll do anything for money">
        <ColoredText.Primary>お金</ColoredText.Primary><ColoredText.Red>の</ColoredText.Red>
        <ColoredText.Pink>ために</ColoredText.Pink>何でもします。
      </Phrase>
      <Phrase litMeaning={`What do you do for your health?\nI walk every morning for the sake of my health`}>
        <ColoredText.Primary>健康</ColoredText.Primary><ColoredText.Red>の</ColoredText.Red>
        <ColoredText.Pink>ために</ColoredText.Pink>何をしていますか？<br/>
        <ColoredText.Primary>健康</ColoredText.Primary><ColoredText.Red>の</ColoredText.Red>
        <ColoredText.Pink>ために</ColoredText.Pink>毎朝歩いています。
      </Phrase>

      <Text fontSize="xs" mt={5} mb={2} textAlign="justify" color="red.500">
        When finishing a sentence with <Text bold>です</Text> we can drop the 
        <ColoredText.Pink> に</ColoredText.Pink> and use just <ColoredText.Pink>ため</ColoredText.Pink> instead.
      </Text>
      <Text>
        <ColoredText.Primary>息子</ColoredText.Primary><ColoredText.Red>の</ColoredText.Red>
        <ColoredText.Pink>ため</ColoredText.Pink>です。
      </Text>

      <NewWords words={[
        { kanji: "派", kana: "は", meaning: "Type of person" },
        { kanji: "息子", kana: "むすこ", meaning: "My son" },
        { kanji: "健康", kana: "けんこう", meaning: "Health" },
      ]} />

      <Text fontSize="sm" mt={5} textAlign="justify">
        We can also add <ColoredText.Green>だけ</ColoredText.Green> before <ColoredText.Pink>に </ColoredText.Pink>
        to say <Text bold>"Only/Just for..."</Text>
      </Text>
      <Phrase litMeaning="You prepared all this food just for one person?">
        <ColoredText.Primary>一人</ColoredText.Primary><ColoredText.Red>の</ColoredText.Red>
        <ColoredText.Pink>ため</ColoredText.Pink><ColoredText.Green>だけ</ColoredText.Green>
        <ColoredText.Pink>に</ColoredText.Pink>こんなに食べ物を用意したの？
      </Phrase>

      <Text fontSize="sm" mt={2} textAlign="justify">
        We can also use the IF pattern <ColoredText.Green>なら</ColoredText.Green> replacing 
        <ColoredText.Pink> に </ColoredText.Pink>to say <Text bold>"If it's for..."</Text>
      </Text>
      <Phrase litMeaning="I'll do anything if it's for my senpai">
        <ColoredText.Primary>先輩</ColoredText.Primary><ColoredText.Red>の</ColoredText.Red>
        <ColoredText.Pink>ため</ColoredText.Pink><ColoredText.Green>なら</ColoredText.Green>
        何でもする。
      </Phrase>

      <Text fontSize="sm" mt={2} textAlign="justify">
        We can use 2 verbs in this pattern to say <Text bold>"do X in order to do Y"</Text><br/>
        (Subjectは)<ColoredText.Primary>V1</ColoredText.Primary>
        <ColoredText.Pink>ために</ColoredText.Pink> <ColoredText.Green>V2</ColoredText.Green> 
      </Text>
      <Phrase litMeaning="I bought a ring (in order) to propose to my girlfriend">
        彼女に<ColoredText.Primary>プロポーズする</ColoredText.Primary><ColoredText.Pink>ために</ColoredText.Pink>
        指輪を<ColoredText.Green>買いました。</ColoredText.Green>
      </Phrase>
      <Phrase litMeaning={`Anh! You can play the guittar?\nNo, I bought it to be popular`}>
        あれ、ギター弾けるの？<br/>
        いや、<ColoredText.Primary>モテる</ColoredText.Primary><ColoredText.Pink>ために</ColoredText.Pink>
        <ColoredText.Green>買ったんだ</ColoredText.Green>。
      </Phrase>
      <Phrase litMeaning={`Anh! You can play the guittar?\nNo, I bought it to be popular`}>
        車を<ColoredText.Primary>買う</ColoredText.Primary><ColoredText.Pink>ために</ColoredText.Pink>
        <ColoredText.Green>貯金している。</ColoredText.Green>。
      </Phrase>

      <NewWords words={[
        { kanji: "指輪", kana: "ゆびわ", meaning: "Ring" },
        { kanji: "モテる", kana: "モテる", meaning: "be popular" },
        { kanji: "貯金", kana: "ちょきん", meaning: "To save money" },
      ]} />

      <Text fontSize="sm" mt={5} textAlign="justify">
        To say <Text bold>"In order to do something for someone"</Text> we could use 2 ために in the same sentence
        but it sounds unnatural. Instead, we can use the normal particle either after the Noun or Verb1.<br/>
      </Text>
      <Phrase litMeaning="I'll buy a car for my son">
        <ColoredText.Primary>息子</ColoredText.Primary><ColoredText.Red>の</ColoredText.Red>
        <ColoredText.Pink>ために</ColoredText.Pink>車を<ColoredText.Green>買う</ColoredText.Green>
      </Phrase>
      <Phrase litMeaning="I'll buy a car for my son">
        息子に車を<ColoredText.Primary>買う</ColoredText.Primary><ColoredText.Pink>ために</ColoredText.Pink>
        <ColoredText.Green>貯金している</ColoredText.Green>。
      </Phrase>

      <Text fontSize="sm" mt={5} textAlign="justify">
        When we go somewhere in order to do something we use the ます STEM + に行く pattern instead of ために.
      </Text>
      <Text fontSize="sm">
        ❌ 彼女に<ColoredText.Primary>会う</ColoredText.Primary><ColoredText.Pink>ために</ColoredText.Pink>
        日本に<ColoredText.Green>行きます</ColoredText.Green>。
      </Text>
      <Text fontSize="sm">
        ✅ 彼女に<ColoredText.Primary>会い</ColoredText.Primary><ColoredText.Red>に</ColoredText.Red>
        日本に<ColoredText.Green>行きます</ColoredText.Green>。
      </Text>

      <Text fontSize="md" mt={5} textAlign="justify" color="red.500">
        There are 2 expressions that are really important:
      </Text>
      <Text mt={5}>
        &bull;<ColoredText.Pink>ために</ColoredText.Pink><ColoredText.Green>なる</ColoredText.Green>:<br/>
        It has the same meaning as 役に立つ (やくにたつ) (to be useful/benefitial/informative). Usually used about 
        something that gives you knowledge or information.<br/>
        These expressions are both very often used, but ためになる is more often used when somebody gives you 
        tips, or tells you something informative, while 役に立つ is more often used for tools like hashi or knife,
        which don't tecnically gives you any knowledge.
      </Text>
      <Text>When someone shows their knowledge we use ためになる</Text>
      <Phrase litMeaning="Missa-sensei's class is very informative/useful">
        ミサ先生の授業は<ColoredText.Pink>ために</ColoredText.Pink><ColoredText.Green>なります</ColoredText.Green>。
      </Phrase>

      <Text mt={5}>
        &bull;<ColoredText.Green>念の</ColoredText.Green><ColoredText.Pink>ため</ColoredText.Pink>です・
        <ColoredText.Green>念の</ColoredText.Green><ColoredText.Pink>ために</ColoredText.Pink>:<br/>
        ねんのため(に) means "just in case / To do ~ just in case". This expression is really imoprtant and is 
        very often used, just like "just in case" in english.
      </Text>
      <Phrase litMeaning="I don't know if I'll use it, but just in case, I'll take it">
        使うか分からないけど、<ColoredText.Pink>念のために</ColoredText.Pink>
        <ColoredText.Green>持って行く</ColoredText.Green>。
      </Phrase>

      <Text color="red.500" fontSize="xs" mt={5}>
        ために can only be used with affirmative sentences, to use negative sentences we need to use ように.
      </Text>

      <Divider my={5} />
    </Box>
  )
};

export default Lesson36;
