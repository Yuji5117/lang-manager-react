import { Vocabulary } from "context/domain/vocabulary";
export default interface VocabularyRepository {
  findAll(): Promise<Vocabulary[]>;
}
