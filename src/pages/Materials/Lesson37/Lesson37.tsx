import { Box, Divider, Heading, HStack, Text, VStack } from "native-base";
import { Text as ColoredText, NewWords, Phrase } from "../components";
import React from "react";

const Lesson37: React.FC = () => {

  return (
    <Box backgroundColor="gray.50" minHeight={"100vh"}>
      <Heading size="md" mb={5} color={"blue.500"}>
        Passive voice
      </Heading>
      <Text fontSize={{base: "md", sm: "sm"}} mb={5}>
        <ColoredText.Primary>る Verbs </ColoredText.Primary>
        → Drop <ColoredText.Red>る</ColoredText.Red> and add <ColoredText.Green>られる</ColoredText.Green>
        <br />
        <ColoredText.Primary>う Verbs </ColoredText.Primary>
        → Go up 2 hiragana lines (う → あ ) and add <ColoredText.Green>れる</ColoredText.Green>
        <br />
        <ColoredText.Primary>する </ColoredText.Primary>
        → <ColoredText.Green>される</ColoredText.Green>
        <br />
        <ColoredText.Primary>来る </ColoredText.Primary>
        → <ColoredText.Green>来られる</ColoredText.Green> (こられる)
      </Text>

      <Text fontSize="sm" mb={5} textAlign="justify">
        Note that the rule for る verbs and 来る are the same as the potential form, but, unlike the potential form, the passive form is not used to express ability.
        we cannot dromp ら when speaking casually.
      </Text>

      <Box padding={5} marginBottom={5} backgroundColor="gray.100" borderRadius="md" width={{base: "100%", md: "50%"}} >
        <table>
          <tbody>
            <tr>
              <td>食べる</td>
              <td>食べられる</td>
            </tr>
            <tr>
              <td>見る</td>
              <td>見られる</td>
            </tr>
            <tr>
              <td>話す</td>
              <td>話される</td>
            </tr>
            <tr>
              <td>立つ</td>
              <td>立たれる</td>
            </tr>
            <tr>
              <td>買う</td>
              <td>買われる</td>
            </tr>
          </tbody>
        </table>
      </Box>

      <Text fontSize="sm" mb={5} textAlign="justify">
        The passive voive is used when the speaker feels like the victim because of somebody else's 
        action (Feels upset, embarassed, angry...). In this case we always use the passive voice to 
        show the listener that the speaker's perspective.
      </Text>

      <Text fontSize="sm" textAlign="center" marginBottom={5}>
        <ColoredText.Primary>Doer </ColoredText.Primary><ColoredText.Red>に </ColoredText.Red>
        <ColoredText.Pink>Passive voice verb</ColoredText.Pink>
      </Text>

      <Phrase litMeaning="I was laughed at by him." altMeaning="He laughed at me (and I'm upset about it)">
        <ColoredText.Primary>あいつ</ColoredText.Primary><ColoredText.Red>に</ColoredText.Red>
        <ColoredText.Pink>笑われた。</ColoredText.Pink>
      </Phrase>
      <Text fontSize="xs" color="red.500" marginBottom={1}>
        *By using 笑った instead of 笑われた, it just means that he laughed, 
        without adding the nuance that the speaker is upset about it.
      </Text>

      <NewWords words={[
        { kanji: "笑う", kana: "わらう", meaning: "To laugh" },
        { kanji: "笑われる", kana: "わらわれる", meaning: "To be laughed at" },
        { kanji: "あいつ", kana: "あいつ", meaning: "That guy that I don't like" },
      ]} />
      <Text fontSize="xs" color="red.500" marginBottom={5}>
        *When you say こいつ, ぞいつ, あいつ you imply that you don't like that person.
        It comes from この, ぞの, あの, which are the demonstrative pronouns.
      </Text>

      <Box padding={5} marginBottom={5}  borderRadius="md" borderWidth={1} borderColor="primary.200">
        <ul>
          <li>
            <Text fontSize="xs">
              When using the passive voice we replace the particle は with に. (Doer に)
            </Text>
          </li>
          <li>
            <Text fontSize="xs">
              We don't need to add the word "upset" or "mad" because the passive voice already implies that.
            </Text>
          </li>
          <li>
            <Text fontSize="xs">
              We don't need to use 私は because the passive voice is always the speaker's perspective.
            </Text>
          </li>

        </ul>
        <Divider marginTop={2} marginBottom={2} />
        <Phrase litMeaning="Akira took a picture of me">
          <ColoredText.Primary>アキラ</ColoredText.Primary><ColoredText.Red>は</ColoredText.Red>私の写真を
          <ColoredText.Pink>撮られた。</ColoredText.Pink>
        </Phrase>
        <Phrase litMeaning="Akira took a picture of me and I'm upset about it">
          <ColoredText.Primary>アキラ</ColoredText.Primary><ColoredText.Red>に</ColoredText.Red>写真を
          <ColoredText.Pink>撮られた。</ColoredText.Pink>
        </Phrase>
      </Box>

      <Text fontSize="sm" textAlign="justify">
        The passive voive is used not only when the speaker feels like the victim,, but as long as the speaker
        is involved in the story, we tell it using the passive voice because Japanese people like to hear the story
        from the speaker's perspective. (He told me. → I was told by him. / He asked me. → I was asked by him.).
      </Text>
      <Box padding={5} marginBottom={5} marginTop={5}  borderRadius="md" borderWidth={1} borderColor="primary.200">
        <Text fontSize="sm" textAlign="justify">
          If the speaker is not involved in the story, we use the active voice (Normal past tense). 
          (He told me. → He told me.).
        </Text>
        <Divider marginTop={2} marginBottom={2} />
        <Phrase litMeaning="A dumped B">
          <Text>A</Text><ColoredText.Red>は</ColoredText.Red>B<ColoredText.Red>を</ColoredText.Red>
          <ColoredText.Pink>振った。</ColoredText.Pink>
        </Phrase>
        <Phrase litMeaning="My girlfriend dumped me">
          <ColoredText.Primary>彼女</ColoredText.Primary><ColoredText.Red>に</ColoredText.Red>
          <ColoredText.Pink>振られた。</ColoredText.Pink>
        </Phrase>
      </Box>

      <Phrase litMeaning="I asked my friend to take a picture of me">
        <Text>友達に「写真を撮って」って</Text><ColoredText.Pink>頼んだ。</ColoredText.Pink>
      </Phrase>
      <Phrase litMeaning="My friend asked me to take a picture">
        <ColoredText.Primary>友達</ColoredText.Primary><ColoredText.Red>に</ColoredText.Red>
        <Text>「写真を撮って」って</Text><ColoredText.Pink>頼まれた。</ColoredText.Pink>
      </Phrase>
      <Divider marginTop={2} marginBottom={2} />
      <Phrase litMeaning="I asked my friend to take a picture of me">
        <Text>友達に写真を撮るように</Text><ColoredText.Pink>頼んだ。</ColoredText.Pink>
      </Phrase>
      <Phrase litMeaning="My friend asked me to take a picture">
        <ColoredText.Primary>友達</ColoredText.Primary><ColoredText.Red>に</ColoredText.Red>
        <Text>写真を撮るように</Text><ColoredText.Pink>頼まれました。</ColoredText.Pink>
      </Phrase>

      <Text fontSize={"sm"} marginBottom={1} marginTop={2}>
        When using the passive voice without any nuance of being upset we use 
        particle <ColoredText.Red>は</ColoredText.Red> after the object, while we use particle 
        <ColoredText.Red>を</ColoredText.Red> when adding that nuance.
      </Text>
      <Phrase litMeaning="This house was built in 2009">
        <ColoredText.Green>この家</ColoredText.Green><ColoredText.Red>は</ColoredText.Red>
        <Text>２００９年に</Text><ColoredText.Pink>建てられた。</ColoredText.Pink>
      </Phrase>
      <Phrase 
        litMeaning="The house was built" 
        altMeaning="I was upset that the house was built, maybe because it covered the beautiful view I had before">
        <ColoredText.Primary>家</ColoredText.Primary><ColoredText.Red>を</ColoredText.Red>
        <ColoredText.Pink>建てられた。</ColoredText.Pink>
      </Phrase>


      <NewWords words={[
        { kanji: "振る", kana: "ふる", meaning: "To dump (end a relationship)" },
        { kanji: "頼む", kana: "たのむ", meaning: "To ask a favor" },
        { kanji: "建てる", kana: "たてる", meaning: "To build" },
      ]} />

      {/* から・で Made of */}
      <Divider marginTop={5} marginBottom={5} />
      <Heading size="md" mb={5} color={"blue.500"}>
        Noun + から/で + 作ります
      </Heading>

      <Text>
        We use <ColoredText.Primary>Noun</ColoredText.Primary> + <ColoredText.Red>から</ColoredText.Red> 
        to say what something is <Text bold>made of</Text>. (You cannot see the material)</Text>
      <Phrase litMeaning="Beer is made from barley">
        ビールは<Text>大麦<ColoredText.Red>から</ColoredText.Red></Text><ColoredText.Pink>作られます。</ColoredText.Pink>
      </Phrase>

      <Text>
        We use <ColoredText.Primary>Noun</ColoredText.Primary> + <ColoredText.Red>で</ColoredText.Red> 
        to say what something is <Text bold>made from</Text>. (You can see the material)
      </Text>
      <Phrase litMeaning="Japanese houses used to be built of wood">
        昔日本の家は<Text>木<ColoredText.Red>で</ColoredText.Red></Text><ColoredText.Pink>作られた。
        </ColoredText.Pink>
      </Phrase>

      <NewWords words={[
        { kanji: "大麦", kana: "おおむぎ", meaning: "Barley" },
        { kanji: "昔", kana: "むかし", meaning: "Long ago" },
      ]} />

      {/* この/その/あの + position */}
      <Divider marginTop={5} marginBottom={5} />
      <Heading size="md" mb={5} color={"blue.500"}>
        この/その/あの + position
      </Heading>
      <Text>
        We use a <Text bold>demonstrative</Text> attached to a noun that indicates position to indicate where
        the speaker or listener is in relation to what the positional noun indicates
      </Text>
      <HStack 
        my={2}
        p={2}
        width={{base: "100%", md: "50%"}}
        alignItems="center"
        borderRadius="md" borderWidth={1} borderColor="primary.200"
      >
        <VStack flex={1} alignItems="center">
          <Box flex={1} alignItems="center">
            <Text>この</Text>
          </Box>
          <Box flex={1} alignItems="center">
            <Text>その</Text>
          </Box>
          <Box flex={1} alignItems="center">
            <Text>あの</Text>
          </Box>
        </VStack>
        <VStack flex={1} alignItems="center">
          <Text>+</Text>
        </VStack>
        <VStack flex={1} alignItems="center">
          <Box flex={1} alignItems="center">
            <Text>上</Text>
          </Box>
          <Box flex={1} alignItems="center">
            <Text>下</Text>
          </Box>
          <Box flex={1} alignItems="center">
            <Text>中</Text>
          </Box>
          <Box flex={1} alignItems="center">
            <Text>近 (ちか)</Text>
          </Box>
          <Box flex={1} alignItems="center">
            <Text>隣 (となり)</Text>
          </Box>
        </VStack>
      </HStack>
      <Phrase litMeaning="Can you go in there?">
        <ColoredText.Primary>あの</ColoredText.Primary><ColoredText.Pink>中</ColoredText.Pink>に入れますか
      </Phrase>
      <Phrase litMeaning="That building" altMeaning="That building that is away from the speaker and near the listener">
        <ColoredText.Primary>あの</ColoredText.Primary>建物の<ColoredText.Pink>中</ColoredText.Pink>
      </Phrase>
    </Box>
  )
};

export default Lesson37;
