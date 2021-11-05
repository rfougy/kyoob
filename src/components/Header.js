import * as React from "react";
import { AppBar, Box, Toolbar, Typography, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const MenuAppBar = (props) => {
  const { changeMode, mode } = props;
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
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, color: "text.primary" }}
          >
            kyo͞ob
          </Typography>
          <IconButton onClick={changeMode}>
            {mode ? (
              <Brightness7Icon sx={{ color: "text.primary" }} />
            ) : (
              <Brightness4Icon sx={{ color: "text.primary" }} />
            )}
          </IconButton>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
            href="https://github.com/rfougy/kyoob"
          >
            <GitHubIcon sx={{ color: "text.primary" }} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default MenuAppBar;
