import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";

import { db } from "../../../../../firebase";

export class KanjiService {
  private static col = collection(db, "kanji");

  static async createKanji(item: TKanjiM2): Promise<void> {
    await setDoc(doc(this.col, item.id.toString()), item);
  }

  static async getKanji(id: number): Promise<TKanjiM2 | null> {
    const ref = doc(this.col, id.toString());
    const snap = await getDoc(ref);

    if (!snap.exists()) return null;
    return snap.data() as TKanjiM2;
  }

  static async getAllKanji(): Promise<Record<number, TKanjiM2>> {
    const snap = await getDocs(this.col);

    const result: Record<number, TKanjiM2> = {};
    snap.forEach((d) => {
      const data = d.data() as TKanjiM2;
      result[data.id] = data;
    });

    return result;
  }

  static async updateKanji(
    id: number,
    partial: Partial<TKanjiM2>
  ): Promise<void> {
    const ref = doc(this.col, id.toString());
    await updateDoc(ref, partial);
  }

  static async deleteKanji(id: number): Promise<void> {
    await deleteDoc(doc(this.col, id.toString()));
  }
}
