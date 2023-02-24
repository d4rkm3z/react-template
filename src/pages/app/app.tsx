import React from 'react';
import { Box, Container, Typography } from '@mui/material';

import './user.css';

function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Material UI Create React App example in TypeScript
        </Typography>
      </Box>
    </Container>
  );
}

export default App;
