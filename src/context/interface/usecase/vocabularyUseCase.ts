import { Vocabulary } from "context/domain/vocabulary";

export interface VocabularyUseCase {
  fetchVocabularies(): Promise<Vocabulary[]>;
}
