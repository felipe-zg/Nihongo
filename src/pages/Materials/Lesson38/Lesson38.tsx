import { Box, Divider, Heading, HStack, Text, VStack } from "native-base";
import { Text as ColoredText, Phrase } from "../components";
import React from "react";

const Lesson38: React.FC = () => {

  return (
    <Box backgroundColor="gray.50" padding={5} minHeight={"100vh"}>
      <Heading size="lg" mb={5} textAlign="center">
        Lesson 38
      </Heading>
      <Text mb={5}>
        We use the plain form of verbs and adjectives attached to the particle の to nominalize them 
        (transform them into nouns), and therefore form various elements of a sentence.
        <Text bold>の</Text> is used to nominalize verbs and adjectives, while <Text bold>こと</Text> is used to nominalize nouns.
      </Text>

      <Text fontSize="sm" textAlign="center" marginBottom={5}>
        <ColoredText.Primary>Plain form </ColoredText.Primary> + <ColoredText.Pink>の </ColoredText.Pink> 
        = nominalized item
      </Text>

      {/* 
        * のは 
      */}
      <Text>
        We can use <ColoredText.Red>のは</ColoredText.Red> to treat them as the <Text bold>topic of the sentence</Text>
      </Text>
      <Text fontSize="xs" color="red.500" marginBottom={1}>
        *In this pattern, adjectives like 難しい, 優しい, 面白い, 楽しい and 大変 are often used.
      </Text>

      <Text>テニスは面白いです。</Text>
      <Text>テニスを<ColoredText.Primary>する</ColoredText.Primary><ColoredText.Pink>のは</ColoredText.Pink>面白いです。</Text>
      <Text>テニスを<ColoredText.Primary>見る</ColoredText.Primary><ColoredText.Pink>のは</ColoredText.Pink>面白いです。</Text>

      <Text>
        The first sentence just says that tennis is interesting in general, while in the second and third sentences 
        we nominalize the actions of "play" and "watch" to be more specific that those actions are interesting.
      </Text>

      {/* 
        * のが
      */}
      <Divider marginTop={5} marginBottom={5} />
      <Text>
        We can use <ColoredText.Red>のが</ColoredText.Red> to describe the nominalized item with an adjective.
        It is used to treat them as the <Text bold>subject of the sentence</Text>
      </Text>
      <Text fontSize="xs" color="red.500" marginBottom={1}>
        *Adjectives describing things like preferences, skills and abilities, such as 好き, 嫌い, 上手, 下手, 
        早い and 遅い are often used in this pattern.
      </Text>
      <Text>花が好きです。</Text>
      <Phrase litMeaning="I like to grow flowers">
        <Text>
          花を<ColoredText.Primary>そたてる</ColoredText.Primary><ColoredText.Pink>のが</ColoredText.Pink>
          <ColoredText.Red>好き</ColoredText.Red>です。
        </Text>
      </Phrase>
      <Phrase litMeaning="Tokyo people walk fast">
        <Text>
          東京の人は<ColoredText.Primary>歩く</ColoredText.Primary><ColoredText.Pink>のが</ColoredText.Pink>
          <ColoredText.Red>早い</ColoredText.Red>です。
        </Text>
      </Phrase>

      {/* 
        * のを
      */}
      <Divider marginTop={5} marginBottom={5} />
      <Text>
        When introducing an <Text bold>action that was supposed to have been taken</Text> regarding the object 
        and state that <Text bold>it has been forgotten</Text>, we use <ColoredText.Red>のを</ColoredText.Red> 
        to transfor the action into an object and use the verb <ColoredText.Red>忘れる</ColoredText.Red>.
      </Text>
      <Text>傘を忘れました。</Text>
      <Phrase litMeaning="I forgot to buy some milk">
        <Text>
          牛乳を<ColoredText.Primary>買う</ColoredText.Primary><ColoredText.Pink>のを</ColoredText.Pink>
          <ColoredText.Red>忘れました。</ColoredText.Red>
        </Text>
      </Phrase>
      <Phrase litMeaning="I forgot to close the car window">
        <Text>
          車の窓を<ColoredText.Primary>閉める</ColoredText.Primary><ColoredText.Pink>のを</ColoredText.Pink>
          <ColoredText.Red>忘れた。</ColoredText.Red>
        </Text>
      </Phrase>
      <Text my={5}>
        Whe also need to transform the action into am object when asking 
        <Text bold>whether or not someone knows something specific.</Text>
      </Text>
      <Phrase litMeaning="Do you know that Suzuki is getting married next month?">
        <Text>
          鈴木さんは来月<ColoredText.Primary>結婚する</ColoredText.Primary><ColoredText.Pink>のを</ColoredText.Pink>
          <ColoredText.Red>知っていますか。</ColoredText.Red>
        </Text>
      </Phrase>
      <Phrase litMeaning="I didn't." altMeaning="But now I know (ませんでした）">
        <Text fontSize="xs">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        。。。いいえ、知りませんでした。
        </Text>
      </Phrase>
      <Phrase litMeaning="Do you know Mira's address?">
        <Text>
          ミラさんの住所を<ColoredText.Red>知っていますか。</ColoredText.Red>
        </Text>
      </Phrase>
      <Phrase litMeaning="I don't." altMeaning="And I still don't know it (ません)">
        <Text fontSize="xs">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          。。。いいえ、知りません。
        </Text>
      </Phrase>

      {/* 
        * Other situations to use nominalized iems
      */}
      <Divider marginTop={5} marginBottom={5} />
      <Text>
        We also use the plain form + <ColoredText.Pink>のは</ColoredText.Pink> to:
      </Text>
      <HStack 
        my={2}
        mb={5}
        p={2}
        width={{base: "100%", md: "50%"}}
        alignItems="center"
        borderRadius="md" borderWidth={1} borderColor="primary.200"
      >
        <VStack flex={1} alignItems="center">
          <Box flex={1} alignItems="center">
            <Text>Verb</Text>
          </Box>
          <Box flex={1} alignItems="center">
            <Text>い Adjective</Text>
          </Box>
          <Box flex={1} alignItems="center">
            <Text>な Adjective</Text>
          </Box>
          <Box flex={1} alignItems="center">
            <Text>Noun 1 + な</Text>
          </Box>
        </VStack>
        <VStack flex={1} alignItems="center">
          <Text>+ <ColoredText.Pink> のは </ColoredText.Pink> +</Text>
        </VStack>
        <VStack flex={1} alignItems="center">
          <Box flex={1} alignItems="center">
            <Text>Noun 2</Text>
          </Box>
        </VStack>
      </HStack>
      <ColoredText.Green>Emphasize Noun 2</ColoredText.Green>
      <Text mt={2}>
        初めて<ColoredText.Primary>会った</ColoredText.Primary><ColoredText.Pink>のは</ColoredText.Pink>
        <ColoredText.Red>いつ</ColoredText.Red>ですか。
      </Text>
      <Text fontSize="xs" color="red.500" mb={5}>
        *It emphasizes that what is being asked regarding the moment they first met is 
        <ColoredText.Pink> specifically</ColoredText.Pink><ColoredText.Red> when.</ColoredText.Red>
      </Text>

      <ColoredText.Green>Correct what someone has said</ColoredText.Green>
      <Text>バンコクで生まれたんですか。</Text>
      <Text mt={2}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        。。。いいえ。<ColoredText.Primary>生まれた</ColoredText.Primary><ColoredText.Pink>のは</ColoredText.Pink>
        中国です。
      </Text>

      <Text mt={5}>
        When using a subject in a sentence with <ColoredText.Pink>のは</ColoredText.Pink> it need to be 
        accompanied by particle <ColoredText.Red>が</ColoredText.Red> instead of は.
      </Text>
      <Text>
        父<ColoredText.Red>が</ColoredText.Red><ColoredText.Primary>生まれた</ColoredText.Primary>
        <ColoredText.Pink>のは</ColoredText.Pink>北海道の小さな村です。
      </Text>
    </Box>
  )
};

export default Lesson38;
