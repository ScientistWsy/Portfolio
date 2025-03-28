import { styled } from 'styled-components'
import { theme } from '../../styles/Theme'

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 400vh;
  margin: 0;
  padding: 0;
  
  background: ${theme.light.background};
`

export default Background