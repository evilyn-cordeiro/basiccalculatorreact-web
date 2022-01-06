import { Button } from './components';
import {ButtonBlack}  from './app-style';


export default function App() {
  return (
    <div>
 <p>Calculadora Básica Utilizando REACT</p>

      
      <Button
      label='C'
      />
      <Button
      label='<'/>
      <Button
      label='.'/>
      <Button
      label='*'/>
    </div>
  );
}

