import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
  CardActions,
  Button,
} from "@mui/material";
import PoetryData from "../utils/poetry-data";

interface ImgCardProps {
  imgURL: string;
  poetries: PoetryData[];
  openID: number;
}

export default function ImgCard(props: ImgCardProps) {
  const { imgURL, poetries, openID } = props;
  let highlight: string[] = [];
  if (openID >= 0) {
    const { poetry, start, length } = poetries[openID];
    highlight = poetry.split("\n").slice(start, start + length);
  }

  return (
    <Card sx={{ height: "30rem", width: "30rem", borderRadius: 3 }}>
      <CardMedia
        component="img"
        image={
          "https://cdn1.photostockeditor.com/c/1901/nature-landscape-photography-of-tree-on-rock-formation-surrounded-by-body-of-water-near-mountain-during-sunset-outdoors-outdoors-image.jpg"
        }
        sx={{ height: "23rem" }}
      />
      <CardContent sx={{ height: "4rem" }}>
        {highlight.map((v) => (
          <Typography variant="body1">{v}</Typography>
        ))}
      </CardContent>
      <CardActions>
        <Button variant="text" sx={{ marginLeft: "auto" }}>
          Change Photo
        </Button>
      </CardActions>
    </Card>
  );
}
