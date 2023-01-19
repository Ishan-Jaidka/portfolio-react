import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";

export default function MediaCard({
  title,
  description,
  card_action_url,
  view_page_url,
  width = 395,
  maxWidth = "90vw",
  margin = 1,
}) {
  return (
    <Card
      sx={{ width: width, margin: margin, maxWidth: maxWidth }}
      variant="outlined"
      raised={true}
    >
      <CardActionArea href={`/projects/${title}`}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>
        <Button size="small" color="primary" href={card_action_url}>
          GitHub
        </Button>
        {view_page_url && (
          <Button size="small" color="primary" href={view_page_url}>
            View Page
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
