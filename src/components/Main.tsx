import { Button, Modal } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import AddVocabularyModal from "./AddVocabularyModal";
import CardList from "./CardList";

interface LangWord {
  id: number | null;
  word: string;
  translatedWord: string;
  image?: string;
}

function Main() {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [langWords, setLangWords] = useState<LangWord[]>([
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
  const [langWord, setLangWord] = useState<LangWord>({
    id: null,
    word: "",
    translatedWord: "",
    image: "",
  });

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  const onChengeHandle = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    console.log(e.target.value);
    console.log(e);
    switch (e.target.name) {
      case "lang":
        setLangWord({ ...langWord, word: e.target.value });
        break;
      case "translatedLang":
        setLangWord({ ...langWord, translatedWord: e.target.value });
        break;
      default:
        break;
    }
  };
  const AddVocablary = () => {
    console.log("add");
    setLangWords([...langWords, langWord]);
    setLangWord({
      id: null,
      word: "",
      translatedWord: "",
      image: "",
    });
  };

  return (
    <Wrapper>
      {/* 新規作成ボタン */}
      <Button variant="contained" onClick={handleModal}>
        Add Vocablary
      </Button>
      {/* モーダル作成 */}
      {openModal && (
        <AddVocabularyModal
          onChengeHandle={onChengeHandle}
          AddVocablary={AddVocablary}
        />
      )}
      <CardList langWords={langWords} />
    </Wrapper>
  );
}

export default Main;

const Wrapper = styled.div`
  height: 100%;
  width: 80%;
  margin: 0 auto;
  padding-top: 30px;
`;
