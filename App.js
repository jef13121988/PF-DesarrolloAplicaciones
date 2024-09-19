import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font'
import { fonts } from './src/global/fonts'
import { colors } from './src/global/colors'
import Navigator from './src/navigation/Navigator'
import { store } from './src/app/store'
import { Provider } from 'react-redux'
import { init } from './src/db'
import { StyleSheet } from 'react-native'

export default function App() {

  
  init()
  
  const [fontLoaded] = useFonts(fonts)

  if(!fontLoaded){
    return null
  } 

  return (
    <>
      <Provider store={store} style={styles.container}>
        <Navigator/>
      </Provider>
      <StatusBar style="light" backgroundColor={colors.green3} />
    </>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:colors.black1
  }
})