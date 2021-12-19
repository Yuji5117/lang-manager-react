import { Vocabulary, UpdatedVocab } from "context/domain/vocabulary";

export default interface VocabularyDriver {
  findAll(): Promise<VocabularyJson[]>;
  add(vocabulary: Vocabulary): Promise<void>;
  update(id: number, vocabulary: UpdatedVocab): Promise<void>;
  delete(id: number): Promise<void>;
}

export type VocabularyJson = {
  id: number;
  word: string;
  translatedWord: string;
  image: string;
};
