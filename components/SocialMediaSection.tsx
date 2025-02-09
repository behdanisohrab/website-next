"use client"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import { SvgIcon } from "@mui/material"
import { FaGithub, FaLinkedin, FaTwitter, FaDev, FaMastodon } from "react-icons/fa6"

const socialLinks = [
  { icon: FaGithub, url: "https://github.com/Behdanisohrab", label: "GitHub" },
  { icon: FaLinkedin, url: "https://linkedin.com/in/sohrabbehdani", label: "LinkedIn" },
  { icon: FaTwitter, url: "https://twitter.com/sbehdani", label: "Twitter" },
  { icon: FaDev, url: "https://dev.to/behdanisohrab", label: "Dev To" },
  { icon: FaMastodon, url: "https://mastodon.bsd.cafe/@sohrab", label: "Mastodon" },
]

export default function SocialMediaSection() {
  return (
    <Box
      id="connect"
      sx={{
        py: 8,
        px: 2,
        bgcolor: "background.paper",
      }}
    >
      <Typography variant="h2" align="center" sx={{ mb: 4 }}>
        Connect with Me
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 4,
        }}
      >
        {socialLinks.map((link, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              transition: "transform 0.2s",
              "&:hover": {
                transform: "translateY(-5px)",
              },
            }}
          >
            <IconButton
              color="primary"
              aria-label={link.label}
              component="a"
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                width: 80,
                height: 80,
                mb: 1,
                "&:hover": {
                  bgcolor: "action.hover",
                },
              }}
            >
              <link.icon size={40} />
            </IconButton>
            <Typography variant="body2" color="text.secondary">
              {link.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

