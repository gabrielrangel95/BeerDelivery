import styled from 'styled-components/native';
import { colors, constants } from '@styles';

export const ButtonContainer = styled.TouchableOpacity`
  display: flex;
  width: ${constants.BUTTON_WIDTH};
  height: ${constants.BUTTON_HEIGHT};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 6;
  background-color: ${colors.primary};
`;

export const ButtonText = styled.Text`
  font-size: 14;
  font-weight: bold;
  color: ${colors.black};
`;
