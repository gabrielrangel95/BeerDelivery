import { createStackNavigator } from 'react-navigation';
import { Home, Products } from '@screens';

const Router = createStackNavigator({
  Home: {
    screen: Home
  },
  Products: {
    screen: Products
  }
});

export { Router };
