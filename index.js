import { AppRegistry, Platform } from 'react-native';
import App from './App';
import registerRootComponent from 'expo/build/launch/registerRootComponent';

registerRootComponent(App);
AppRegistry.registerComponent('bubble', () => App);

if (Platform.OS === 'web') {
  const rootTag = document.getElementById('root') || document.getElementById('main');
  AppRegistry.runApplication('bubble', { rootTag });
}
