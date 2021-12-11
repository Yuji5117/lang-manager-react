import VocabularyDriver, {
  VocabularyJson,
} from "context/interface/driver/vocabulatyDriver";
export default class VocabularyDriverImpl implements VocabularyDriver {
  async findAll(): Promise<VocabularyJson[]> {
    const res = await fetch("http://localhost:3000/vocabularies");
    const test = await res.json();
    console.log(test);
    return test;
  }

  async delete(id: number): Promise<void> {
    const res = await fetch(`http://localhost:3000/vocabularies/${id}`, {
      method: "DELETE",
    });

    console.log(res);
  }
}
