import React, { Component } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Skeleton,
} from "@mui/material";
import PoetryData from "../utils/poetry-data";

interface ImgCardProps {
  imgURL: string;
  poetries: PoetryData[];
  openID: number;
  cardSize: string;
  imgHeight: string;
}

export default class ImgCard extends Component<ImgCardProps> {
  constructor(props: ImgCardProps) {
    super(props);
    const { cardSize } = this.props;
    this.state = { cardSize };
  }

  render() {
    const { imgURL, poetries, openID, imgHeight, cardSize } = this.props;

    let highlight: string[] | undefined;
    if (!!poetries && openID !== -1) {
      const { poetry, start, length } = poetries[openID];
      highlight = poetry.split("\n").slice(start, start + length);
    }

    return (
      <Card
        sx={{
          height: cardSize,
          width: cardSize,
          borderRadius: 3,
          margin: "auto",
        }}
      >
        <CardMedia
          component="img"
          image={
            imgURL.length
              ? imgURL
              : "https://cdn1.photostockeditor.com/c/1901/nature-landscape-photography-of-tree-on-rock-formation-surrounded-by-body-of-water-near-mountain-during-sunset-outdoors-outdoors-image.jpg"
          }
          sx={{ height: imgHeight }}
        />
        <CardContent sx={{ height: "4rem" }}>
          {!!highlight ? (
            highlight
              .map((v) => <Typography variant="body1">{v}</Typography>)
              .slice(0, 2)
          ) : (
            <>
              <Skeleton variant="text" animation={false}></Skeleton>
              <Skeleton variant="text" animation={false} width="62%"></Skeleton>
            </>
          )}
        </CardContent>
        <CardActions>
          <Button variant="text" sx={{ marginLeft: "auto" }}>
            Change Photo
          </Button>
        </CardActions>
      </Card>
    );
  }
}
