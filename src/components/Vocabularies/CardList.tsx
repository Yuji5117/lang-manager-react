import VocabularyCard from "components/Vocabularies/VocabularyCard";

import Grid from "@mui/material/Grid";

interface Vocabulary {
  id: number | null;
  word: string;
  translatedWord: string;
  image: string;
}

interface PrposType {
  langWords: Vocabulary[];
  deleteVocabulary: (id: number) => void;
  fetchVocabularies: () => void;
}

const CardList = (props: PrposType) => {
  return (
    <Grid container spacing={4}>
      {props.langWords.map((langWord) => (
        <Grid item key={langWord.id}>
          <VocabularyCard
            langWord={langWord}
            deleteVocabulary={props.deleteVocabulary}
            fetchVocabularies={props.fetchVocabularies}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default CardList;
