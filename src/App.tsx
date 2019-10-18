import React, { Component } from "react";
import "./App.css";

import { fetchArticles } from "./queries";
import Articles from "./Articles";

interface AppState {
  articles: Article[];
  hasErrorOccurred: boolean;
}

class App extends Component<{}, AppState> {
  state = {
    articles: [],
    hasErrorOccurred: false
  };

  async componentDidMount() {
    try {
      const articles = await fetchArticles();
      this.setState({ articles });
    } catch (e) {
      this.setState({ hasErrorOccurred: true });
    }
  }

  render() {
    return this.state.hasErrorOccurred ? (
      <p>An error has occurred</p>
    ) : (
      <Articles articles={this.state.articles} />
    );
  }
}

export default App;
