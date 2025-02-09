"use client"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Avatar from "@mui/material/Avatar"
import { keyframes } from "@mui/system"

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`

export default function HeroSection() {
  return (
    <Box
      id="home"
      sx={{
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        py: 4,
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "linear-gradient(45deg, #3f51b5, #009688)",
          opacity: 0.1,
          zIndex: -1,
        },
      }}
    >
      <Avatar
        src="/sohrab.jpg"
        alt="Sohrab Behdani"
        sx={{
          width: 200,
          height: 200,
          mb: 4,
          border: "4px solid white",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        }}
      />
      <Typography
        variant="h1"
        sx={{
          fontWeight: "bold",
          background: "linear-gradient(45deg, #90caf9, #f48fb1)",
          backgroundClip: "text",
          textFillColor: "transparent",
          animation: `${gradientAnimation} 5s ease infinite`,
          mb: 2,
        }}
      >
        Sohrab Behdani
      </Typography>
      <Typography variant="h2" sx={{ mb: 2 }}>
        DevOps and System Admin
      </Typography>
      <Typography variant="body1" sx={{ maxWidth: "600px", mb: 4 }}>
        I Speak in Assembly!
      </Typography>
    </Box>
  )
}

