import { styled } from 'styled-components'
import { size } from '../../styles/Theme' 
import { theme } from '../../styles/Theme'

const themeMode = 'light';
const setTheme = themeMode == 'dark' ? theme.dark : theme.light;

const PainelProfileLeft = styled.div`
  background-color: ${setTheme.panel.background};
  height: 100%;
  width: 500px;
  margin: 0;
  padding: 0;
  box-shadow: ${setTheme.panel.shadow};
  z-index: 1;

  @media (max-width: ${size.tablet}) { 
    display: none;
  }
`

export default PainelProfileLeft