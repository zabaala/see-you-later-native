import styled from 'styled-components/native';
import CardIconComponent from "~/components/CardIcon";
import { Animated } from 'react-native';

export const Container = styled.View`

`;

export const CardWrapper = styled(Animated.View)`
  margin: 20px;
  min-height: 300px;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.25);
  background: white;
  z-index: 5;
  
`;

export const CardCover = styled.Image.attrs({
  resizeMode: 'cover'
})`
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  height: 223px;
`;

export const CardIcon = styled(CardIconComponent)`
  margin: -45px auto 0 auto;
`;

export const CardBody = styled.View`
  padding: 20px;
`;

export const CardTitle = styled.Text`
  margin-top: 15px;
  font-size: 28px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: -1.5px;
`;

export const CardDescription = styled.Text`
  margin-top: 15px;
  font-size: 16px;
  font-weight: 300;
`;

export const ActionBar = styled.View`
  position: absolute;
  right: 30px;
  top: 200px;
  height: 190px;
  justify-content: space-around;
  z-index: 0;
`;
