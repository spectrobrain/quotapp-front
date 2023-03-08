import { AppRegistry,StyleSheet, View } from 'react-native';
import QuotaProvider  from './src/contexts/quotaProvider/QuotaProvider'
import Navigation from './src/routes/Navigation'
//import Main from './src/Main';
//import LayoutTemplate from './src/layouts/LayoutTemplate';
//import LayoutWellcome from './src/layouts/wellcome/LayoutWellcome';
//import LayoutCharts from './src/layouts/chartsData/LayoutCharts';
//import LayoutTemplate from './src/layouts/LayoutTemplate';

export default function App() {
  return (
    <QuotaProvider>
      <Navigation>
    
      </Navigation>
    </QuotaProvider>
   
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
