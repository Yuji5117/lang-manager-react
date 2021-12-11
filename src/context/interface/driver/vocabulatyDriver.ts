export default interface VocabularyDriver {
  findAll(): Promise<VocabulariesJson>;
  delete(id: number): Promise<void>;
}

export type VocabulariesJson = {
  vocabularies: VocabularyJson[];
};

export type VocabularyJson = {
  id: number;
  word: string;
  translatedWord: string;
  image: string;
};
