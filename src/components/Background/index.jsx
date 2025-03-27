import { styled } from 'styled-components'

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 400vh;
  margin: 0;
  padding: 0;
  
  background: linear-gradient(135deg, 
    rgba(1, 82, 73, 1),     
    rgba(87, 188, 144, 1),  
    rgba(119, 201, 212, 0.5)  
  );

  animation: moveBackground 6s linear infinite alternate; 

  @keyframes moveBackground {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-300vh);
    }
  }
`

export default Background