import styled from 'styled-components/native';
import { colors } from '@styles';

export const MainContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${colors.white};
`;

export const MainText = styled.Text`
  font-size: 24;
  color: ${colors.black};
`;
