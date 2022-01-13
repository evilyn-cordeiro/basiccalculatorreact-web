import React from "react";
import { Container } from './style';

export default function Button({
  label,
  
  ...props
}) {
  console.log('fora')
  return (
    <Container {...props}>
      {label}
    </Container>

  )
};