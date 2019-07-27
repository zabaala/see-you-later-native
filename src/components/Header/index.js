import React, { useState } from 'react';
import {Container, CurrentDate, Title, LeftView, RightView, FilterIcon} from '~/components/Header/style';
import { Modal, TouchableOpacity, View, Text } from 'react-native';
import { BlurView, VibrancyView } from "@react-native-community/blur";
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
