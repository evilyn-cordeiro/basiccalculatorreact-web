import React, { useState } from 'react';
import { Button, DisplayResult } from './components';
import * as Styled from './app-style';

export default function CalculatorBk() {
  const DisplayResult = document.getElementById("DisplayResult");
  const Button = Array.from(document.getElementsByClassName("Button"));
  const [result, setResult] = useState("");

  function handleClick(label) {
    switch (label) { // swith funciona como if e else mas ao invés disso utiliza-se case(caso) e break(parar)
      case "C":
        setResult("");
        break;
      case "←": 
        break;
      case "=":
        const newValue = result;
        break;
      default: //concatenando os valores
        const newValue = result + label;
        setResult(newValue);
    }
  }

  return (
    <Styled.CalculatorBk>
      <Styled.DisplayResult>{result}</Styled.DisplayResult>
      <Styled.Row>
        <Styled.Button label='C' onClick={() => handleClick('C')} />
        <Styled.Button label='←' onClick={() => handleClick('←')} />
        <Styled.Button label='.' onClick={() => handleClick('.')} />
        <Styled.Button label='*' onClick={() => handleClick('*')} />
      </Styled.Row>
      <Styled.Row>
        <Styled.Button label='7' onClick={() => handleClick('7')} />
        <Styled.Button label='8' onClick={() => handleClick('8')} />
        <Styled.Button label='9' onClick={() => handleClick('9')} />
        <Styled.Button label='-' onClick={() => handleClick('-')} />
      </Styled.Row>
      <Styled.Row>
        <Styled.Button label='4' onClick={() => handleClick('4')} />
        <Styled.Button label='5' onClick={() => handleClick('5')} />
        <Styled.Button label='6' onClick={() => handleClick('6')} />
        <Styled.Button label='/' onClick={() => handleClick('/')} />
      </Styled.Row>
      <Styled.Row>
        <Styled.Button label='1' onClick={() => handleClick('1')} />
        <Styled.Button label='2' onClick={() => handleClick('2')} />
        <Styled.Button label='3' onClick={() => handleClick('3')} />
        <Styled.Button label='+' onClick={() => handleClick('+')} />
      </Styled.Row>
      <Styled.Row>
        <Styled.Button label='0' onClick={() => handleClick('0')} />
        <Styled.Button label='=' onClick={() => handleClick('=')} />
      </Styled.Row>

    </Styled.CalculatorBk>
  );
}