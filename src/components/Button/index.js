import React from "react";
import { Container } from './style'

export default function Button({
  label,
  
  ...props
}) {
  console.log('zxcvbn', props);
  return (
    <Container {...props}>
      {label}
    </Container>

  )
};