"use client"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Button from "@mui/material/Button"
import Chip from "@mui/material/Chip"

const projects = [
  {
    title: "Project 1",
    description: "Short description of project 1 (max 2 lines)",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["React", "Node.js", "MongoDB"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Project 2",
    description: "Short description of project 2 (max 2 lines)",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Vue.js", "Express", "PostgreSQL"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Project 3",
    description: "Short description of project 3 (max 2 lines)",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Angular", "Django", "MySQL"],
    demoUrl: "#",
    githubUrl: "#",
  },
]

export default function ProjectsSection() {
  return (
    <Box id="projects" sx={{ py: 8, px: 2 }}>
      <Typography variant="h2" align="center" sx={{ mb: 4 }}>
        Projects
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.title}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.2s",
                "&:hover": {
                  transform: "translateY(-5px)",
                },
              }}
            >
              <CardMedia component="img" height="200" image={project.image} alt={project.title} />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="div">
                  {project.title}
                </Typography>
                <Box sx={{ mb: 2 }}>
                  {project.tags.map((tag) => (
                    <Chip key={tag} label={tag} size="small" sx={{ mr: 0.5, mb: 0.5 }} />
                  ))}
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {project.description}
                </Typography>
                <Box sx={{ mt: "auto" }}>
                  <Button size="small" href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </Button>
                  <Button size="small" href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

