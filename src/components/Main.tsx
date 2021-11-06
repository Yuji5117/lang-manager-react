import React, { useState } from "react";
import styled from "styled-components";
import CardList from "./CardList";

interface langWord {
  id: number;
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
      image: "test.jpg",
    },
    {
      id: 2,
      word: "Japanese",
      translatedWord: "日本語",
      image: "test2.jpg",
    },
  ]);
  return (
    <Wrapper>
      {/* 新規作成ボタン */}
      <CardList langWords={langWords} />
    </Wrapper>
  );
}

export default Main;

const Wrapper = styled.div`
  height: 100%;
  width: 80%;
  margin: 0 auto;
  padding-top: 60px;
`;
