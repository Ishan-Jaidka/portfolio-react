import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MediaCard({
  title,
  description,
  url,
  width = 395,
  margin = 1,
}) {
  const cardSelected = () => {
    window.location.href = url;
  };
  return (
    <Button onClick={cardSelected}>
      <Card sx={{ width: width, margin: margin }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Button>
  );
}
