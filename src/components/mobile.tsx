import React from "react";
import { Button } from "@mui/material";
import { useParams } from "react-router-dom";
import PoetryData from "../utils/poetry-data";
import ImgCard from "./img-card";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";

interface Props {
  imgURL: string;
  poetries: PoetryData[];
}

export default function Mobile(props: Props) {
  const { id } = useParams();
  const { imgURL, poetries } = props;

  if (!!id) {
    const openID = parseInt(id);
    return (
      <div>
        <Button
          className="my-3"
          sx={{ float: "left" }}
          onClick={() => {
            window.location.replace("/search");
          }}
        >
          <ArrowBackIosNewRoundedIcon />
          Back
        </Button>
        <div style={{ clear: "both" }}></div>
        <ImgCard
          imgURL={imgURL}
          poetries={poetries}
          openID={openID}
          cardSize="min(90vw, 500px)"
          imgHeight="min(68vw, 378px)"
        />
      </div>
    );
  }

  return <div>Mobile</div>;
}
