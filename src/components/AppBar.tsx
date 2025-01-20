import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Tile from './Tile';

export default function HeaderBar() {
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="secondary"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Justins Projects
          </Typography>
          <Button color="inherit">See whats next</Button>
        </Toolbar>
      </AppBar>
      <Tile text="Reddit Bot" height={128} width={512}></Tile>
      <Tile text="TicTacToe" height={128} width={128}></Tile>
    </Box>
  );
}