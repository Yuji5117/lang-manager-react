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
  AddVocablary(): void;
  onChengeHandle: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function AddVocabularyModal(props: PropsType) {
  return (
    <ModalWrapper>
      <Modal>
        <form
          action="
          "
        >
          <TextField
            id="standard-basic"
            label="Lang"
            variant="standard"
            onChange={props.onChengeHandle}
            name="lang"
          />
          <TextField
            id="standard-basic"
            label="Your Lang"
            variant="standard"
            onChange={props.onChengeHandle}
            name="translatedLang"
          />
          <input type="file" />
          <Button variant="contained" onClick={props.AddVocablary}>
            Add
          </Button>
        </form>
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

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
