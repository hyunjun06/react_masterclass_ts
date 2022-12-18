import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
    background-color: ${(props) => props.theme.bgColor};
`
const H1 = styled.h1`
    color: ${(props) => props.theme.textColor};
`

function Circle() {
    return (
        <Container>
            <H1>Circle</H1>
        </Container>
    ); 
}

export default Circle;