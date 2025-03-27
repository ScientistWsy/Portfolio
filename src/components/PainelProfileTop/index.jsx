import styled from "styled-components"
import { size } from "../../styles/Theme"

const PainelProfileTop = styled.div`
    display: none;

  @media (max-width: ${size.tablet}) { 
    display: flex;
    height: 2000px;
    width: 100%;
    background-color: #528152;
  }  
`

export default PainelProfileTop