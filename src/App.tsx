import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Poetry from "./components/poetry";
import fakePoetry from "./utils/fakePoetry";
import PotriesList from "./components/potries-list";
import Search from "./components/search";
import PoetryData from "./utils/poetry-data";
import { createTheme, useMediaQuery } from "@mui/material";
import Nav from "./components/nav";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import Home from "./components/home";
import Result from "./components/result";
import Mobile from "./components/mobile";
interface AppState {
  imgURL: string;
  poetries: PoetryData[];
}

class App extends Component<{}, AppState> {
  handleClick = () => {
    this.setState({ poetries: fakePoetry });
  };

  constructor(props: {}) {
    super(props);
    this.state = {
      imgURL: "",
      poetries: fakePoetry,
    };
  }

  handleSearch = (imgURL: string, poetries: PoetryData[]) => {
    this.setState({ imgURL, poetries });
    window.location.replace("/search");
  };

  render() {
    const { poetries, imgURL } = this.state;
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
        <Nav />
        <BrowserRouter>
          <Routes>
            <Route index element={<Home onSearch={this.handleSearch} />} />
            <Route
              path="search"
              element={<Result imgURL={imgURL} poetries={poetries} />}
            />
            <Route
              path="search/mobile/:id"
              element={<Mobile imgURL={imgURL} poetries={poetries} />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
