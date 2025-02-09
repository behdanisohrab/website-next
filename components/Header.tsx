"use client"

import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import Drawer from "@mui/material/Drawer"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"

const navItems = ["Home", "Skills", "Connect"]
const externalLinks = [
  { name: "Blog", url: "https://sohrabbehdani.ir/blog" },
  { name: "Blog Farsi", url: "https://blogfa.sohrabbehdani.ir" },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState)
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Sohrab Behdani
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <Button sx={{ textAlign: "center", width: "100%" }} href={`#${item.toLowerCase()}`}>
              {item}
            </Button>
          </ListItem>
        ))}
        {externalLinks.map((link) => (
          <ListItem key={link.name} disablePadding>
            <Button
              sx={{ textAlign: "center", width: "100%" }}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.name}
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <AppBar component="nav" position="sticky">
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
          Sohrab Behdani
        </Typography>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          {navItems.map((item) => (
            <Button key={item} sx={{ color: "#fff" }} href={`#${item.toLowerCase()}`}>
              {item}
            </Button>
          ))}
          {externalLinks.map((link) => (
            <Button key={link.name} sx={{ color: "#fff" }} href={link.url} target="_blank" rel="noopener noreferrer">
              {link.name}
            </Button>
          ))}
        </Box>
      </Toolbar>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  )
}

