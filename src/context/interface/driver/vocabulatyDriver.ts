export default interface VocabularyDriver {
  findAll(): Promise<VocabularyJson[]>;
  delete(id: number): Promise<void>;
}

export type VocabularyJson = {
  id: number;
  word: string;
  translatedWord: string;
  image: string;
};
