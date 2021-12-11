import VocabularyDriver, {
  VocabulariesJson,
} from "context/interface/driver/vocabulatyDriver";
export default class VocabularyDriverImpl implements VocabularyDriver {
  async findAll(): Promise<VocabulariesJson> {
    const res = await fetch("http://localhost:3000/vocabularies");
    return await res.json();
  }

  async delete(id: number): Promise<void> {
    const res = await fetch(`http://localhost:3000/vocabularies/${id}`, {
      method: "DELETE",
    });

    console.log(res);
  }
}
