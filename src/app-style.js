import styled from "styled-components";
import { Button } from "./components";

export const CalculatorBk = styled.div`
    height: 350px;
    width: 230px;
    background-color: #002e38;
    background-color: #002e38a2;
    box-shadow: 5px 10px 30px #021c22a2;
    border-radius: 5px;
    padding: 15px;
`

export const BTN = styled(Button)`
    height: 50px;
    width: 50px;
    border: none;
    margin: 5px;
    font-size: 25px;
    background-color:#7ADEF5;
    border-radius: 5px;
    color:#004B5C;
    cursor:pointer;
    box-shadow: 5px 0px 30px #002e38a2;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const BTNequal = styled(Button)`
    height: 50px;
    width: 105px;
    border: none;
    margin: 5px;
    font-size: 25px;
    background-color:#7ADEF5;
    border-radius: 5px;
    color:#004B5C;
    cursor:pointer;
    box-shadow: 5px 0px 30px #002e38a2;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const BTNadd = styled(Button)`
    height: 105px;
    width: 50px;
    border: none;
    margin: 5px;
    font-size: 25px;
    background-color:#7ADEF5;
    border-radius: 5px;
    color:#004B5C;
    cursor:pointer;
    box-shadow: 5px 0px 30px #002e38a2;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Row = styled.div`
    display:flex;
    flex-grow:1;    
`

export const DisplayResult = styled.div`
    background-color: white;
    width: 210px;
    height: 30px;
    margin: 5px;
    border-radius: 5px;
    font-size: 25px;
    color: black;
    text-align: right;
    padding: 5px;
    overflow: hidden;
`