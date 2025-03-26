//import { useState } from 'react'
import { styled } from 'styled-components'

const screenWidth1 = '768px';

const color

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 400vh;
  
  background: linear-gradient(135deg, 
    rgba(1, 82, 73, 1),     
    rgba(87, 188, 144, 1),  
    rgba(119, 201, 212, 0.5)  
  );

  animation: moveBackground 10s linear infinite alternate; 

  @keyframes moveBackground {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-300vh);
    }
  }
`

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

const PainelProfileTop = styled.div``

const PainelProfileLeft = styled.div`
  background-color: white;
  height: 100%;
  width: 500px;
  margin: 0;
  padding: 0;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.25);
  z-index: 1;

  @media (max-width: ${screenWidth1}) { 
    display: none;
  }
`

const Main = styled.div`

  background-color: #fafafa;
  height: calc(100% - 20px);
  width: calc(100% - 500px);
  margin: 10px 0;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.25);

  @media (max-width: ${screenWidth1}) { 
    width: 100%;
  }
`

function App() {

  //const [count, setCount] = useState(0)

  return (
    <>
      <Background />
      <Container>
        <PainelProfileLeft>

        </PainelProfileLeft>
        <Main>

        </Main>
      </Container>
    </>
  )
}

export default App
