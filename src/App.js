import { Button } from './components';
import * as Styled from './app-style';

export default function App() {
  return (
    <Styled.CalculatorBk>
      <Styled.DisplayResult></Styled.DisplayResult>
      <Styled.Row>
      <Styled.Button label='C'/>
      <Styled.Button label='<' />
      <Styled.Button label='.' />
      <Styled.Button label='*' />
      </Styled.Row>
      <Button label='*' />
    </Styled.CalculatorBk>
  );
}