import styled from 'styled-components/native';
import { colors, constants, metrics } from '@styles';

export const MainContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  background-color: ${colors.white};
`;

export const LoaderContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${colors.white};
`;

export const CategoryText = styled.Text`
  font-size: 12;
  font-weight: 400;
  color: ${colors.black};
`;

export const CategoriesContainer = styled.View`
  display: flex;
  position: absolute;
  top: 12;
  right: 12;
`;

export const Loader = styled.ActivityIndicator``;
