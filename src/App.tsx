import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Main from "components/Vocabularies/Main";
import Header from "components/Vocabularies/Header";
import Tweet from "components/Tweet/Tweet";
import TweetList from "components/Tweet/TweetList";
import Table from "components/VocabularyTable/Table";
import SideMenu from "components/Vocabularies/SideMenu";
import styled from "styled-components";

function App() {
  return (
    <Wrapper>
      <Router>
        <SideMenu />
        <div>
          <Header />
          <Route path="/vocabulary">
            <Main />
          </Route>
          <Route path="/table">
            <Table />
          </Route>
          <Route path="/tweet" component={Tweet} />
          <Route path="/tweet-list" component={TweetList} />
        </div>
      </Router>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
`;
