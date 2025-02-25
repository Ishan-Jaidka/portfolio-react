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
    <AppBar position="fixed" sx={{ background: "primary.main" }}>
      <Toolbar>
        <IconButton
          href="/"
          data-aos="zoom-in-right"
          size="large"
          edge="start"
          sx={{ mr: 2 }}
        >
          <img className="logo" src="/ishan-circle.png" alt="me" />
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              color: "warning.main",
              display: {
                xs: "none",
                md: "flex",
                "&:hover": { color: "white", fontWeight: "bold" },
              },
            }}
          >
            Ishan Jaidka
          </Typography>
        </IconButton>
        <Stack
          direction="row"
          spacing={2}
          marginLeft="auto"
          data-aos="zoom-in-left"
          divider={<Divider orientation="vertical" flexItem />}
        >
          <Button
            sx={{
              color: "warning.main",
              "&:hover": { color: "white", fontWeight: "bold" },
            }}
            href="/projects"
          >
            Projects
          </Button>
          <Button
            sx={{
              color: "warning.main",
              "&:hover": { color: "white", fontWeight: "bold" },
            }}
            href="/experience"
          >
            Experience
          </Button>
          <Button
            sx={{
              color: "warning.main",
              "&:hover": { color: "white", fontWeight: "bold" },
            }}
            href="/about"
          >
            About Me
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
