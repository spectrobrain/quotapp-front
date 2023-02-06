import { StyleSheet, View } from 'react-native';
import ItemState  from './src/contexts/itemContext/ItemState'
import Main from './src/Main';

export default function App() {
  return (
    <ItemState>
      <Main/>
    </ItemState>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
