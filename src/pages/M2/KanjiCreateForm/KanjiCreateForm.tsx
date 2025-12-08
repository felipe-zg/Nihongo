// KanjiCreateForm.tsx
import React from "react";
import {
  Box,
  Button,
  Heading,
  HStack,
  IconButton,
  Input,
  VStack,
  Text,
  useToast,
} from "native-base";
import { CloseIcon, AddIcon } from "native-base";
import { KanjiService } from "../../../api/firebase/firestore/kanji/m2/kanjiService.api";
import { addArrayItem, removeArrayItem, updateArray } from "../../../utils";

const emptyWord = (): TKanjiM2WordsWithExample => ({
  word: "",
  reading: "",
  meaning: "",
  exampleSentenceRuby: "",
});

const emptyOtherWord = (): TKanjiM2Words => ({
  word: "",
  reading: "",
  meaning: "",
});

export default function KanjiCreateForm() {
  const toast = useToast();

  const [id, setId] = React.useState<string>("");
  const [kanji, setKanji] = React.useState<string>("");

  const [kun, setKun] = React.useState<string[]>([""]);
  const [on, setOn] = React.useState<string[]>([""]);
  const [meanings, setMeanings] = React.useState<string[]>([""]);

  const [words, setWords] = React.useState<TKanjiM2WordsWithExample[]>([emptyWord()]);
  const [otherWords, setOtherWords] = React.useState<TKanjiM2Words[]>([emptyOtherWord()]);

  const [submitting, setSubmitting] = React.useState(false);

  // words specific helpers
  const updateWord = (idx: number, patch: Partial<TKanjiM2WordsWithExample>) =>
    setWords(prev => prev.map((w, i) => (i === idx ? { ...w, ...patch } : w)));

  const addWord = () => setWords(prev => [...prev, emptyWord()]);
  const removeWord = (idx: number) => setWords(prev => prev.filter((_, i) => i !== idx));

  // otherWords helpers
  const updateOtherWord = (idx: number, patch: Partial<TKanjiM2Words>) =>
    setOtherWords(prev => prev.map((w, i) => (i === idx ? { ...w, ...patch } : w)));

  const addOtherWord = () => setOtherWords(prev => [...prev, emptyOtherWord()]);
  const removeOtherWord = (idx: number) => setOtherWords(prev => prev.filter((_, i) => i !== idx));

  const validate = (): string | null => {
    if (!id.trim()) return "ID is required";
    if (Number.isNaN(Number(id))) return "ID must be a number";
    if (!kanji.trim()) return "Kanji is required";
    // optional: ensure at least one meaning
    if (meanings.every(m => !m.trim())) return "Add at least one meaning";
    return null;
  };

  const handleSubmit = async () => {
    const err = validate();
    if (err) {
      toast.show({ description: err, placement: "top" });
      return;
    }

    const payload: TKanjiM2 = {
      id: Number(id),
      kanji: kanji.trim(),
      kun: kun.map(s => s.trim()).filter(Boolean),
      on: on.map(s => s.trim()).filter(Boolean),
      meanings: meanings.map(s => s.trim()).filter(Boolean),
      words: words
        .map(w => ({
          word: w.word.trim(),
          reading: w.reading.trim(),
          meaning: w.meaning.trim(),
          exampleSentenceRuby: w.exampleSentenceRuby.trim(),
        }))
        .filter(w => w.word || w.reading || w.meaning || w.exampleSentenceRuby),
      otherWords: otherWords
        .map(w => ({ word: w.word.trim(), reading: w.reading.trim(), meaning: w.meaning.trim() }))
        .filter(w => w.word || w.reading || w.meaning),
    };

    try {
      setSubmitting(true);
      await KanjiService.createKanji(payload);
      toast.show({ description: `Kanji ${payload.kanji} saved (id ${payload.id})`, placement: "top" });
      // reset form
      setId("");
      setKanji("");
      setKun([""]);
      setOn([""]);
      setMeanings([""]);
      setWords([emptyWord()]);
      setOtherWords([emptyOtherWord()]);
    } catch (e: any) {
      console.error(e);
      toast.show({ description: e?.message ?? "Error saving", placement: "top" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Box maxW="container.md" mx="auto" p={4} backgroundColor={"gray.200"}>
      <Heading size="md" mb={4}>
        Create new Kanji (M2)
      </Heading>

      <VStack space={4}>
        <HStack space={3}>
          <Input
            flex={1}
            keyboardType="numeric"
            placeholder="id (number)"
            value={id}
            onChangeText={setId}
          />
          <Input flex={2} placeholder="Kanji (e.g. 丸)" value={kanji} onChangeText={setKanji} />
        </HStack>

        {/* KUN */}
        <Box>
          <Text mb={2}>Kun readings</Text>
          <VStack space={2}>
            {kun.map((k, idx) => (
              <HStack key={idx} space={2} alignItems="center">
                <Input
                  value={k}
                  onChangeText={v => updateArray(setKun, idx, v)}
                  placeholder={`kun[${idx}]`}
                />
                <IconButton
                  aria-label="remove"
                  icon={<CloseIcon />}
                  onPress={() => removeArrayItem(setKun, idx)}
                  isDisabled={kun.length === 1}
                />
              </HStack>
            ))}
            <Button leftIcon={<AddIcon />} variant="ghost" onPress={() => addArrayItem(setKun, "")}>
              Add kun
            </Button>
          </VStack>
        </Box>

        {/* ON */}
        <Box>
          <Text mb={2}>On readings</Text>
          <VStack space={2}>
            {on.map((k, idx) => (
              <HStack key={idx} space={2} alignItems="center">
                <Input
                  value={k}
                  onChangeText={v => updateArray(setOn, idx, v)}
                  placeholder={`on[${idx}]`}
                />
                <IconButton
                  aria-label="remove"
                  icon={<CloseIcon />}
                  onPress={() => removeArrayItem(setOn, idx)}
                  isDisabled={on.length === 1}
                />
              </HStack>
            ))}
            <Button leftIcon={<AddIcon />} variant="ghost" onPress={() => addArrayItem(setOn, "")}>
              Add on
            </Button>
          </VStack>
        </Box>

        {/* Meanings */}
        <Box>
          <Text mb={2}>Meanings</Text>
          <VStack space={2}>
            {meanings.map((m, idx) => (
              <HStack key={idx} space={2} alignItems="center">
                <Input
                  value={m}
                  onChangeText={v => updateArray(setMeanings, idx, v)}
                  placeholder={`meaning[${idx}]`}
                />
                <IconButton
                  aria-label="remove"
                  icon={<CloseIcon />}
                  onPress={() => removeArrayItem(setMeanings, idx)}
                  isDisabled={meanings.length === 1}
                />
              </HStack>
            ))}
            <Button leftIcon={<AddIcon />} variant="ghost" onPress={() => addArrayItem(setMeanings, "")}>
              Add meaning
            </Button>
          </VStack>
        </Box>

        {/* Words (with exampleSentenceRuby) */}
        <Box>
          <Text mb={2}>Words (with example)</Text>
          <VStack space={3}>
            {words.map((w, idx) => (
              <Box key={idx} p={3} borderWidth={1} borderRadius="md">
                <HStack justifyContent="space-between" alignItems="center" mb={2}>
                  <Text bold>Word #{idx + 1}</Text>
                  <IconButton
                    aria-label="remove word"
                    icon={<CloseIcon />}
                    onPress={() => removeWord(idx)}
                    isDisabled={words.length === 1}
                  />
                </HStack>

                <VStack space={2}>
                  <Input placeholder="word" value={w.word} onChangeText={v => updateWord(idx, { word: v })} />
                  <Input placeholder="reading" value={w.reading} onChangeText={v => updateWord(idx, { reading: v })} />
                  <Input placeholder="meaning" value={w.meaning} onChangeText={v => updateWord(idx, { meaning: v })} />
                  <Input
                    placeholder="example sentence (with ruby)"
                    onChangeText={(v: any) => {
                      setWords(prev => {
                        const clone = [...prev];
                        clone[idx] = { ...clone[idx], exampleSentenceRuby: v };
                        return clone;
                      });
                    }}
                  />
                </VStack>
              </Box>
            ))}

            <Button leftIcon={<AddIcon />} variant="ghost" onPress={addWord}>
              Add word
            </Button>
          </VStack>
        </Box>

        {/* Other Words */}
        <Box>
          <Text mb={2}>Other words</Text>
          <VStack space={2}>
            {otherWords.map((w, idx) => (
              <HStack key={idx} space={2} alignItems="center">
                <Input
                  placeholder="word"
                  value={w.word}
                  onChangeText={v => updateOtherWord(idx, { word: v })}
                />
                <Input
                  placeholder="reading"
                  value={w.reading}
                  onChangeText={v => updateOtherWord(idx, { reading: v })}
                />
                <Input
                  placeholder="meaning"
                  value={w.meaning}
                  onChangeText={v => updateOtherWord(idx, { meaning: v })}
                />
                <IconButton
                  aria-label="remove other"
                  icon={<CloseIcon />}
                  onPress={() => removeOtherWord(idx)}
                  isDisabled={otherWords.length === 1}
                />
              </HStack>
            ))}

            <Button leftIcon={<AddIcon />} variant="ghost" onPress={addOtherWord}>
              Add other word
            </Button>
          </VStack>
        </Box>

        <HStack justifyContent="flex-end" mt={2}>
          <Button isLoading={submitting} onPress={handleSubmit}>
            Save Kanji
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
}
