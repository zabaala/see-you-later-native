import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8
})`
  padding: 15px 0;
  background: #1e90ff;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  
`;
