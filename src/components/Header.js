import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function MenuAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{
          background: "transparent",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            kyo͞ob
          </Typography>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
            href="https://github.com/rfougy/kyoob"
          >
            <GitHubIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}