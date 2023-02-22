import { AppRegistry, StyleSheet } from 'react-native';
import ItemState  from './src/contexts/itemContext/ItemState';
import Navigation from './src/routes/Navigation'
import Main from './src/Main';
import {name as appName} from './app.json'
//expo start --localhost --android
export default function App() {
  return (
    <ItemState>
      
        <Main/>
      
  </ItemState>
   
  );
}
AppRegistry.registerComponent(appName,()=> Navigation)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
