import { Vocabulary, UpdatedVocab } from "context/domain/vocabulary";
export default interface VocabularyRepository {
  findAll(): Promise<Vocabulary[]>;
  add(vocabulary: Vocabulary): Promise<void>;
  update(id: number, vocabulary: UpdatedVocab): Promise<void>;
  delete(id: number): Promise<void>;
}
