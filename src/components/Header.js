import { Pressable, StyleSheet, Text, View, StatusBar, Platform } from 'react-native'
import { colors } from '../global/colors'
import AntDesign from '@expo/vector-icons/AntDesign'
import { deleteSession } from '../db'
import { useDispatch, useSelector } from 'react-redux'
import { clearUser } from '../features/auth/authSlice'

const Header = ({ title }) => {

  const idToken = useSelector( state => state.auth.idToken )
  const dispatch = useDispatch()

  const onLogout = () => {
    deleteSession()
    dispatch( clearUser() )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      { idToken && 
      <Pressable onPress={onLogout} style={styles.logout}>
        <AntDesign name="logout" size={30} color={colors.white1} />
      </Pressable> }
    </View>
  )
  
}

export default Header

const styles = StyleSheet.create({
  container:{
    marginTop:Platform.OS === "android" ? StatusBar.currentHeight:0,
    backgroundColor:colors.green1,
    width:"100%",
    height:80,
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    position:"relative"
  },
  text:{
    fontSize:25,
    fontFamily:'Josefin',
    color:colors.white1
  },
  icon:{
    position:"absolute",
    left:20
  },
  logout:{
    position:"absolute",
    right:10,
    bottom:20
  }
})