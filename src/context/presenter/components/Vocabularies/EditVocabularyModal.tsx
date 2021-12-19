import React from "react";
import styled from "styled-components";

import { useForm, Controller } from "react-hook-form";

import { TextField, Button } from "@mui/material";
import { Vocabulary } from "context/domain/vocabulary";

interface IFormInputs {
  vocab: string;
  translatedVocab: string;
}

interface PropsType {
  editVocabulary(id: number | null, data: IFormInputs): void;
  vocabulary: Vocabulary;
  handleModal(): void;
}

function EditVocabularyModal(props: PropsType) {
  const { handleSubmit, control } = useForm<IFormInputs>();
  return (
    <ModalWrapper onClick={props.handleModal}>
      <Modal onClick={(event) => event.stopPropagation()}>
        <Form>
          <Controller
            name="vocab"
            control={control}
            defaultValue={props.vocabulary.word}
            render={({ field }) => (
              <TextField
                id="standard-basic"
                label="Vocab"
                variant="standard"
                {...field}
                margin="normal"
              />
            )}
          />
          <Controller
            name="translatedVocab"
            defaultValue={props.vocabulary.translatedWord}
            control={control}
            render={({ field }) => (
              <TextField
                id="standard-basic"
                label="Your Lang"
                variant="standard"
                {...field}
                margin="normal"
              />
            )}
          />
          <ImageInput type="file" />
          <ButtonWrapper>
            <Button variant="outlined" onClick={props.handleModal}>
              cancel
            </Button>
            <Button
              variant="contained"
              onClick={handleSubmit((fields) =>
                props.editVocabulary(props.vocabulary.id, fields)
              )}
            >
              Update
            </Button>
          </ButtonWrapper>
        </Form>
      </Modal>
    </ModalWrapper>
  );
}

export default EditVocabularyModal;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
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
