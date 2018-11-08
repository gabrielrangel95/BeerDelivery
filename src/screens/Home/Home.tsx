import * as React from 'react';
import {
  MainContainer,
  MainText
} from './HomeStyle';

class Home extends React.PureComponent<any, any> {
  static navigationOptions = {
    header: null
  };

  render() {
    return(
      <MainContainer>
        <MainText>Beer Delivery</MainText>
      </MainContainer>
    );
  }
}

export { Home };
