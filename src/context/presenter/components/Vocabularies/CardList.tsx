import React from "react";
import VocabularyCard from "context/presenter/components/Vocabularies/VocabularyCard";
import { Vocabulary } from "context/domain/vocabulary";

import Grid from "@mui/material/Grid";

interface PrposType {
  langWords: Vocabulary[];
  deleteVocabulary: (id: number) => void;
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
