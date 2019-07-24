import React from 'react';
import { Text } from 'react-native';
import { Container, Title } from './style';

export default function CardButton({style, children}) {
  return (
    <Container style={style}>
      <Title>{children}</Title>
    </Container>
  );
}
