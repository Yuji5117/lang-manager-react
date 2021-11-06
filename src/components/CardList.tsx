import React from "react";
import styled from "styled-components";
import VocabularyCard from "./VocabularyCard";

import Grid from "@mui/material/Grid";

interface langWord {
  id: number;
  word: string;
  translatedWord: string;
  image?: string;
}

interface PrposType {
  langWords: langWord[];
}

const CardList = (props: PrposType) => {
  return (
    <Grid container spacing={4}>
      {props.langWords.map((langWord) => (
        <Grid item>
          <VocabularyCard key={langWord.id} langWord={langWord} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CardList;
