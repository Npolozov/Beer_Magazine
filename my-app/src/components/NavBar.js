"use client";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { useRouter } from "next/router";
import List from "@mui/material/List";
import { ListItem } from "@mui/material";
import { StyledLink } from "./NavBar.styled";
import style from "../styles/Home.module.css";
import Image from "next/image";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import { useState } from "react";

const navigation = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Cider", path: "/cider" },
  { id: 3, title: "Soft", path: "/soft" },
  { id: 4, title: "Wine", path: "/wine" },
];

const NavBar = (props) => {
  const { window } = props;
  const { pathname } = useRouter();

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box>
        <Image src="/logo.svg" width={50} height={50} alt="logo"></Image>
      </Box>
      <Divider />
      <List>
        {navigation.map(({ id, title, path }) => (
          <ListItem key={id}>
            <StyledLink href={path}>
              <>{title}</>
            </StyledLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <AppBar position="static">
          <Toolbar sx={{ background: "red" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
              <Image src="/logo.svg" width={50} height={50} alt="logo"></Image>
            </Box>
            <List sx={{ display: { xs: "none", sm: "flex" } }}>
              {navigation.map(({ id, title, path }) => (
                <ListItem key={id}>
                  <StyledLink
                    href={path}
                    className={pathname === path ? style.active : null}
                  >
                    {title}
                  </StyledLink>
                </ListItem>
              ))}
            </List>
          </Toolbar>
        </AppBar>
      </Box>
      <Box component="nav">
        <Drawer
          container={container}
          anchor="top"
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "100%",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};

export default NavBar;
