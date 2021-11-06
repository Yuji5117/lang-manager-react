import React, { useState } from "react";
import styled from "styled-components";
import CardList from "./CardList";

interface langWord {
  id: number
  word: string;
  translatedWord: string;
  image?: string;
}

function Main() {
  const [langWords, setLangWords] = useState<langWord[]>([
    {
      id: 1,
      word: "English",
      translatedWord: "英語",
    },
    {
      id:2,
      word: "Japanese",
      translatedWord: "日本語",
    },
  ]);
  return (
    <Wrapper>
      <CardList langWords={langWords} />
    </Wrapper>
  );
}

export default Main;

const Wrapper = styled.div`
  height: 100%;
  background-color: red;
`;
