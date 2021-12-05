import { Vocabulary } from "./../../domain/vocabulary";

export default interface VocabularyRepository {
  findAll(): Promise<Vocabulary[]>;
}
