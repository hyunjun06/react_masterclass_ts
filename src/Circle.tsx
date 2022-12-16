import styled from "styled-components";
import { useState } from "react";

interface ContainerProps {
    bgColor: string;
    borderColor: string;
}

const Container = styled.div<ContainerProps>`
    width: 100px;
    height: 100px;
    background-color: ${(props) => props.bgColor};
    border: 10px solid ${(props) => props.borderColor};
`;

interface CircleProps {
    bgColor: string;
    borderColor?: string;
}

function Circle({ bgColor, borderColor }: CircleProps) {
    const [counter, setCounter] = useState<number | string>(0);
    
    return (
        <Container bgColor={bgColor} borderColor={borderColor ?? bgColor} />
    ); 
}

export default Circle;