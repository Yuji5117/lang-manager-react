import { Vocabulary, UpdatedVocab } from "context/domain/vocabulary";

export interface VocabularyUseCase {
  fetchVocabularies(): Promise<Vocabulary[]>;
  addVocabulary(vocabulary: Vocabulary): Promise<void>;
  updateVocabulary(id: number, vocabulary: UpdatedVocab): Promise<void>;
  deleteVocabulary(id: number): Promise<void>;
}
