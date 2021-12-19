import VocabularyCard from "context/presenter/components/Vocabularies/VocabularyCard";
import { Vocabulary } from "context/domain/vocabulary";
import { VocabularyUseCase } from "context/interface/usecase/vocabularyUseCase";

import Grid from "@mui/material/Grid";

interface PrposType {
  langWords: Vocabulary[];
  deleteVocabulary: (id: number) => void;
  useCase: VocabularyUseCase;
}

const CardList = (props: PrposType) => {
  return (
    <Grid container spacing={4}>
      {props.langWords.map((langWord) => (
        <Grid item key={langWord.id}>
          <VocabularyCard
            langWord={langWord}
            deleteVocabulary={props.deleteVocabulary}
            useCase={props.useCase}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default CardList;
