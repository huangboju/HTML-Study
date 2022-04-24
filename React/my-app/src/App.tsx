import React from 'react';
import './App.css';

import { MantineProvider, Button, Text } from '@mantine/core';

function App() {
  return (
    <MantineProvider theme={{ colorScheme: 'dark' }}>
      <Text component="a" href="https://mantine.dev">
        My link text
      </Text>
      <Button m={20} color="violet" size='xl'>
        "hello world"
      </Button>
    </MantineProvider>
  );
}

export default App;
