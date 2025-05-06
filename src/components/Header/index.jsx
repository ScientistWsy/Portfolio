import styled, { ThemeContext } from "styled-components"
import { size } from "../../styles/Theme"
import { theme } from "../../styles/Theme"

const Navbar = styled.div`
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: start;
    padding-left: 30px;

    /* @media (max-width: ${size.tablet}) { 
        width: 100%;
    } */
`

const FirstLetter = styled.h2`
    color: ${theme.light.primary};
    font-weight: 500;
    font-size: 1.7em;
`

const OthersLetter = styled.h2`
    color: ${theme.light.text.primary};
    font-weight: 450;
    font-size: 1.7em;
`

const Header = ({ children }) => {

    const tittle = children.toString(); 
    const first = tittle.charAt(0);
    const others = tittle.slice(1);

    console.log(tittle, first, others)

    return (
        <Navbar>
            <FirstLetter>{first}</FirstLetter>
            <OthersLetter>{others}</OthersLetter>
        </Navbar>
    );
}


export default Header