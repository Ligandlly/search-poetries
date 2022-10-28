import { List } from "@mui/material";
import React, { Component } from "react";
import Poetry from "./poetry";
import PoetryData from "../utils/poetry-data";

export interface PotriesListProps {
  poetries: PoetryData[];
  openID: number;
  onOpen: (id: number) => void;
  width: string;
  border?: boolean;
  mobile?: boolean;
}

export default class PotriesList extends Component<PotriesListProps> {
  // getPoetry = (poetryData: PoetryData) => {};

  handleOpen = (id: number) => this.props.onOpen(id);

  render() {
    const { poetries, openID, width, border, mobile } = this.props;
    return (
      <List
        className={!!border ? "mt-5" : ""}
        sx={{
          border: 1,
          width,
          borderRadius: 3,
          borderColor: !!border ? "lightgray" : "transparent",
          background: "white",
        }}
      >
        {poetries.map((v, i) => (
          <Poetry
            poetryData={v}
            key={i}
            id={i}
            onOpen={this.handleOpen}
            open={!!mobile ? false : i === openID}
            mobile={mobile}
          />
        ))}
      </List>
    );
  }
}
