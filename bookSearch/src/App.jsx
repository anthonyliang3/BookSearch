import { useState } from 'react'
import Books from './components/Books';
import Wishlist from './components/Wishlist';
import { MainContainer, Container } from './StyledComponents';

function App() {
  return (
    <Container>
      <Books />
    </Container>
  )
}

export default App
