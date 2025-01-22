import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from "react-router";
import { RedditBotPage } from './pages/RedditBotPage.tsx';
import { ScreensaverPage } from './pages/ScreensaverPage.tsx';

const root = document.getElementById("root");

createRoot(root!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
        {/* App als übergeordnete Route */}
        <Route path="/" element={<App />}>
          {/* Subroutes, die im Outlet von App gerendert werden */}
          <Route index element={null /* Home-Inhalt kann hier hinzugefügt werden */} />
          <Route path="reddit-bot" element={<RedditBotPage/>} />
          <Route path="screensaver" element={<ScreensaverPage/>} />
        </Route>
      </Routes>
  </BrowserRouter>
  </StrictMode>,
)
