import React from 'react';
import { Button, Typography, Container,Box } from '@material-ui/core';
import Table from "./Table";

function App() {
  return (
    <Container maxWidth="md">
      <Typography variant="h3" gutterBottom>
        MyApp
      </Typography>
      <Button color="secondary" variant="outlined">HELLO WORLD</Button>
      <Box m={3}>
        <Table/>
      </Box>
    </Container>
  )
}

export default App;
