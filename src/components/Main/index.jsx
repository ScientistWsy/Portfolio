import styled, { ThemeContext } from "styled-components"
import { size } from "../../styles/Theme"
import { theme } from "../../styles/Theme"

const Main = styled.div`

    background-color: ${theme.light.text};
    height: calc(100% - 20px);
    width: calc(100% - 500px);
    margin: 10px -8px 10px 0;
    overflow: auto;
    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.25);

    @media (max-width: ${size.tablet}) { 
        width: 100%;
    }
`

export default Main