import Tile from "./Tile";
import { useNavigate } from "react-router-dom";

export function ScreensaverTile() {
  const navigate = useNavigate();
  
  return (
    <Tile
      headerText="Screen Saver"
      description="A DotNet Tool"
      imageUrl="/src/assets/screensaver.jpg"
      height={128}
      width={256}
      onClick={() => navigate("/screensaver")} // Navigiere zur Route
    />
  );
}
