import React from 'react';
import { Container, Icon } from './style';

export default function CloseButton({ onPress }) {
    return (
        <Container onPress={onPress}>
          <Icon />
        </Container>
    );
}
