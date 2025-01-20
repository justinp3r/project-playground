import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

interface TileProps {
    text: string;
    width: number;
    height: number;
  }
  

export default function Tile( { text, height, width }: TileProps ){
    return (
        <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: width,
          height: height,
        },
      }}
    >
      <Paper 
        elevation={3} 
        sx={{ 
          backgroundColor: 'primary',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        //   padding: 5
        }}
      >
        <Typography>
          {text}
        </Typography>
      </Paper>
    </Box>
      );
}