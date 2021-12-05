import VocabularyDriver, {
  VocabulariesJson,
} from "../interface/driver/vocabulatyDriver";

export default class VocabularyDriverImpl implements VocabularyDriver {
  async findAll(): Promise<VocabulariesJson> {
    const res = await fetch("http://localhost:3000/vocabularies");
    return await res.json();
  }
}
