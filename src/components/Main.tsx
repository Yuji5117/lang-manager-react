import { Button } from "@mui/material";
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

  const addVocablary = () => {
    if (!langWord.word || !langWord.translatedWord) return;
    setLangWords([...langWords, langWord]);
    handleModal();
    setLangWord({
      id: null,
      word: "",
      translatedWord: "",
      image: "",
    });
  };

  const deleteVocablary = (id: number | null): void => {
    const newLangWords = langWords.filter((word) => word.id !== id);
    setLangWords(newLangWords);
  };

  return (
    <Wrapper>
      {/* 新規作成ボタン */}
      <ButtonWrapper>
        <Button variant="contained" onClick={handleModal}>
          Add Vocablary
        </Button>
      </ButtonWrapper>
      {/* モーダル作成 */}
      {openModal && (
        <AddVocabularyModal
          onChengeHandle={onChengeHandle}
          addVocablary={addVocablary}
          handleModal={handleModal}
        />
      )}
      <CardList langWords={langWords} deleteVocablary={deleteVocablary} />
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

const ButtonWrapper = styled.div`
  margin-bottom: 30px;
`;
