import { Vocabulary } from "context/domain/vocabulary";
import VocabularyDriver, {
} from "context/interface/driver/vocabulatyDriver";
import VocabularyRepository from "context/interface/repository/vocabularyRepository";

export default class VocabularyRepositoryImpl implements VocabularyRepository {
  private readonly vocabularyDriver: VocabularyDriver;

  constructor(vocabularyDriver: VocabularyDriver) {
    this.vocabularyDriver = vocabularyDriver;
  }

  async findAll(): Promise<Vocabulary[]> {
    const res = await this.vocabularyDriver.findAll();
    return res.map(
      (vocabularyEntity) =>
        new Vocabulary(
          vocabularyEntity.id,
          vocabularyEntity.word,
          vocabularyEntity.translatedWord,
          vocabularyEntity.image
        )
    );
  }

  async add(vocabulary: Vocabulary): Promise<void> {
    await this.vocabularyDriver.add(vocabulary);
  }

  async delete(id: number): Promise<void> {
    await this.vocabularyDriver.delete(id);
  }
}
