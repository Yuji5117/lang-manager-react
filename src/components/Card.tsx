import React from "react";

interface langWord {
  id: number;
  word: string;
  translatedWord: string;
  image?: string;
}

interface PropsType {
  key: number;
  langWord: langWord;
}

const Card: React.FC<PropsType> = (props) => {
  return <div>{props.langWord.word} {props.langWord.translatedWord}</div>;
};

export default Card;
