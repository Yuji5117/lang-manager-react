import React from "react";
import styled from "styled-components";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface langWord {
  id: number | null;
  word: string;
  translatedWord: string;
  image?: string;
}

interface PropsType {
  langWord: langWord;
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
        {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
      </Card>
    </Wrapper>
  );
};

export default VocabularyCard;

const Wrapper = styled.div`
  cursor: pointer;
`;
