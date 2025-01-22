import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import HomeButton from './HomeButton';

export default function HeaderBar() {
  
  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" color='primary.light' elevation={0}>
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
          <HomeButton/>
          <Button color="inherit">Kontakt</Button>
          <Button color="inherit">Über</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}