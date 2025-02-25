import Box from "@mui/material/Box"
import dynamic from "next/dynamic"
import Header from "../components/Header"
import Footer from "../components/Footer"

const HeroSection = dynamic(() => import("../components/HeroSection"), { ssr: false })
const SkillsShowcase = dynamic(() => import("../components/SkillsShowcase"), { ssr: false })
const SocialMediaSection = dynamic(() => import("../components/SocialMediaSection"), { ssr: false })
const MastodonFeed = dynamic(() => import("../components/MastodonFeed"), { ssr: false })

export default function HomePage() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <HeroSection />
        <SkillsShowcase />
        <MastodonFeed />
        <SocialMediaSection />
      </Box>
      <Footer />
    </Box>
  )
}


