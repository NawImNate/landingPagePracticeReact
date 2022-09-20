import * as React from "react";
import "./Appbar.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: "#ffffff" }}>
        <Toolbar className="toolbar">
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography
            variant=""
            component="div"
            sx={{ flexGrow: 1 }}
            color="#7aa7ff"
          >
            AsavGram
          </Typography>
          <Button>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
