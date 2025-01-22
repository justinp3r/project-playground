import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Card, CardActionArea, CardContent, CardMedia } from "@mui/material";

interface TileProps {
  headerText: string;
  description: string;
  imageUrl: string;
  height: number;
  width: number;
  onClick?: () => void;
}

export default function Tile({
  headerText,
  description,
  imageUrl,
  height = 128,
  width = 400,
  onClick,
}: TileProps) {
  return (
    <Card elevation={5} sx={{ height, width, display: "flex", borderRadius: 7 }}
    >
      {/* Linker Bereich: Header und Beschreibung */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height,
          width: width - height, // Dynamische Breite für den Textbereich
        }}
      >
        <CardActionArea
          sx={{ width: "100%", height: "100%" }}
          onClick={onClick}
        >
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography gutterBottom variant="h6" component="div">
              {headerText}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Box>

      {/* Rechter Bereich: Bild */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height,
          width: height, // Höhe und Breite des Bildbereichs gleich
        }}
      >
        <CardMedia
          component="img"
          image={imageUrl}
          alt={headerText}
          sx={{ width: "100%", height: "100%" }}
        />
      </Box>
    </Card>
  );
}
