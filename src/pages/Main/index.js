import React from 'react';
import { ScrollView } from "react-native";

import Header from '~/components/Header';
import Card from "~/components/Card";
const cardData = {
  coverUri: 'https://s2.glbimg.com/n09_BnQ3Hz8DbWKZZ_UbwkJQ7MQ=/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2017/B/i/Uh2Lg3QjaOJOLPJhsASQ/facebook.png',
  iconUri: 'https://static.netshoes.com.br/0.0.382.3/netshoesbr/images/favicon.ico',
  title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  dateString: '20 de julho de 2019 às 22:00',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor ducimus eveniet fugit incidunt ipsum quae ratione, sequi suscipit tempora veritatis.'
};

export default function Main () {
    return (
      <React.Fragment>
        <Header />

        <ScrollView
          scrollEventThrottle={40}
        >
          <Card {...cardData} />
          <Card {...cardData} />
          <Card {...cardData} />
        </ScrollView>
      </React.Fragment>
    );
};
