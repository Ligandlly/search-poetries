import { List } from "@mui/material";
import React, { Component } from "react";
import Poetry from "./poetry";
import PoetryData from "../utils/poetry-data";

export interface PotriesListProps {
  poetries: PoetryData[];
  openID: number;
  onOpen: (id: number) => void;
}

export default class PotriesList extends Component<PotriesListProps> {
  constructor(props: PotriesListProps) {
    super(props);
  }

  getPoetry = (poetryData: PoetryData) => {};

  handleOpen = (id: number) => this.props.onOpen(id);

  render() {
    const { poetries, openID } = this.props;
    return (
      <List
        className="m-5"
        sx={{
          border: 1,
          width: "40vw",
          borderRadius: 3,
          borderColor: "lightgray",
          background: "white",
        }}
      >
        {poetries.map((v, i) => (
          <Poetry
            poetryData={v}
            key={i}
            id={i}
            onOpen={this.handleOpen}
            open={i === openID}
          />
        ))}
      </List>
    );
  }
}
