import React from 'react';
import { Container, Icon } from '~/components/CardIcon/style';

export default function CardIcon({ uri, style }) {
    return (
        <Container style={style}>
            <Icon source={{uri: uri}} />
        </Container>
    );
}
