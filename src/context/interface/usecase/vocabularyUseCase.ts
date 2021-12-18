import { Vocabulary } from "context/domain/vocabulary";

export interface VocabularyUseCase {
  fetchVocabularies(): Promise<Vocabulary[]>;
  addVocabulary(vocabulary: Vocabulary): Promise<void>;
  deleteVocabulary(id: number): Promise<void>;
}
