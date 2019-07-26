import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CardSeeAt from '~/components/CardSeeAt';
import {
  ActionBar,
  Container,
  CardWrapper,
  CardCover,
  CardIcon,
  CardBody,
  CardTitle,
  CardDescription
} from '~/components/Card/style';
import CardButton from "~/components//CardButton";
import ActionButton from "../ActionButton";
import { Animated, PanResponder } from 'react-native';

const propTypes = {
  coverUri: PropTypes.string.isRequired,
  iconUri: PropTypes.string.isRequired,
  dateString: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

const defaultProps = {
  panEnabled: false
};

function Card({ coverUri, iconUri, dateString, title, description }) {
  let offsetX = 0;
  let opened = false;
  const translateX = new Animated.Value(0);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: (evt, gestureState) => true,

    onPanResponderMove: (e, gestureState) => {
      const { dx } = gestureState;

      offsetX += dx;
      translateX.setValue(offsetX);
      translateX.setOffset(0);
    },

    onPanResponderEnd: (e, gestureState) => {
      const { dx } =  gestureState;

      opened = dx <= -10;

      Animated.timing(translateX, {
        toValue: opened ? -95 : 0,
        duration: 100,
        useNativeDriver: true
      }).start(() => {
        offsetX = opened ? -95 : 0;
        translateX.setOffset(offsetX);
        translateX.setValue(0);
      });
    }
  });

  return (
    <Container>
      <CardWrapper {...panResponder.panHandlers} style={{
        transform: [{
          translateX: translateX.interpolate({
            inputRange: [-90, 0, 500],
            outputRange: [-90, 0, 20],
            extrapolate: 'clamp'
          })
        }]
      }}>
        <CardCover source={{ uri: coverUri }} />
        <CardIcon uri={iconUri} />

        <CardBody>
          <CardSeeAt date={dateString} />
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardBody>

        <CardButton>acessar agora</CardButton>
      </CardWrapper>

      <ActionBar>
        <ActionButton icon='edit' />
        <ActionButton icon='love' />
        <ActionButton icon='trash' />
      </ActionBar>
    </Container>
  );
}

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;
