import React, { Component } from "react";
import fakePoetry from "../utils/fakePoetry";
import PoetryData from "../utils/poetry-data";
import ImgCard from "./img-card";
import PoetriesList from "./potries-list";

interface ResultProps {
  imgURL: string;
  poetries: PoetryData[];
}

interface ResultState {
  openID: number;
}

export default class Result extends Component<ResultProps, ResultState> {
  constructor(props: ResultProps) {
    super(props);
    this.state = { openID: -1 };
  }

  handleOpen = (id: number) => this.setState({ openID: id });

  render() {
    const { openID } = this.state;
    const { imgURL, poetries } = this.props;
    return (
      <div>
        <div style={{ position: "fixed", top: "25vh", left: "12vw" }}>
          <ImgCard imgURL={imgURL} poetries={fakePoetry} openID={openID} />
        </div>

        <div style={{ float: "left", width: "50%", height: "1px" }}></div>
        <div style={{ float: "left" }}>
          <PoetriesList
            poetries={fakePoetry}
            openID={openID}
            onOpen={this.handleOpen}
          />
        </div>

        <div style={{ clear: "both" }}></div>
      </div>
    );
  }
}
