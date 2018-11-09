import styled from 'styled-components/native';
import { colors, constants } from '@styles';

export const CardContainer = styled.View`
  display: flex;
  width: ${constants.PRODUCT_CARD_WIDTH};
  height: ${constants.PRODUCT_CARD_HEIGHT};
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: ${colors.white};
  border-radius: 6;
  margin: 4px;
  overflow: hidden;
  shadow-color: ${colors.black};
  shadow-radius: 4px;
  shadow-opacity: 0.5;
  shadow-offset: 1px 1px;
  elevation: 3;
  border-color: ${colors.lighter};
  border-style: solid;
  border-width: 1px;
`;

export const ProductImage = styled.Image`
  width: 100%;
  height: ${constants.PRODUCT_CARD_HEIGHT * 0.4};
`;

export const ProductName = styled.Text`
  font-size: 12;
  font-weight: 500;
  color: ${colors.black};
  margin-top: 6px;
`;

export const ProductPrice = styled.Text`
  font-size: 14;
  font-weight: 700;
  color: ${colors.regular};
  margin-top: 6px;
`;

export const Loader = styled.ActivityIndicator``;

export const QuantityContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  margin-top: 8px;
`;

export const ActionButton = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${constants.PRODUCT_CARD_ACTION_BUTTON_SIZE};
  height: ${constants.PRODUCT_CARD_ACTION_BUTTON_SIZE};
  background-color: ${colors.primary};
  border-radius: 4;
`;

export const QuantityText = styled.Text`
  font-size: 14;
  font-weight: 900;
  color: ${colors.black};
`;
