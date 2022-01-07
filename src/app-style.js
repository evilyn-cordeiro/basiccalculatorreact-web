import styled from "styled-components";
import { Button as Btn } from "./components";

export const CalculatorBk = styled.div`

    height: 500px;
    width: 300px;
    background-color: #002e38;
    background-color: #002e38a2;
    box-shadow: 5px 10px 30px #021c22a2;
    border-radius: 5px;
    padding: 15px;
`

export const Button = styled(Btn)`
    heigth:50px;
    width:50px;
`
export const Row = styled.div`
    display:flex;
    flex-grow:1;
`

export const DisplayResult = styled.div`
    height: 100px;
    width: 300px;  
    background-color:white;
`