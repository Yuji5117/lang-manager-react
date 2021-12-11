import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Vocabulary } from "context/domain/vocabulary";
import { VocabularyUseCase } from "context/interface/usecase/vocabularyUseCase";
import AddVocabularyModal from "./AddVocabularyModal";
import CardList from "./CardList";

type Props = {
  useCase: VocabularyUseCase;
};

function Main({ useCase }: Props) {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [langWords, setLangWords] = useState<Vocabulary[]>([]);
  const [langWord, setLangWord] = useState<Vocabulary>({
    id: null,
    word: "",
    translatedWord: "",
    image: "",
  });

  useEffect(() => {
    fetchVocabularies();
  });

  const fetchVocabularies = async () => {
    setLangWords(await useCase.fetchVocabularies());
  };

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

  const addVocabulary = () => {
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

  const deleteVocabulary = async (id: number): Promise<void> => {
    await useCase.deleteVocabulary(id);
    fetchVocabularies();
  };

  return (
    <Wrapper>
      {/* 新規作成ボタン */}
      <ButtonWrapper>
        <Button variant="contained" onClick={handleModal}>
          Add Vocabulary
        </Button>
      </ButtonWrapper>
      {/* モーダル作成 */}
      {openModal && (
        <AddVocabularyModal
          onChengeHandle={onChengeHandle}
          addVocabulary={addVocabulary}
          handleModal={handleModal}
        />
      )}
      <CardListWrapper>
        <CardList langWords={langWords} deleteVocabulary={deleteVocabulary} />
      </CardListWrapper>
    </Wrapper>
  );
}

export default Main;

const Wrapper = styled.div`
  height: 100%;
  width: 85%;
  margin: 0 auto;
  padding-top: 30px;
`;

const ButtonWrapper = styled.div`
  margin-bottom: 30px;
`;

const CardListWrapper = styled.div`
  margin-bottom: 30px;
`;
