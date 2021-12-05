export default interface VocabularyDriver {
  findAll(): Promise<VocabulariesJson>;
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
