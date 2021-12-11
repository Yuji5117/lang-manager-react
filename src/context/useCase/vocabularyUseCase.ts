import { VocabularyUseCase } from "context/interface/usecase/vocabularyUseCase";
import { Vocabulary } from "context/domain/vocabulary";
import VocabularyRepository from "context/interface/repository/vocabularyRepository";

export default class VocabularyUseCaseImpl implements VocabularyUseCase {
  readonly vocabularyRepository: VocabularyRepository;

  constructor(repository: VocabularyRepository) {
    this.vocabularyRepository = repository;
  }

  async fetchVocabularies(): Promise<Vocabulary[]> {
    return await this.vocabularyRepository.findAll();
  }
}
