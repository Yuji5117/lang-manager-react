import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Vocabulary } from "context/domain/vocabulary";
import { VocabularyUseCase } from "context/interface/usecase/vocabularyUseCase";
import AddVocabularyModal from "./AddVocabularyModal";
import CardList from "./CardList";
import { SubmitHandler } from "react-hook-form";

interface IFormInputs {
  vocab: string;
  translatedVocab: string;
}

type Props = {
  useCase: VocabularyUseCase;
};

function Main({ useCase }: Props) {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [langWords, setLangWords] = useState<Vocabulary[]>([]);
  const [imageUrl, setImageUrl] = useState<any>();

  useEffect(() => {
    fetchVocabularies();
  }, []);

  const fetchVocabularies = async () => {
    setLangWords(await useCase.fetchVocabularies());
  };

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  const addVocabulary: SubmitHandler<IFormInputs> = async (
    data: IFormInputs
  ) => {
    await useCase.addVocabulary({
      id: null,
      word: data.vocab,
      translatedWord: data.translatedVocab,
      image: imageUrl,
    });
    handleModal();
    fetchVocabularies();
  };

  const deleteVocabulary = async (id: number): Promise<void> => {
    await useCase.deleteVocabulary(id);
    fetchVocabularies();
  };

  return (
    <Wrapper>
      <ButtonWrapper>
        <Button variant="contained" onClick={handleModal}>
          Add Vocabulary
        </Button>
      </ButtonWrapper>
      {openModal && (
        <AddVocabularyModal
          addVocabulary={addVocabulary}
          handleModal={handleModal}
          imageUrl={imageUrl}
          setImageUrl={setImageUrl}
        />
      )}
      <CardListWrapper>
        <CardList
          langWords={langWords}
          deleteVocabulary={deleteVocabulary}
          useCase={useCase}
          fetchVocabularies={fetchVocabularies}
        />
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
  z-index: 1;
`;

const ButtonWrapper = styled.div`
  margin-bottom: 30px;
`;

const CardListWrapper = styled.div`
  margin-bottom: 30px;
`;
