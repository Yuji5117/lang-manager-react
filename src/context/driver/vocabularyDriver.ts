import VocabularyDriver, {
  VocabularyJson,
} from "context/interface/driver/vocabulatyDriver";
export default class VocabularyDriverImpl implements VocabularyDriver {
  async findAll(): Promise<VocabularyJson[]> {
    const res = await fetch("http://localhost:3000/vocabularies");
    return await res.json();;
  }

  async delete(id: number): Promise<void> {
    await fetch(`http://localhost:3000/vocabularies/${id}`, {
      method: "DELETE",
    });
  }
}
