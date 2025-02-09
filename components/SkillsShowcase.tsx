"use client"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import { FaLinux, FaDocker, FaPython, FaCode, FaCuttlefish, FaTerminal, FaRust, FaJsSquare, FaMicrochip } from "react-icons/fa6" 
import { SiBsd, SiNextdotjs } from "react-icons/si"

const skills = [
  { category: "Linux", icon: FaLinux, description: "Deep expertise in Linux systems, administration, and tuning." },
  { category: "BSD", icon: SiBsd, description: "Experience with FreeBSD, OpenBSD, and related Unix-like systems." },
  { category: "C/C++", icon: FaCuttlefish, description: "Systems programming, performance optimization, and low-level development." },
  { category: "Python", icon: FaPython, description: "Scripting, automation, and backend development." },
  { category: "Bash/Zsh", icon: FaTerminal, description: "Proficient in shell scripting for automation and system management." },
  { category: "Docker", icon: FaDocker, description: "Containerization, orchestration, and deployment." },
  { category: "Rust", icon: FaRust, description: "Memory-safe systems programming and performance-critical applications." },
  { category: "Next.js", icon: SiNextdotjs, description: "Modern web development with React and server-side rendering." },
  { category: "Kernel Development", icon: FaMicrochip, description: "Understanding and contributing to Linux kernel internals." },
  { category: "Assembly", icon: FaCode, description: "Low-level programming and optimization." }
]

export default function SkillsShowcase() {
  return (
    <Box id="skills" sx={{ py: 8, px: 3, bgcolor: "background.default" }}>
      <Typography variant="h3" align="center" sx={{ mb: 6, fontWeight: "bold" }}>
        My Skills
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {skills.map((skill) => (
          <Grid item xs={6} sm={4} md={3} lg={2} key={skill.category} display="flex" justifyContent="center">
            <Card
              sx={{
                width: 140,
                height: 140,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                padding: 2,
                transition: "transform 0.2s, box-shadow 0.2s",
                borderRadius: "16px",
                boxShadow: 3,
                bgcolor: "background.paper",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: 6,
                },
              }}
            >
              <skill.icon size={48} style={{ marginBottom: "8px" }} />
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>{skill.category}</Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

