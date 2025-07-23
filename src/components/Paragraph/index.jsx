import styled from "styled-components";
import { theme } from "../../styles/Theme";

const Container = styled.p`
    color: ${theme.light.texts};
    font-weight: 400;
    padding-left: 30px;
    padding-right: 30px;
`

const Paragraph = ({ children }) => {

    const texto = children.toString();

    return (
        <Container>{texto}</Container>
    )
}

export default Paragraph