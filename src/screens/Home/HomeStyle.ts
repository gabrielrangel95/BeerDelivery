import styled from 'styled-components/native';
import { colors } from '@styles';

export const MainContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${colors.black};
  padding: 24px 12px;
`;

export const MainText = styled.Text`
  font-size: 24;
  color: ${colors.white};
`;

export const Title = styled.Text`
  font-size: 32;
  font-weight: 700;
  color: ${colors.white};
`;

export const Subtitle = styled.Text`
  font-size: 16;
  color: ${colors.white};
`;

export const InputStyle = {
  container: {
    borderColor: 'transparent'
  },
  textInputContainer: {
    width: '80%',
    backgroundColor: colors.white,
    borderRadius: '6%'
  },
  description: {
    fontWeight: 'bold'
  },
  predefinedPlacesDescription: {
    color: colors.primary
  }
};
