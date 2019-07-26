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
import { PanGestureHandler, State } from "react-native-gesture-handler";
import { Animated } from 'react-native';

const propTypes = {
  coverUri: PropTypes.string.isRequired,
  iconUri: PropTypes.string.isRequired,
  dateString: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  panEnabled: PropTypes.bool.isRequired,
  _ref: PropTypes.object
};

const defaultProps = {
  panEnabled: false
};

function Card({ coverUri, iconUri, dateString, title, description, panEnabled, _ref }) {

  let offsetX = 0;
  const translateX = new Animated.Value(0);
  const translateY = new Animated.Value(0);
  const onGestureEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationX: translateX,
          translationY: translateY,
        }
      }
    ],
    {
      useNativeDriver: true
    }
  );

  function onHandlerStateChanged(event) {
    let opened = false;
    const { translationX, translationY } = event.nativeEvent;

    offsetX += translationX;

    if (Math.abs(translationX) > Math.abs(translationY)) {
      panEnabled = false;
    }

    if (event.nativeEvent.oldState === State.ACTIVE) {
      if (translationX <= -10) {
        opened = true;
      } else {
        translateX.setValue(offsetX);
        translateX.setOffset(0);
        offsetX = 0;
      }

      Animated.timing(translateX, {
        toValue: opened ? -95 : 0,
        duration: 50,
        useNativeDriver: true
      }).start(() => {
        offsetX = opened ? -95 : 0;
        translateX.setOffset(offsetX);
        translateX.setValue(0);
      });
    }
  }

  return (
    <Container>
      <PanGestureHandler
        ref={_ref}
        enabled={true}
        onGestureEvent={onGestureEvent}
        onHandlerStateChange={onHandlerStateChanged}
        >
        <CardWrapper style={{
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
      </PanGestureHandler>

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
