"use client"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        bgcolor: "background.paper",
        textAlign: "center",
      }}
    >
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} Sohrab Behdani. All rights reserved.
      </Typography>
    </Box>
  )
}

