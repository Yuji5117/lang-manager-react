import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Main from "./components/Main";
import Header from "./components/ Header";
import Tweet from "./components/Tweet/Tweet";
import TweetList from "./components/Tweet/TweetList";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div>
          <Route path="/vocablary" component={Main} />
          <Route path="/tweet" component={Tweet} />
          <Route path="/tweet-list" component={TweetList} />
        </div>
      </Router>
    </div>
  );
}

export default App;
