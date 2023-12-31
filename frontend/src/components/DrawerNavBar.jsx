import React from "react";
import { useState } from "react";
import { Box, Drawer, List, ListItem, ListItemIcon, } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import MapIcon from "@mui/icons-material/Map";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

import { auth, db } from "../config/firebase";
import { onAuthStateChanged } from "firebase/auth";


export default function Drawerbar({ status, toggle }) {

  if(auth.currentUser) { 
    return (
      <Box sx={{ width: "100%" }}>
        <Drawer
          open={status}
          onClose={() => toggle(false)}
          sx={{
            "& .MuiDrawer-paper": {
              width: 60,
              boxSizing: "border-box",
              backgroundColor: "#2b2d42",
              color: "white",
            },
          }}
        >
          <List>
            <a href="/">
              <ListItem>
                <ListItemIcon>
                  <HomeIcon sx={{ color: "white" }} />
                </ListItemIcon>
              </ListItem>
            </a>
            <a href="/profile">
              <ListItem>
                <ListItemIcon>
                  <BookmarkBorderIcon sx={{ color: "white" }} />
                </ListItemIcon>
              </ListItem>
            </a>
            <a href="/map">
              <ListItem>
                <ListItemIcon>
                  <MapIcon sx={{ color: "white" }} />
                </ListItemIcon>
              </ListItem>
            </a>
          </List>
        </Drawer>
      </Box>
    ); 
  }
  else {
    return(
      <Box sx={{ width: "100%" }}>
      <Drawer
        open={status}
        onClose={() => toggle(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: 60,
            boxSizing: "border-box",
            backgroundColor: "#2b2d42",
            color: "white",
          },
        }}
      >
        <List>
          <a href="/">
            <ListItem>
              <ListItemIcon>
                <HomeIcon sx={{ color: "white" }} />
              </ListItemIcon>
            </ListItem>
          </a>
          <a href="/map">
            <ListItem>
              <ListItemIcon>
                <MapIcon sx={{ color: "white" }} />
              </ListItemIcon>
            </ListItem>
          </a>
        </List>
      </Drawer>
    </Box>
    )
  }
}
