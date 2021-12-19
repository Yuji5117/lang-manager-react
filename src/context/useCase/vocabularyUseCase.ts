import { VocabularyUseCase } from "context/interface/usecase/vocabularyUseCase";
import { Vocabulary, UpdatedVocab } from "context/domain/vocabulary";
import VocabularyRepository from "context/interface/repository/vocabularyRepository";

export default class VocabularyUseCaseImpl implements VocabularyUseCase {
  readonly vocabularyRepository: VocabularyRepository;

  constructor(repository: VocabularyRepository) {
    this.vocabularyRepository = repository;
  }

  async fetchVocabularies(): Promise<Vocabulary[]> {
    return await this.vocabularyRepository.findAll();
  }

  async addVocabulary(vocabulary: Vocabulary): Promise<void> {
    return await this.vocabularyRepository.add(vocabulary);
  }

  async updateVocabulary(id: number, vocabulary: UpdatedVocab): Promise<void> {
    return await this.vocabularyRepository.update(id, vocabulary);
  }

  async deleteVocabulary(id: number): Promise<void> {
    return await this.vocabularyRepository.delete(id);
  }
}
