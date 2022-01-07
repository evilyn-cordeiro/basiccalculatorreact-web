import React from "react";
import { Container } from './style'

export default function Button({
  label,
  
  ...props
}) {
  return (
    <Container {...props}>
      {label}
    </Container>

  )
};