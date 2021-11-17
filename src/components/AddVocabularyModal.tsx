import React from "react";
import styled from "styled-components";

import { TextField, Button } from "@mui/material";

interface LangWord {
  id: number | null;
  word: string;
  translatedWord: string;
  image?: string;
}

interface PropsType {
  addVocablary(): void;
  onChengeHandle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleModal(): void;
}

function AddVocabularyModal(props: PropsType) {
  return (
    <ModalWrapper onClick={props.handleModal}>
      <Modal onClick={(event) => event.stopPropagation()}>
        <Form
          action="
          "
        >
          <TextField
            id="standard-basic"
            label="Lang"
            variant="standard"
            onChange={props.onChengeHandle}
            name="lang"
            margin="normal"
          />
          <TextField
            id="standard-basic"
            label="Your Lang"
            variant="standard"
            onChange={props.onChengeHandle}
            name="translatedLang"
            margin="normal"
          />
          <ImageInput type="file" />
          <ButtonWrapper>
            <Button variant="outlined" onClick={props.handleModal}>
              cancel
            </Button>
            <Button variant="contained" onClick={props.addVocablary}>
              Add
            </Button>
          </ButtonWrapper>
        </Form>
      </Modal>
    </ModalWrapper>
  );
}

export default AddVocabularyModal;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Modal = styled.div`
  position: fixed;
  inset: 0;
  margin: auto;
  width: 50%;
  height: 80%;
  background-color: white;
  border-radius: 10px;
  z-index: 2;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Form = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: right;
`;

const ImageInput = styled.input`
  margin: 40px 0;
`;
