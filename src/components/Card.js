import { StyleSheet, View } from 'react-native'
import { colors } from '../global/colors'

const Card = ({ style, children }) => {
  
  return (
    <View style={[ styles.container, style ]}>
      {children}
    </View>
  )
  
}

export default Card

const styles = StyleSheet.create({
  container:{
    width:"90%",
    marginHorizontal:"5%",
    backgroundColor:colors.green1,
    marginVertical:7,
    alignItems:"center",
    borderColor:colors.green2,
    borderWidth:3,
    shadowColor: colors.orange,
    shadowOffset: {
      width: 7,
      height: 7,
    },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 10
  }
})