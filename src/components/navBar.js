import {
  AppBar,
  Button,
  Divider,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import "./navBar.css";

export default function NavBar() {
  return (
    <AppBar position="fixed" sx={{ background: "teal" }}>
      <Toolbar>
        <IconButton href="/" size="large" edge="start" sx={{ mr: 2 }}>
          <img className="logo" src="/ishan-circle.png" alt="me" />
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              color: "white",
              display: { xs: "none", md: "flex" },
            }}
          >
            Ishan Jaidka
          </Typography>
        </IconButton>
        <Stack
          direction="row"
          spacing={2}
          marginLeft="auto"
          divider={<Divider orientation="vertical" flexItem />}
        >
          <Button sx={{ color: "white" }} href="/projects">
            Projects
          </Button>
          <Button sx={{ color: "white" }} href="/experience">
            Experience
          </Button>
          <Button sx={{ color: "white" }} href="/about">
            About Me
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
