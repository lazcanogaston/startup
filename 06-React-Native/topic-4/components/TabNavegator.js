import { createBottomTabNavigator } from 'react-navigation';
import Screen from './Screen';
import Screen2 from './Screen2';

export default createBottomTabNavigator({
  Page1:  Screen,
  Page2:  Screen2,
});