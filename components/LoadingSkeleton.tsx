import Box from "@mui/material/Box"
import Skeleton from "@mui/material/Skeleton"

export default function LoadingSkeleton() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Skeleton variant="circular" width={150} height={150} sx={{ mb: 4 }} />
      <Skeleton variant="text" width={300} height={60} sx={{ mb: 2 }} />
      <Skeleton variant="text" width={250} height={40} sx={{ mb: 4 }} />
      <Skeleton variant="rectangular" width={200} height={50} />
    </Box>
  )
}

