import React from "react";
import styled from "styled-components";
import VocabularyCard from "context/presenter/components/VocabularyCard";

import Grid from "@mui/material/Grid";

interface LangWord {
  id: number | null;
  word: string;
  translatedWord: string;
  image?: string;
}

interface PrposType {
  langWords: LangWord[];
  deleteVocabulary: (id: number | null) => void;
}

const CardList = (props: PrposType) => {
  return (
    <Grid container spacing={4}>
      {props.langWords.map((langWord) => (
        <Grid item key={langWord.id}>
          <VocabularyCard
            langWord={langWord}
            deleteVocabulary={props.deleteVocabulary}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default CardList;
