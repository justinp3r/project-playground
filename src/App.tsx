import { ThemeProvider } from "@emotion/react";
import HeaderBar from "./components/AppBar";
import { themeJustin } from "./theme";
import { Box } from "@mui/material";
import { ScreensaverTile } from "./components/ScreensaverTile";
import { RedditBotTile } from "./components/RedditBotTile";
import { TicTacToeTile } from "./components/TicTacToeTile";
import { PassGenTile } from "./components/PassGen";
import { Outlet, useLocation } from "react-router";

function App() {
  const location = useLocation();
  const isRootRoute = location.pathname === "/";

  return (
    <ThemeProvider theme={themeJustin}>
      <HeaderBar />
      <Outlet />
      {isRootRoute && ( // Nur auf der Root-Seite wird die Box mit den Cards gerendert
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
            },
          }}
        >
          <RedditBotTile />
          <TicTacToeTile />
          <PassGenTile />
          <ScreensaverTile />
        </Box>
      )}
    </ThemeProvider>
  );
}

export default App;
