import { VocabularyUseCase } from "./../interface/usecase/vocabularyUseCase";
import { Vocabulary } from "./../domain/vocabulary";
import VocabularyRepository from "../repository/vocabularyRepository";

export default class VocabularyUseCaseImpl implements VocabularyUseCase {
  readonly vocabularyRepository: VocabularyRepository;

  constructor(repository: VocabularyRepository) {
    this.vocabularyRepository = repository;
  }

  async fetchVocabularies(): Promise<Vocabulary[]> {
    return await this.vocabularyRepository.findAll();
  }
}
