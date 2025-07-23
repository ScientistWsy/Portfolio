//import styled from "styled-components";
import styled from "styled-components";
import Header from "../Header";
import Paragraph from "../Paragraph";
import Local from "../Local";

const Container = styled.div`
    display: flex;
`


const AboutMe = () => {
    return (
        <>
            <Header>About Me</Header>
             <Container>
                <Paragraph>
                        I'm a software developer with experience building web and hybrid applications using technologies like .NET, Node.js, React, and TypeScript. I have a strong foundation in software architecture (MVP, MVVM, Clean Architecture) and follow best practices such as SOLID and GitFlow. Currently, I work on fleet and logistics management systems, focusing on performance, scalability, and clean code.
                        
                        My background in electronics and embedded systems gives me a broader perspective on technology and how software interacts with hardware. I'm currently pursuing a postgraduate degree in Full Stack Development and I'm always looking to grow technically while contributing to efficient and well-structured solutions.
                </Paragraph>  
                <Local />
            </Container> 
        </>
    );
}

export default AboutMe;