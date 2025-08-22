import React from "react";
import { Box, Divider, Heading, HStack, Text} from "native-base";
import { ColoredText, NewWords, Phrase } from "../../../../components";

type GrammarTableProps = {
  grammarPoint: string;
  example: {
    litMeaning: string;
    Example: React.ReactNode;
  }[];
};

function GrammarTable({ grammarPoint, example }: GrammarTableProps) {
  return (
    <Box borderWidth={1} borderColor="pink.400" borderRadius={5} p={3} mb={4}>
      <Box borderBottomWidth={1} borderColor="pink.400" mb={2}>
        <Text fontSize="sm" mb={2} textAlign="justify">
          {grammarPoint}
        </Text>
      </Box>
      {example.map(({litMeaning, Example}) => (
        <Phrase litMeaning={litMeaning}>
          {Example}
        </Phrase>
      ))}
    </Box>
  );
}

function GrammarPoint({ title, meaning, equivalents }: { title: string, meaning: string, equivalents?: string[] }) {
  return (
    <Box borderWidth={1} borderRadius={5} borderColor="red.400" mb={2}>
      <Box py={1} px={2} alignItems={"center"}>
        <ColoredText.Primary>{title}</ColoredText.Primary>
      </Box>
      <Box py={1} px={2} borderTopWidth={1} borderBottomWidth={1} borderColor="red.400">
        <Text>
          <ColoredText.Red>
            意味:&nbsp;
          </ColoredText.Red>
          <Text fontSize="sm" color="black.500">{meaning}</Text>
        </Text>
      </Box>
      <Box p={1} alignSelf="flex-start">
        <HStack alignItems="center" justifyContent="space-between" alignContent="flex-start">
          <Box px={2}>
            <ColoredText.Red>=</ColoredText.Red>
          </Box>
          <Divider orientation="vertical" thickness="1" bg="red.400" height={6} mr={2} />
          <Box px={2}>
            {equivalents && equivalents.length > 0 ? (
              <ColoredText.Red>{equivalents.join(", ")}</ColoredText.Red>
            ) : (
              <ColoredText.Red>None</ColoredText.Red>
            )}

          </Box>
        </HStack>
      </Box>
    </Box>
  );
}

function GrammarTest({ tests }: { tests: string[] }) {
  return (
    <Box borderWidth={1} borderColor="primary.400" borderRadius={5} borderTopWidth={0} borderTopRadius={0} p={3} mb={5}>
      {tests.map((test, index) => (
        <Text key={index} fontSize="sm" mb={2} color="pink.500">
          {test}
        </Text>
      ))}
    </Box>
  );
}

function DoubleDivider({ color = "gray.500", variant = "solid" }: { color?: string, variant?: "solid" | "dashed" }) {
  return (
    <Box my={5}>
      <Box
        borderBottomWidth={1}
        borderBottomColor={color}
        borderStyle={variant}
        width="100%"
        mb={1}
      />
      <Box
        borderBottomWidth={1}
        borderBottomColor={color}
        borderStyle={variant}
        width="100%"
      />
    </Box>
  );
}

