import React, { useEffect, useState } from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import theme from './theme'

import CharacterList from './components/CharacterList'
import { fetchAllCharacters } from './api'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.color.primary};
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 16px;

    h1 {
      color: ${theme.color.secondary};
      font-weight: 100;
      text-align: center;
      margin: 1.5rem;
    }
  }
`
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    fetchAllCharacters(
      `https://swapi.dev/api/people`,
      setCharacters,
      err => console.error(err)
    )
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <h1 className="Header">SWAPI</h1>
        <CharacterList characters={characters} />
      </div>
    </ThemeProvider>
  );
}

export default App
