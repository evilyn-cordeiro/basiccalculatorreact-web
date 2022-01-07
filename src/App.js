import { Button } from './components';
import * as Styled from './app-style';

export default function App() {



  return (
    <Styled.CalculatorBk>
      <Styled.DisplayResult></Styled.DisplayResult>
      <Styled.Row>
        <Styled.Button label='C' />
        <Styled.Button label='<' />
        <Styled.Button label='.' />
        <Styled.Button label='*' />
      </Styled.Row>
      <Styled.Row>
        <Styled.Button label='7' />
        <Styled.Button label='8' />
        <Styled.Button label='9' />
        <Styled.Button label='-' />
      </Styled.Row>
      <Styled.Row>
        <Styled.Button label='4' />
        <Styled.Button label='5' />
        <Styled.Button label='6' />
        <Styled.Button label='/' />
      </Styled.Row>
      <Styled.Row>
        <Styled.Button label='1' />
        <Styled.Button label='2' />
        <Styled.Button label='3' />
        <Styled.Button label='+' />
      </Styled.Row>
      <Styled.Row>
        <Styled.Button label='0' />
        <Styled.Button label='=' />
      </Styled.Row>

    </Styled.CalculatorBk>
  );
}