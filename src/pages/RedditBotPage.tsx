import React from "react";
import { Box, Container, CssBaseline } from "@mui/material";

export function RedditBotPage() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }}>
          <label>Das ist der Reddit Bot</label>
        </Box>
      </Container>
    </React.Fragment>
  );
}
