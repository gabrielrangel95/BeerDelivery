import styled from 'styled-components/native';
import { colors } from '@styles';

export const MainContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${colors.black};
  padding: 24px 12px;
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

export const ItemsContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
  top: ${props => props.topSpace ? props.topSpace : 12};
`;

export const InputStyle = {
  textInputContainer: {
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0)',
    borderTopWidth: 0,
    borderBottomWidth: 0
  },
  description: {
    fontWeight: 'bold',
    color: colors.primary
  },
  predefinedPlacesDescription: {
    color: colors.secondary
  }
};
