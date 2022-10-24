import React, { Component } from "react";

interface SearchProps {
  handleClick: () => void;
}

export class FakeSearch extends Component<SearchProps> {
  render() {
    return <button onClick={this.props.handleClick}>FakeSearch</button>;
  }
}
export default class Search extends Component<SearchProps> {
  render() {
    return <div>Search</div>;
  }
}
