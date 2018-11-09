import styled from 'styled-components/native';
import { colors, constants } from '@styles';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${colors.darkTransparent};
`;

export const DataContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${constants.CATEGORIES_MODAL_WIDTH};
  height: ${constants.CATEGORIES_MODAL_HEIGHT};
  background-color: ${colors.white};
  border-radius: 12;
`;

export const Title = styled.Text`
  font-size: 16;
  font-weight: bold;
  color: ${colors.black};
`;

export const ButtonsContainer = styled.View`
  display: flex;
  flex-direction: row;
  width: ${constants.CATEGORIES_MODAL_WIDTH};
  align-items: center;
  justify-content: space-around;
  margin-top: 24px;
`;
