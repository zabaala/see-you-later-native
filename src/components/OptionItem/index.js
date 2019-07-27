import React from 'react';
import { Container, OptionText } from './style';

export default function OptionItem({children}) {
    return (
        <Container>
          <OptionText>{children}</OptionText>
        </Container>
    );
}
