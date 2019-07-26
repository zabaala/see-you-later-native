import React, { useState } from 'react';
import { ScrollView, View, Text } from "react-native";

import Header from '~/components/Header';
import Card from "~/components/Card";
import { Container } from '~/components/Card/style';
const cardData = {
  coverUri: 'https://s2.glbimg.com/n09_BnQ3Hz8DbWKZZ_UbwkJQ7MQ=/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2017/B/i/Uh2Lg3QjaOJOLPJhsASQ/facebook.png',
  iconUri: 'https://static.netshoes.com.br/0.0.382.3/netshoesbr/images/favicon.ico',
  title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  dateString: '20 de julho de 2019 às 22:00',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor ducimus eveniet fugit incidunt ipsum quae ratione, sequi suscipit tempora veritatis.'
};

export default class Main extends React.Component {
  scrollRef = React.createRef();
  cardRef = React.createRef();

  state = {
    panGestureEnabled: false
  };

  onScroll = event => {
    const { contentOffset, translationX, translationY } = event.nativeEvent;

    // console.log('Main', event.nativeEvent, event);

    // setPanGestureEnabled();
  };



  render() {
    return (
      <React.Fragment>
        <Header />

        <ScrollView
          ref={this.scrollRef}
          waitFor={this.cardRef}


          onScrollEndDrag={(e) => {
            this.setState({
              panGestureEnabled: true
            })
          }}
          scrollEventThrottle={40}
        >
          <Card id={1} _ref={this.cardRef} panEnabled={this.state.panGestureEnabled} {...cardData} />
          <Card id={2} _ref={this.cardRef} panEnabled={this.state.panGestureEnabled} {...cardData} />
          <Card id={3} _ref={this.cardRef} panEnabled={this.state.panGestureEnabled} {...cardData} />
        </ScrollView>
      </React.Fragment>
    );
  }
};
