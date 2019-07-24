import React from 'react';
import { Container, CurrentDate, Title } from '~/components/Header/style';


export default function Header() {
    return (
        <Container>
            <CurrentDate>Sábado, 23 de junho de 2019</CurrentDate>
            <Title>Links para ver hoje.</Title>
        </Container>
    );
}
