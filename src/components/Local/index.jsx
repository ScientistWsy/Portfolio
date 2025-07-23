import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: columns;
`

const Block = styled.div`

`

const Text = styled.span`

`

const Badge = styled.span`

`

const Local = () => {
    return (
        <Container>
            <Block>
                <Badge>Residence</Badge>
                <Text><Brazil></Brazil></Text>
            </Block>
            <hr />
            <Block>
                <Badge></Badge>
                <Text></Text>
            </Block>
            <hr />
            <Block>
                <Badge></Badge>
                <Text></Text>
            </Block>
        </Container>
    );
}

export default Local;