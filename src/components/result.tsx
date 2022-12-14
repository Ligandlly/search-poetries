import React, { Component } from "react";
import fakePoetry from "../utils/fakePoetry";
import PoetryData from "../utils/poetry-data";
import ImgCard from "./img-card";
import PoetriesList from "./potries-list";
import MediaQuery from "react-responsive";
// import Slides from "./slides";

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

  handleMobileOpen = (id: number) => {
    window.location.replace(`search/mobile/${id}`);
  };

  render() {
    const { openID } = this.state;
    const { imgURL } = this.props;

    return (
      <React.Fragment>
        <MediaQuery minWidth={1325}>
          <div style={{ position: "fixed", top: "25vh", left: "12vw" }}>
            <ImgCard
              imgURL={imgURL}
              poetries={fakePoetry}
              openID={openID}
              cardSize="480px"
              imgHeight="368px  "
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
        <MediaQuery maxWidth={1325}>
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
              onOpen={this.handleMobileOpen}
              width="100vw"
              mobile
            />
            {/* <Slides poetries={fakePoetry} imgURL={imgURL} /> */}
          </div>
        </MediaQuery>
      </React.Fragment>
    );
  }
}
