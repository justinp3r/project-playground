import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function HomeButton() {
  const navigate = useNavigate();
  return (
    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
      <Button
        color="inherit"
        onClick={() => navigate("/")} // Navigiert zur Homepage
      >
        Justins Projects
      </Button>
    </Typography>
  );
}
