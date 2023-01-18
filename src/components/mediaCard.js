import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MediaCard({
  title,
  description,
  gh_url,
  website,
  width = 395,
  maxWidth = "90vw",
  margin = 1,
}) {
  const cardSelected = () => {
    window.location.href = gh_url;
  };
  return (
    <Button onClick={cardSelected}>
      <Card
        sx={{ width: width, margin: margin, maxWidth: maxWidth }}
        variant="outlined"
        raised={true}
      >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          {website && (
            <Typography variant="subtitle1" color="text.secondary">
              <a href={website}>View Page</a>
            </Typography>
          )}
        </CardContent>
      </Card>
    </Button>
  );
}
