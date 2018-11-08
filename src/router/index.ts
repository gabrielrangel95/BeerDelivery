import { createStackNavigator } from 'react-navigation';
import { Home } from '@screens';

const Router = createStackNavigator({
  Home: {
    screen: Home
  }
});

export { Router };
