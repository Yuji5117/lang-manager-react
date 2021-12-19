export class Vocabulary {
  readonly id: number | null;
  readonly word: string;
  readonly translatedWord: string;
  readonly image: string;

  constructor(id: number, word: string, translatedWord: string, image: string) {
    this.id = id;
    this.word = word;
    this.translatedWord = translatedWord;
    this.image = image;
  }
}


export interface UpdatedVocab{
  id: number;
  vocab: string;
  translatedVocab: string;
}