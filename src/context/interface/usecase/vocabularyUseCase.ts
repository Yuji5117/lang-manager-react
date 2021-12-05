import { Vocabulary } from "./../../domain/vocabulary";

export interface VocabularyUseCase {
  fetchVocabularies(): Promise<Vocabulary[]>;
}
