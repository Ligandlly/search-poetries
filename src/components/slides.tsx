import React, { Component } from "react";
import Reveal from "reveal.js";
import PoetryData from "../utils/poetry-data";
import ImgCard from "./img-card";

interface SlidesProps {
  imgURL: string;
  poetries: PoetryData[];
}

export default class Slides extends Component<SlidesProps> {
  componentDidMount(): void {
    let reveal = new Reveal({ embedded: true });
    reveal.initialize();
  }
  render() {
    const { imgURL, poetries } = this.props;
    return (
      <React.Fragment>
        <div style={{ height: "80vh", width: "100vw" }}>
          <div className="reveal">
            <div className="slides">
              {poetries.map((v, i) => (
                <section data-transition="slide">
                  <ImgCard
                    imgURL={imgURL}
                    poetries={poetries}
                    openID={i}
                    cardSize="100vw"
                    imgHeight="62vw"
                  />
                </section>
              ))}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
