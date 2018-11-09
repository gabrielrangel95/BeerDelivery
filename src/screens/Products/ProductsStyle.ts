import styled from 'styled-components/native';
import { colors } from '@styles';

export const MainContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${colors.white};
  padding: 24px 12px;
`;

export const Title = styled.Text`
  font-size: 32;
  font-weight: 700;
  color: ${colors.black};
`;
