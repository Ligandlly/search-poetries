import React, { Component } from "react";
import {
  Avatar,
  Collapse,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import PoetryData from "../utils/poetry-data";

export interface PoetryProps {
  poetryData: PoetryData;
  style?: any;
  className?: string;
  divider?: boolean;
  id: number;
  onOpen: (id: number) => void;
  open: boolean;
}

interface PoetryState {
  splitedPoetry: string[];
}

export default class Poetry extends Component<PoetryProps, PoetryState> {
  constructor(props: PoetryProps) {
    super(props);
    this.state = {
      splitedPoetry: this.splitPoetry(),
    };
  }

  splitPoetry = () => {
    const { poetry } = this.props.poetryData;
    return poetry.split("\n");
  };

  getHighlight = () => {
    const { start, length } = this.props.poetryData;
    const { splitedPoetry } = this.state;

    return splitedPoetry.slice(start, start + length);
  };

  handleClick = () => {
    const { id, onOpen } = this.props;
    onOpen(id);
  };

  completePoetry = () => {
    const { splitedPoetry } = this.state;
    const { start, length } = this.props.poetryData;
    return splitedPoetry.map((v, index) => {
      if (index >= start && index < start + length) {
        return <Typography variant="body1">{v}</Typography>;
      } else {
        return (
          <Typography variant="body1" sx={{ color: "lightgray" }}>
            {v}
          </Typography>
        );
      }
    });
  };

  render() {
    const { title, author } = this.props.poetryData;
    const { divider, id, open } = this.props;

    const highLight = this.getHighlight().map((v) => (
      <Typography variant="body1">{v}</Typography>
    ));

    return (
      <React.Fragment>
        <ListItemButton
          onClick={this.handleClick}
          divider={divider}
          alignItems="flex-start"
        >
          <Avatar sx={{ margin: "0.5rem 1rem 0 0" }}>{id + 1}</Avatar>
          <ListItemText
            primary={highLight}
            secondary={`《${title}》 ` + author}
          />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open}>{this.completePoetry()}</Collapse>
      </React.Fragment>
    );
  }
}
