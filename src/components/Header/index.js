import React from 'react';
import {Container, CurrentDate, Title, LeftView, RightView} from '~/components/Header/style';
import Filter from '~/components/Filter';

export default function Header() {


  return (
    <Container>
      <LeftView>
        <CurrentDate>Sábado, 23 de junho de 2019</CurrentDate>
        <Title>Links para ver hoje.</Title>
      </LeftView>

      <RightView>
        <Filter />
      </RightView>
    </Container>
  );
}
