import { Vocabulary } from "./../domain/vocabulary";
import VocabularyDriver from "../interface/driver/vocabulatyDriver";
import VocabularyRepository from "../interface/repository/vocabularyRepository";

export default class VocabularyRepositoryImpl implements VocabularyRepository {
  private readonly vocabularyDriver: VocabularyDriver;

  constructor(vocabularyDriver: VocabularyDriver) {
    this.vocabularyDriver = vocabularyDriver;
  }

  async findAll(): Promise<Vocabulary[]> {
    const res = await this.vocabularyDriver.findAll();
    return res.vocabularies.map(
      (vocabularyEntity) =>
        new Vocabulary(
          vocabularyEntity.id,
          vocabularyEntity.word,
          vocabularyEntity.translatedWord,
          vocabularyEntity.image
        )
    );
  }
}
