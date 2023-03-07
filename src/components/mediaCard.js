import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function MediaCard({
  title,
  description,
  card_action_url,
  view_page_url,
  width = 395,
  maxWidth = "90vw",
  margin = 1,
  data = null,
}) {
  const navigate = useNavigate();
  const cardClicked = () => {
    navigate(`/projects/${title}`, { state: data });
  };

  return (
    <Card
      sx={{
        width: width,
        margin: margin,
        maxWidth: maxWidth,
        border: "2px solid white",
        backgroundColor: "background.light",
      }}
      variant="outlined"
      raised={true}
    >
      <CardActionArea onClick={cardClicked}>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            color="primary.light"
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="secondary.main"
            sx={{ whiteSpace: "pre-line" }}
          >
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>
        {card_action_url && (
          <Button
            variant="outlined"
            size="small"
            color="warning"
            href={card_action_url}
            sx={{ bgcolor: "primary.main" }}
          >
            GitHub
          </Button>
        )}
        {view_page_url && (
          <Button
            variant="outlined"
            size="small"
            color="warning"
            href={view_page_url}
            sx={{ bgcolor: "primary.main" }}
          >
            View Page
          </Button>
        )}
        {data.awards && (
          <Button
            variant="outlined"
            size="small"
            color="warning"
            href={data.awards}
            sx={{ bgcolor: "primary.main" }}
          >
            View Awards
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
