import { Box, Divider, List, ListItem, Drawer } from "@mui/material";
import Image from "next/image";
import { hot } from "react-hot-loader";
import { StyledLink } from "../MobileMenu/Drawer.styled";
import { navigation } from "../../helper/Navigation";

const DrawerConteiner = ({ window, onClick, mobileOpen }) => {
  const onClose = () => {
    onClick();
  };

  const drawer = (
    <Box onClick={onClose} sx={{ textAlign: "center" }}>
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
    <Drawer
      container={container}
      anchor="top"
      variant="temporary"
      open={mobileOpen}
      onClose={onClose}
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
  );
};

export default DrawerConteiner;
