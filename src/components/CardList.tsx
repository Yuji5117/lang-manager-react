import React from "react";
import Card from "./Card";

interface langWord {
  id: number;
  word: string;
  translatedWord: string;
  image?: string;
}

interface PrposType {
  langWords: langWord[];
}

const CardList = (props: PrposType) => {
  return (
    <div>
      カードリスト
      {props.langWords.map((langWord) => (
        <Card key={langWord.id} langWord={langWord} />
      ))}
      {/* Card */}
    </div>
  );
};

export default CardList;
