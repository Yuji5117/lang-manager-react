import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Main from "components/Vocabularies/Main";
import Header from "components/Vocabularies/Header";
import Tweet from "components/Tweet/Tweet";
import TweetList from "components/Tweet/TweetList";
import Table from "components/VocabularyTable/Table";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div>
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
    </div>
  );
}

export default App;
