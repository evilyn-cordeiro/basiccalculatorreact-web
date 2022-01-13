import React, { useState } from 'react';
import { Button, DisplayResult } from './components';

import * as Styled from './app-style';

export default function CalculatorBk() {
  const [result, setResult] = useState("");

  function handleClick(label) {
    /** swith funciona como if e else mas ao invés 
     * disso utiliza-se case(caso) e break(parar)*/
    switch (label) {
      case "C":
        setResult("");
        break;
      case "←":
        const newValue = result.slice(0, -1);
        setResult(newValue);
        break;
      case "=":
        const calc = eval(result);
        setResult(calc);
        break;
      /**  default que possibilita que vários 
       * dígitos sejam colocados no DisplayResult//)*/
      default:
        const newResult = result + label;
        setResult(newResult);
        break;
    }
  }

  return (
    <Styled.CalculatorBk>
      <Styled.DisplayResult>{result}</Styled.DisplayResult>
      <Styled.Row>
        <Styled.BTN label='←' onClick={() => handleClick('←')} />
        <Styled.BTN label='.' onClick={() => handleClick('.')} />
        <Styled.BTN label='C' onClick={() => handleClick('C')} />
        <Styled.BTN label='*' onClick={() => handleClick('*')} />
      </Styled.Row>
      <Styled.Row>
        <Styled.BTN label='7' onClick={() => handleClick('7')} />
        <Styled.BTN label='8' onClick={() => handleClick('8')} />
        <Styled.BTN label='9' onClick={() => handleClick('9')} />
        <Styled.BTN label='-' onClick={() => handleClick('-')} />
      </Styled.Row>
      <Styled.Row>
        <Styled.BTN label='4' onClick={() => handleClick('4')} />
        <Styled.BTN label='5' onClick={() => handleClick('5')} />
        <Styled.BTN label='6' onClick={() => handleClick('6')} />
        <Styled.BTN label='/' onClick={() => handleClick('/')} />
      </Styled.Row>
      <Styled.Row>
        <Styled.BTN label='1' onClick={() => handleClick('1')} />
        <Styled.BTN label='2' onClick={() => handleClick('2')} />
        <Styled.BTN label='3' onClick={() => handleClick('3')} />
        <Styled.BTN label='+' onClick={() => handleClick('+')} />
      </Styled.Row>
      <Styled.Row>
        <Styled.BTN label='0' onClick={() => handleClick('0')} />
        <Styled.BTNequal label='=' onClick={() => handleClick('=')} />
      </Styled.Row>

    </Styled.CalculatorBk>
  );
}