import * as React from 'react';
import { ActivityIndicator } from 'react-native';
import { colors } from '@styles';
import {
  ButtonContainer,
  ButtonText
} from './ButtonStyle';

interface IProps {
  text: string;
  loading?: boolean;
  onPress?(): void;
}

const Button = (props: IProps) => {
  const { text, loading, onPress } = props;
  return(
    <ButtonContainer onPress={onPress}>
      {
        loading ? (
          <ActivityIndicator size="small" color={colors.black}/>
        ) : (
          <ButtonText>{text}</ButtonText>
        )
      }
    </ButtonContainer>
  );
};

export { Button };
