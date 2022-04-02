import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import { SubmitHandler } from "react-hook-form";
import styled from "styled-components";
import AddVocabularyModal from "./AddVocabularyModal";
import CardList from "./CardList";
import axios from "axios";

interface IFormInputs {
  vocab: string;
  translatedVocab: string;
}

interface Vocabulary {
  id: number | null;
  word: string;
  translatedWord: string;
  image: string;
}

interface PropsType {
  filterValue: string;
}

function Main({ filterValue }: PropsType) {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [langWords, setLangWords] = useState<Vocabulary[]>([]);
  const [imageUrl, setImageUrl] = useState<any>();

  useEffect(() => {
    fetchVocabularies();
  }, []);

  const fetchVocabularies = async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_API_ENDPOINT}/vocabularies`
    );
    setLangWords(res.data);
  };

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  const addVocabulary: SubmitHandler<IFormInputs> = async (
    data: IFormInputs
  ) => {
    await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/vocabularies`, {
      id: null,
      word: data.vocab,
      translatedWord: data.translatedVocab,
      image: "test.jpg",
    });
    handleModal();
    fetchVocabularies();
  };

  const deleteVocabulary = async (id: number): Promise<void> => {
    await axios.delete(
      `${process.env.REACT_APP_API_ENDPOINT}/vocabularies/${id}`
    );
    fetchVocabularies();
  };

  return (
    <Wrapper>
      <Container>
        <MainArea>
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
              fetchVocabularies={fetchVocabularies}
              filterValue={filterValue}
            />
          </CardListWrapper>
        </MainArea>
      </Container>
    </Wrapper>
  );
}

export default Main;

const Wrapper = styled.div`
  height: 100%;
  width: 90%;
  margin: 0 auto;
  padding-top: 30px;
  z-index: 1;
`;

const Container = styled.div`
  display: flex;
`;

const MainArea = styled.div``;

const FormArea = styled.div``;

const ButtonWrapper = styled.div`
  margin-bottom: 30px;
`;

const CardListWrapper = styled.div`
  margin-bottom: 30px;
`;