const GrammarN2: React.FC = () => {

  return (
    <Box backgroundColor="gray.50" minHeight={"100vh"} px={5} py={5}>
      <Heading size="md" mt={5} mb={2} textAlign="center" color={"pink.400"}>
        ぎっしり
      </Heading>

      <GrammarPoint title="〜 ぎっしり 〜" meaning="ある場所に、物がたくさん入っていること、他に入れません。" equivalents={["いっぱい"]} />
      <GrammarTable 
        grammarPoint="To be packed, to be full, to be tightly filled"
        example={[
          {
            litMeaning: "The bookshelf is packed with books",
            Example: <>本棚に本が<ColoredText.Pink>ぎっしり</ColoredText.Pink>詰まっている。</>
          },
          {
            litMeaning: "The bento box is packed with rice",
            Example: <>お弁当箱にお米が<ColoredText.Pink>ぎっしり</ColoredText.Pink>（と）入っている。</>
          },
        ]}
      />
      <GrammarTest tests={[
        "新しい本を入れるスペースがありません。",
        "新しい本を入れることできない。",
      ]} />

      <NewWords words={[
        { kanji: "本棚", kana: "ほんだな", meaning: "Bookshelf" },
        { kanji: "詰まる", kana: "つまる", meaning: "To be packed, to be full" },
      ]} />

      <DoubleDivider color="red.400" variant="dashed" />
      {/* ============================================ */}
      {/* ============================================ */}
      {/* ============================================ */}

      <Heading size="md" mt={5} mb={2} textAlign="center" color={"pink.400"}>
        ぎらぎら
      </Heading>

      <GrammarPoint title="〜 ぎらぎら 〜" meaning="光が強くてまぶしい様子。" equivalents={["きらきら"]} />
      <GrammarTable
        grammarPoint="To glitter, to sparkle"
        example={[
          {
            litMeaning: "The sun is shining brightly",
            Example: <>太陽が<ColoredText.Pink>ぎらぎら</ColoredText.Pink>と照っている。</>
          },
        ]}
      />

      <NewWords words={[
        { kanji: "太陽", kana: "たいよう", meaning: "Sun" },
        { kanji: "照っている", kana: "てっている", meaning: "Shining" },
      ]} />

      <Text><ColoredText.Red>ぎらぎら</ColoredText.Red> glaring, blazing, dazzling (unpleasant)</Text>
      <Text><ColoredText.Primary>きらきら</ColoredText.Primary> glittering, sparkling, twinkling (pleasant)</Text>

      <DoubleDivider color="red.400" variant="dashed" />
      {/* ============================================ */}
      {/* ============================================ */}
      {/* ============================================ */}

      <Heading size="md" mt={5} mb={2} textAlign="center" color={"pink.400"}>
        びっしょり
      </Heading>

      <GrammarPoint title="〜 びっしょり 〜" meaning="水で濡れている様子。" equivalents={["びしょびしょ"]} />
      <GrammarTable
        grammarPoint="To be soaked, to be drenched"
        example={[
          {
            litMeaning: "I got soaked in the rain",
            Example: <>雨に濡れてしまって、服が<ColoredText.Pink>びっしょり</ColoredText.Pink>だ。</>
          },
        ]}
      />

      <NewWords words={[
        { kanji: "濡れる", kana: "ぬれる", meaning: "To get wet" },
      ]} />

      <DoubleDivider color="red.400" variant="dashed" />
      {/* ============================================ */}
      {/* ============================================ */}
      {/* ============================================ */}

      <Heading size="md" mt={5} mb={2} textAlign="center" color={"pink.400"}>
        じっくり
      </Heading>

      <GrammarPoint title="〜 じっくり 〜" meaning="じっくりと考える、じっくりと聞くなど、時間をかけて丁寧に行う様子。" equivalents={["しっかり"]} />
      <GrammarTable
        grammarPoint="To do something carefully, thoroughly, or with concentration"
        example={[
          {
            litMeaning: "Warye-san listened to my story carefully",
            Example: <>ワレヤさんは私の話を<ColoredText.Pink>じっくり</ColoredText.Pink>聞いてくれた。</>
          },
        ]}
      />

      <DoubleDivider color="red.400" variant="dashed" />
      {/* ============================================ */}
      {/* ============================================ */}
      {/* ============================================ */}

{/* 
      <Heading size="md" mt={5} mb={2} textAlign="center" color={"pink.400"}>
        〜もの
      </Heading>

      <GrammarTitle title="〜ものだ" />
      <GrammarTable 
        grammarPoint="~ is general knowledge, something that is common sense, or something that is obvious."
        litMeaning="It's common sense that parents worry about their children"
        Example={<>母は子供を心配する<ColoredText.Pink>ものだ。</ColoredText.Pink></>}
      />

      <GrammarTable 
        grammarPoint="Should"
        litMeaning="You should not eat food on the train"
        Example={<>電車の中では食べ物を食べない<ColoredText.Pink>ものだ。</ColoredText.Pink></>}
      />

      <GrammarTable 
        grammarPoint="Express strong emotions"
        litMeaning="It's fun to meet friends after a long time"
        Example={<>友達とい久しぶりに会うのは楽しい<ColoredText.Pink>ものだ。</ColoredText.Pink></>}
      />

      <GrammarTitle title="〜というものだ" />
      <GrammarTable 
        grammarPoint="Express your vies, beliefs, impressions, or feelings about something."
        litMeaning="Success doesn't come right away (easily)"
        Example={<>成功はすぐには訪れない<ColoredText.Pink>というものだ。</ColoredText.Pink></>}
      />
      <NewWords words={[
        { kanji: "成功", kana: "せいこう", meaning: "Success" },
        { kanji: "訪れる", kana: "おとずれる", meaning: "To come, to visit" },
      ]} />


      <GrammarTitle title="〜というものではない" />
      <GrammarTable 
        grammarPoint="Not necessarily, not always, not the case that"
        litMeaning="A watch doesn't necessarily have to be expensive"
        Example={<>時計は高ければいい<ColoredText.Pink>というものではない。</ColoredText.Pink></>}
      />

      <GrammarTitle title="〜ものがある" />
      <GrammarTable 
        grammarPoint="To feel like ~, to have a feeling of ~, to have a sense of ~"
        litMeaning="My daughter's wedding has a special feeling to it"
        Example={<>娘の結婚式は込み上げてくる<ColoredText.Pink>ものがある。</ColoredText.Pink></>}
      />
      <NewWords words={[
        { kanji: "娘", kana: "むすめ", meaning: "Daughter" },
        { kanji: "込み上げる", kana: "こみあげる", meaning: "To well up, to surge up" },
      ]} />

      <GrammarTitle title="〜ものの" />
      <GrammarTable 
        grammarPoint="Although ~, even though ~, but, despite ~"
        litMeaning="Even though I made dinner, I don't feel like eating"
        Example={<>ご飯を作った<ColoredText.Pink>ものの</ColoredText.Pink>、食べる気分ではない。</>}
      />

      <GrammarTitle title="〜ものなら" />
      <GrammarTable 
        grammarPoint="If ~ were to happen, then ~ / If that were true, then ~"
        litMeaning="If I could pass without studying, I would be sleeping right now"
        Example={<>勉強せずに合格できる<ColoredText.Pink>ものなら</ColoredText.Pink>今頃寝ているよ。</>}
      />
      <NewWords words={[
        { kanji: "今頃", kana: "いまごろ", meaning: "Around now" },
      ]} />

      <GrammarTitle title="〜ものか" />
      <GrammarTable 
        grammarPoint="Express strong denial --> No way, never, absolutely not / (Who would do such a thing?)"
        litMeaning="I would never eat vegetables"
        Example={<>野菜なんて食べてやる<ColoredText.Pink>ものか。</ColoredText.Pink></>}
      />
      <NewWords words={[
        { kanji: "なんて", kana: "なんて", meaning: "Such a thing as" },
      ]} />

      <GrammarTitle title="〜ものと思われる" />
      <GrammarTable 
        grammarPoint="It is thought that ~, it is believed that ~, it is considered that ~"
        litMeaning="I discovered what is believed to be a tiger bite mark"
        Example={<>トラが噛んだ<ColoredText.Pink>〜ものと思われる</ColoredText.Pink>痕を発見した。</>}
      />
      <NewWords words={[
        { kanji: "トラ", kana: "とら", meaning: "Tiger" },
        { kanji: "噛んだ", kana: "かんだ", meaning: "Bit" },
        { kanji: "痕", kana: "あと", meaning: "Mark, trace, scar" },
      ]} />

    {/*      
      * 〜こと 
    

    <Heading size="md" mt={5} mb={2} textAlign="center" color={"pink.400"}>
        〜こと
      </Heading>

      <GrammarTitle title="〜ことに" />
      <GrammarTable 
        grammarPoint="Adverb description (Fortunately, Luckily, Funnily, etc.)"
        litMeaning="Fortunately, there was no life-threatening condition"
        Example={<>幸運な<ColoredText.Pink>ことに</ColoredText.Pink>、命に別状はなかった。</>}
      />
      <NewWords words={[
        { kanji: "幸運", kana: "こううん", meaning: "Good luck, fortune" },
        { kanji: "命", kana: "いのち", meaning: "Life" },
        { kanji: "別状", kana: "べつじょう", meaning: "Serious condition, trouble" },
      ]} />

      <GrammarTitle title="〜ことにする" />
      <GrammarTable 
        grammarPoint="Pretend to be, decide to do, make up your mind to do"
        litMeaning="I'll pretend I don't have a boyfriend to participate in the group date."
        Example={<>彼氏はいない<ColoredText.Pink>ことにして</ColoredText.Pink>合コンに参加する。</>}
      />
      <NewWords words={[
        { kanji: "合コン", kana: "ごうこん", meaning: "Group date" },
        { kanji: "参加", kana: "さんか", meaning: "To participate" },
      ]} />

      <GrammarTitle title="〜ことか" />
      <GrammarTable 
        grammarPoint="Express strong emotion, surprise, or admiration"
        litMeaning="I can't believe how happy I was to receive a letter from you."
        Example={<>君からもらった手紙はどんなに嬉しかった<ColoredText.Pink>ことか。</ColoredText.Pink></>}
      />
      <NewWords words={[
        { kanji: "どんなに", kana: "どんなに", meaning: "No matter how" },
      ]} />

      <GrammarTitle title="〜ことから" />
      <GrammarTable 
        grammarPoint="Express a reason, cause, or origin of something (like から)"
        litMeaning="Because Hello Kitty is popular, you can see it all over the world."
        Example={<>ハローキティは人気である<ColoredText.Pink>ことから</ColoredText.Pink>世界中で見ることができる。</>}
      />
      <NewWords words={[
        { kanji: "人気である", kana: "にんきである", meaning: "To be popular" },
      ]} />

      <GrammarTitle title="〜のことだから" />
      <GrammarTable 
        grammarPoint="Describe someone based on their personality or usual behavior"
        litMeaning="Since he is a kind teacher, he probably won't get angry even if you don't do your homework."
        Example={<>優しい先生<ColoredText.Pink>のことだから</ColoredText.Pink>宿題をしなくても怒られないだろう。</>}
      />

      <GrammarTitle title="〜ことなく" />
      <Text fontSize="sm" textAlign="left">
        <ColoredText.Red>Action you don't do </ColoredText.Red><ColoredText.Pink> ことなく </ColoredText.Pink><ColoredText.Primary>Action you do</ColoredText.Primary>
      </Text>
      <GrammarTable 
        grammarPoint="Express an action without doing something else"
        litMeaning="I study without taking a break to pass the JLPT exam."
        Example={
          <>JLPT試験に合格するために、 <ColoredText.Red>休む</ColoredText.Red>
          <ColoredText.Pink>ことなく</ColoredText.Pink><ColoredText.Primary>勉強する。</ColoredText.Primary></>
        }
      />

      <GrammarTitle title="〜ないことには" />
      <GrammarTable 
        grammarPoint="Express a condition that must be met. ( Without doing X, you can't do Y )"
        litMeaning="You can't know if it's delicious without trying it."
        Example={<>食べてみ<ColoredText.Pink>ないことには</ColoredText.Pink>、美味しいかはわからない。</>}
      />

      <GrammarTitle title="〜ないことはない" />
      <GrammarTable 
        grammarPoint="It's mot that you can't do something, but rather that you don't want to do it."
        litMeaning="It's not that I can't eat natto, I just don't like it."
        Example={<>納豆は食べれ<ColoredText.Pink>ないことはない</ColoredText.Pink>が、苦手である。</>}
      />

      <GrammarTitle title="〜ことは〜が" />
      <GrammarTable 
        grammarPoint="It's true that ~, but ~ / I can do it, but ~"
        litMeaning="Sure I received a present, but I wasn't very happy about it."
        Example={<>プレゼントをもらった<ColoredText.Pink>ことは</ColoredText.Pink>
        もらった<ColoredText.Pink>が</ColoredText.Pink>、あまり嬉しくなかった。</>}
      /> */}
 





















      {/* ========================================== */}

      <Heading mt={500} size="md" mb={5} color={"blue.500"}>
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

export default GrammarN2;
