import { AppRegistry,StyleSheet, View } from 'react-native';
import QuotaProvider  from './src/contexts/quotaProvider/QuotaProvider'
import Navigation from './src/routes/Navigation'
import LayoutLogin from './src/layouts/login/LayoutLogin'

export default function App() {
  return (
    <QuotaProvider>
      <Navigation>
        <LayoutLogin/>
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
