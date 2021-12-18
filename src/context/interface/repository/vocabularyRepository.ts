import { Vocabulary } from "context/domain/vocabulary";
export default interface VocabularyRepository {
  findAll(): Promise<Vocabulary[]>;
  add(vocabulary: Vocabulary): Promise<void>;
  delete(id: number): Promise<void>;
}
