import { Button } from "@mui/material";
import React, { Component } from "react";
import fakePoetry from "../utils/fakePoetry";
import PoetryData from "../utils/poetry-data";

export interface SearchProps {
  onSearch: (imgURL: string, poetries: PoetryData[]) => void;
  example?: boolean;
}

export default class Search extends Component<SearchProps> {
  constructor(props: SearchProps) {
    super(props);
  }

  handleSearch = () => {
    /// Some operations
    const imgURL = "https://wallpaperset.com/w/full/0/d/f/458260.jpg";
    const poetries = fakePoetry;
    this.props.onSearch(imgURL, poetries);
  };

  render() {
    const { example } = this.props;
    return (
      <Button
        className="mx-4"
        variant={example ? "outlined" : "contained"}
        component="label"
      >
        {!!example ? "Example" : "Upload"}
        <input
          hidden
          accept="image/*"
          type="file"
          onChange={this.handleSearch}
        />
      </Button>
    );
  }
}
