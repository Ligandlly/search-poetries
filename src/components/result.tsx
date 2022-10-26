import React, { Component } from "react";
import fakePoetry from "../utils/fakePoetry";
import PoetryData from "../utils/poetry-data";
import ImgCard from "./img-card";
import PoetriesList from "./potries-list";
import MediaQuery from "react-responsive";

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
      <React.Fragment>
        <MediaQuery minWidth={1224}>
          <div style={{ position: "fixed", top: "25vh", left: "12vw" }}>
            <ImgCard
              imgURL={imgURL}
              poetries={fakePoetry}
              openID={openID}
              cardSize="30rem"
              imgHeight="23rem"
            />
          </div>

          <div style={{ float: "left", width: "50%", height: "1px" }}></div>
          <div style={{ float: "left" }}>
            <PoetriesList
              poetries={fakePoetry}
              openID={openID}
              onOpen={this.handleOpen}
              width="40vw"
              border
            />
          </div>

          <div style={{ clear: "both" }}></div>
        </MediaQuery>
        <MediaQuery maxWidth={1224}>
          <div>
            {/* <ImgCard
              imgURL={imgURL}
              poetries={fakePoetry}
              openID={openID}
              cardSize="100vw"
              imgHeight="65vw"
            /> */}
            <PoetriesList
              poetries={fakePoetry}
              openID={openID}
              onOpen={this.handleOpen}
              width="100vw"
            />
          </div>
        </MediaQuery>
      </React.Fragment>
    );
  }
}
