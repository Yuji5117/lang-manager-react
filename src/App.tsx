import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Main from "components/Vocabularies/Main";
import Header from "components/Vocabularies/Header";
import Tweet from "components/Tweet/Tweet";
import TweetList from "components/Tweet/TweetList";
import Table from "components/VocabularyTable/Table";
import SideMenu from "components/Vocabularies/SideMenu";
import styled from "styled-components";

function App() {
  const [filterValue, setFilterValue] = useState<string>("");

  const onFilterChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(e.target.value);
    setFilterValue(e.target.value);
  };

  return (
    <Wrapper>
      <Router>
        <SideMenu />
        <MainContainer>
          <Header filterValue={filterValue} onFilterChange={onFilterChange} />
          <Route path="/vocabulary">
            <Main filterValue={filterValue} />
          </Route>
          <Route path="/table">
            <Table />
          </Route>
          <Route path="/tweet" component={Tweet} />
          <Route path="/tweet-list" component={TweetList} />
        </MainContainer>
      </Router>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
`;

const MainContainer = styled.div`
  width: 100%;
`;
