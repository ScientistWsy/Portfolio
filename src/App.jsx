//import { useState } from 'react'
import { styled, ThemeProvider } from 'styled-components'
import PainelProfileLeft from './components/PainelProfileLeft'
import PainelProfileTop from './components/PainelProfileTop';
import Background from './components/Background';
import Main from './components/Main';
import GlobalStyles from './styles/globals';
import SidePanel from './components/SidePanel';

const Container = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 40px);
  width: calc(100vw - 40px);
  margin: 20px;
  padding: 0;
`

function App() {
  return (
    <>
      <GlobalStyles />
      <Background />
      <Container>
        <PainelProfileLeft>
          <SidePanel/>
        </PainelProfileLeft>
        <Main>
          <PainelProfileTop>
          </PainelProfileTop>
        </Main>
      </Container>
    </>
  )
}

export default App
