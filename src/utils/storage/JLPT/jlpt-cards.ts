const STORAGE_KEY = "jlpt_saved_cards";

export function getSavedCards(): JLPTReview[] {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return [];
  try {
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export function saveCard(card: JLPTReview) {
  const cards = getSavedCards();

  // No duplicates — check by kanji+kana (or an "id" if you have one)
  const exists = cards.some(c => c.kanji === card.kanji && c.kana === card.kana);
  if (!exists) {
    cards.push(card);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cards));
  }
}

export function removeCard(card: JLPTReview) {
  const cards = getSavedCards().filter(
    c => !(c.kanji === card.kanji && c.kana === card.kana)
  );
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cards));
}

export function isCardSaved(card: JLPTReview) {
  return getSavedCards().some(
    c => c.kanji === card.kanji && c.kana === card.kana
  );
}