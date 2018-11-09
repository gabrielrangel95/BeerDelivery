import styled from 'styled-components/native';
import { colors, constants } from '@styles';

export const MainContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  background-color: ${colors.white};
  padding-left: 12px;
  padding-right: 12px;
`;

export const LoaderContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${colors.white};
`;

export const Title = styled.Text`
  font-size: 32;
  font-weight: 700;
  color: ${colors.black};
`;

export const CategoriesContainer = styled.View`
  display: flex;
  height: ${constants.CATEGORIES_CONTAINER_HEIGHT};
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  background-color: ${colors.lighter};
`;

export const Loader = styled.ActivityIndicator``;
