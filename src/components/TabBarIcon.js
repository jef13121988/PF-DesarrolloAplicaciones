import { StyleSheet, Text, View } from 'react-native'
import Entypo from '@expo/vector-icons/Entypo'
import { colors } from '../global/colors'

const TabBarIcon = ({text,icon,focused}) => {
  return (
    <View style={styles.container}> 
       <Entypo 
        style={styles.icon} 
        name={icon} size={24} 
        color={focused ? colors.white1 : colors.white3} 
       />
       <Text style={{color:focused ? colors.white1 : colors.white3}}>{text}</Text>
    </View>
  )
}

export default TabBarIcon

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        gap:5
    }
})