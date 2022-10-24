import { List } from "@mui/material";
import React, { Component } from "react";
import Poetry from "./poetry";
import PoetryData from "./poetry-data";

export interface PotriesListProps {
  poetries: PoetryData[];
}

export default class PotriesList extends Component<PotriesListProps> {
  getPoetry = (poetryData: PoetryData) => {};

  render() {
    const { poetries } = this.props;
    return (
      <List
        sx={{
          border: 1,
          width: "30rem",
          borderRadius: 3,
          borderColor: "lightgray",
        }}
      >
        {poetries.map((v) => (
          <Poetry poetryData={v} />
        ))}
      </List>
    );
  }
}
