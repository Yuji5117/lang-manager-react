import { Vocabulary, UpdatedVocab } from "context/domain/vocabulary";
import VocabularyDriver, {
  VocabularyJson,
} from "context/interface/driver/vocabulatyDriver";
import axios from "axios";
export default class VocabularyDriverImpl implements VocabularyDriver {
  async findAll(): Promise<VocabularyJson[]> {
    const res = await axios.get(
      `${process.env.REACT_APP_API_ENDPOINT}/vocabularies`
    );
    return res.data;
  }

  async add(vocabulary: Vocabulary): Promise<void> {
    await axios.post(
      `${process.env.REACT_APP_API_ENDPOINT}/vocabularies`,
      vocabulary
    );
  }

  async update(id: number, vocabulary: UpdatedVocab): Promise<void> {
    await axios.put(
      `${process.env.REACT_APP_API_ENDPOINT}/vocabularies/${id}`,
      {
        word: vocabulary.vocab,
        translatedWord: vocabulary.translatedVocab,
        image: "test.jpg",
      }
    );
  }

  async delete(id: number): Promise<void> {
    await axios.delete(
      `${process.env.REACT_APP_API_ENDPOINT}/vocabularies/${id}`
    );
  }
}
