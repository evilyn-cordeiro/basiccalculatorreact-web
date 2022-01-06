import { Button } from './components';
import { CalculatorBk } from './app-style';


export default function App() {
  return (
    <CalculatorBk>
      <Button label='C' />
      <Button label='<' />
      <Button label='.' />
      <Button label='*' />
    </CalculatorBk>
  );
}