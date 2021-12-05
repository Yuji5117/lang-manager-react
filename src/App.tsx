import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Main from "./context/presenter/components/Main";
import Header from "./context/presenter/components/ Header";
import Tweet from "./context/presenter/components/Tweet/Tweet";
import TweetList from "./context/presenter/components/Tweet/TweetList";

import VocabularyRepositoryImpl from "./context/repository/vocabularyRepository";
import VocabularyDriverImpl from "./context/driver/vocabularyDriver";
import VocabularyUseCaseImpl from "./context/useCase/vocabularyUseCase";

const repository = new VocabularyRepositoryImpl(new VocabularyDriverImpl());
const useCase = new VocabularyUseCaseImpl(repository);

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div>
          <Route path="/vocabulary">
            <Main useCase={useCase} />
          </Route>
          <Route path="/tweet" component={Tweet} />
          <Route path="/tweet-list" component={TweetList} />
        </div>
      </Router>
    </div>
  );
}

export default App;
