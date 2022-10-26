import { Button } from "@mui/material";
import React, { Component } from "react";
import fakePoetry from "../utils/fakePoetry";
import PoetryData from "../utils/poetry-data";

export interface SearchProps {
  onSearch: (imgURL: string, poetries: PoetryData[]) => void;
  example?: boolean;
}

export default class Search extends Component<SearchProps> {
  handleSearch = () => {
    const { example } = this.props;
    /// Some operations
    if (!!example) {
      const imgURL = "https://wallpaperset.com/w/full/0/d/f/458260.jpg";
      const poetries = fakePoetry;
      this.props.onSearch(imgURL, poetries);
    }
  };

  render() {
    const { example } = this.props;
    return (
      <Button
        className="mx-4"
        variant={example ? "outlined" : "contained"}
        component="label"
        onClick={!!example ? this.handleSearch : undefined}
      >
        {!!example ? "Example" : "Upload"}
        {!!example ? (
          <div></div>
        ) : (
          <input
            hidden
            accept="image/*"
            type="file"
            onChange={this.handleSearch}
          />
        )}
      </Button>
    );
  }
}
