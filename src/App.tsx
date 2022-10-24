import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Poetry from "./components/poetry";
import fakePoetry from "./fakePoetry";
import PotriesList from "./components/potries-list";
import { FakeSearch } from "./components/search";
import PoetryData from "./components/poetry-data";

interface AppState {
  poetries?: PoetryData[];
}

class App extends Component<{}, AppState> {
  handleClick = () => {
    this.setState({ poetries: fakePoetry });
  };

  constructor(props: {}) {
    super(props);
    this.state = {};
  }

  render() {
    const { poetries } = this.state;
    return (
      <div className="App">
        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
        <FakeSearch handleClick={this.handleClick}></FakeSearch>
        {!!poetries ? (
          <PotriesList poetries={poetries} />
        ) : (
          <p>Nothing to display.</p>
        )}
      </div>
    );
  }
}

export default App;
