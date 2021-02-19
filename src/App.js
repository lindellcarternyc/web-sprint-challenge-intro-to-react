import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import theme from './theme'

import MOCK_DATA from './mock-data'

import Character from './components/Character'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.color.primary}
  }
`
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <h1 className="Header">SWAPI</h1>
        <div>
          {MOCK_DATA.map(char => {
            return <Character character={char}/>
          })}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App
