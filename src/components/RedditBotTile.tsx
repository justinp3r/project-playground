import Tile from "./Tile";
import { useNavigate } from "react-router-dom";

export function RedditBotTile() {
  const navigate = useNavigate();

  return (
    <Tile
      headerText="AmongUs Bot"
      description="A friendly Reddit Bot"
      imageUrl="/src/assets/reddit.png"
      height={128}
      width={256}
      onClick={() => navigate("/reddit-bot")} // Navigiere zur Route
    />
  );
}
