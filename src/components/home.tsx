import React from "react";
import { Typography } from "@mui/material";
import PoetryData from "../utils/poetry-data";
import Search from "./search";
import { grey } from "@mui/material/colors";

interface HomeProps {
  onSearch: (imgURL: string, poetries: PoetryData[]) => void;
}

export default function Home(props: HomeProps) {
  const { onSearch } = props;
  return (
    <div style={{ marginTop: "18vh" }}>
      <Typography variant="h1">Fancy Name</Typography>
      <Typography variant="body1" className="m-5" color={grey[600]}>
        This website can find a poem to accompany your photo.
      </Typography>
      <Search onSearch={onSearch} />
      <Search onSearch={onSearch} example />
    </div>
  );
}
