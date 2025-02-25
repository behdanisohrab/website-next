"use client"

import * as React from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"
import IconButton from "@mui/material/IconButton"
import Avatar from "@mui/material/Avatar"
import Link from "@mui/material/Link"
import { SvgIcon } from "@mui/material"
import { FaRetweet, FaStar, FaReply } from "react-icons/fa"
import { format, parseISO } from "date-fns"
import Parser from "rss-parser"

interface MastodonPost {
  title: string
  link: string
  content: string
  isoDate: string
}

const parser = new Parser()

export default function MastodonFeed() {
  const [posts, setPosts] = React.useState<MastodonPost[]>([])

  React.useEffect(() => {
    async function fetchMastodonFeed() {
      try {
        const feed = await parser.parseURL("https://mastodon.bsd.cafe/@sohrab.rss")
        setPosts((feed.items as MastodonPost[]).slice(0, 3))
      } catch (error) {
        console.error("Error fetching Mastodon feed:", error)
      }
    }

    fetchMastodonFeed()
  }, [])

  return (
    <Box id="mastodon-feed" sx={{ py: 8, px: 2 }}>
      <Typography variant="h2" align="center" sx={{ mb: 4 }}>
        My Latest Toots
      </Typography>
      <Box sx={{ maxWidth: 600, mx: "auto" }}>
        {posts.map((post, index) => (
          <Card key={index} sx={{ mb: 2 }}>
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Avatar src="/sohrab.jpg" alt="Sohrab Behdani" sx={{ mr: 2 }} />
                <Box>
                  <Typography variant="subtitle1">Sohrab Behdani</Typography>
                  <Typography variant="caption" color="text.secondary">
                    {format(parseISO(post.isoDate), "MMM d, yyyy")}
                  </Typography>
                </Box>
              </Box>
              <Typography variant="body1" dangerouslySetInnerHTML={{ __html: post.content }} />
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="reply">
                <SvgIcon component={FaReply} />
              </IconButton>
              <IconButton aria-label="boost">
                <SvgIcon component={FaRetweet} />
              </IconButton>
              <IconButton aria-label="favorite">
                <SvgIcon component={FaStar} />
              </IconButton>
              <Box sx={{ flexGrow: 1 }} />
              <Link href={post.link} target="_blank" rel="noopener noreferrer" underline="none">
                <Typography variant="caption" color="text.secondary">
                  View on Mastodon
                </Typography>
              </Link>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
  )
}


