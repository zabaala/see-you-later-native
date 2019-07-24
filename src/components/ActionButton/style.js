import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8
})`
  width: 50px;
  height: 50px;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.3);
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  padding-top: 4px;
`;
