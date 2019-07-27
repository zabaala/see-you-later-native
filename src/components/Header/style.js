import styled from 'styled-components';


export const Container = styled.View`
    margin-top: 40px;
    padding: 20px;
    display: flex;
    flex-direction: row;
`;

export const CurrentDate = styled.Text`
    font-size: 13px;
    color: #999;
`;

export const Title = styled.Text`
    font-weight: 600;
    font-size: 36px;
    letter-spacing: -1px;
`;

export const LeftView = styled.View`
  flex: 7;
`;

export const RightView = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  
`;
