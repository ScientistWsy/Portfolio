import { styled } from 'styled-components'
import { size } from '../../styles/Theme' 
import { theme } from '../../styles/Theme'

const PainelProfileLeft = styled.div`
  background-color: ${theme.light.panel.background};
  height: 100%;
  width: 500px;
  margin: 0;
  padding: 0;
  box-shadow: ${theme.light.panel.shadow};
  z-index: 1;

  @media (max-width: ${size.tablet}) { 
    display: none;
  }
`

export default PainelProfileLeft