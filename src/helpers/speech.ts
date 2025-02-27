let voicesCache: SpeechSynthesisVoice[] | null = null;

export async function loadVoices(): Promise<SpeechSynthesisVoice[]> {
  return new Promise((resolve) => {
    if(voicesCache) {
      resolve(voicesCache);
    } else {
      const voicesHandler = () => {
        const availableVoices = window.speechSynthesis.getVoices();
        voicesCache = availableVoices;
        resolve(voicesCache);
      };
      window.speechSynthesis.onvoiceschanged = voicesHandler;
      voicesHandler();
    }
  });
}

export async function speak(word: string): Promise<void> {
  // if(!window.speechSynthesis) {
  //   alert("Your browser doesn't support speech synthesis.");
  //   return;
  // }
  
  const voices = await loadVoices();
  const utterance = new SpeechSynthesisUtterance(word);
  const japaneseVoice = voices.find((voice) => voice.lang.startsWith('ja'));

  if(japaneseVoice) {
    utterance.voice = japaneseVoice;
  }

  window.speechSynthesis.speak(utterance);
}