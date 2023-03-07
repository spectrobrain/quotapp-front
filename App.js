import { AppRegistry,StyleSheet, View } from 'react-native';
import ItemState  from './src/contexts/itemContext/ItemState'
import Navigation from './src/routes/Navigation'
//import Main from './src/Main';
//import LayoutTemplate from './src/layouts/LayoutTemplate';
//import LayoutWellcome from './src/layouts/wellcome/LayoutWellcome';
import LayoutCharts from './src/layouts/chartsData/LayoutCharts';
//import LayoutTemplate from './src/layouts/LayoutTemplate';

export default function App() {
  return (
    <ItemState>
      <Navigation>
      {/* <Main/> */}
      {/* <LayoutTemplate/> */}
     
      {/* <LayoutWellcome/> */}
      </Navigation>
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
