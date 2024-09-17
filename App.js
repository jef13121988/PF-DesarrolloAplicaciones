import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import Navigator from './src/navigation/Navigator';
import { colors } from './src/global/colors';
import { Provider } from 'react-redux';
import { store } from './src/app/store';

export default function App() {
  return (
    <>
      <Provider store={store}>
        <Navigator/>
      </Provider>
      <StatusBar style="light" backgroundColor={colors.green3} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.green1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
