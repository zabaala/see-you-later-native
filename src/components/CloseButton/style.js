import styled from 'styled-components';
import EvilIcons from 'react-native-vector-icons/EvilIcons';


export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 1
})`
  margin: 0 auto;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background: #000;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled(EvilIcons).attrs({
  name: 'close',
  size: 36,
  color: '#fff'
})`
  margin-top: 5px;
`;
