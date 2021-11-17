import React from "react";
import styled from "styled-components";

import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import DeleteIcon from "@mui/icons-material/Delete";

interface langWord {
  id: number | null;
  word: string;
  translatedWord: string;
  image?: string;
}

interface PropsType {
  langWord: langWord;
  deleteVocablary(id: number | null): void;
}

const VocabularyCard: React.FC<PropsType> = (props) => {
  return (
    <Wrapper>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={`${process.env.PUBLIC_URL}/${props.langWord.image}`}
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.langWord.word}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.langWord.translatedWord}
          </Typography>
        </CardContent>
        <IconButton
          name="delete"
          aria-label="delete"
          onClick={() => props.deleteVocablary(props.langWord.id)}
        >
          <DeleteIcon />
        </IconButton>
      </Card>
    </Wrapper>
  );
};

export default VocabularyCard;

const Wrapper = styled.div`
  cursor: pointer;
`;
