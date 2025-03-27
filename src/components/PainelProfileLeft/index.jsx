import { styled } from 'styled-components'
import { size } from '../../styles/Theme' 

const PainelProfileLeft = styled.div`
  background-color: white;
  height: 100%;
  width: 500px;
  margin: 0;
  padding: 0;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.25);
  z-index: 1;

  @media (max-width: ${size.tablet}) { 
    display: none;
  }
`

export default PainelProfileLeft