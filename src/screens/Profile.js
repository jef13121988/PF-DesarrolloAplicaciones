import { StyleSheet, View, Image } from 'react-native'
import SubmitButton from '../components/SubmitButton'
import { useGetUserQuery } from '../services/users'
import { useSelector } from 'react-redux'
import LoadingSpinner from '../components/LoadingSpinner'
import { colors } from '../global/colors'

const Profile = ({navigation}) => {
  const localId = useSelector(state => state.auth.localId)
  const {data:user,isLoading} = useGetUserQuery({localId})

  if(isLoading) return <LoadingSpinner/>

  return (
    <View style={styles.container}>
      <Image
        source={user.image ? 
                {uri:user.image}
                :
                require("../../assets/profile_default.jpg")}
        resizeMode='cover'
        style={styles.image}
      />
      <SubmitButton title="Agregar imagen de perfil" onPress={()=>navigation.navigate("ImageSelector")}/>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
    container:{
        paddingTop:70,
        alignItems:"center",
        gap:20,
        flex: 1,
        backgroundColor:colors.black1
    },
    image:{
        width:150,
        height:150,
        borderColor:colors.green1,
        borderWidth:3
    }
})