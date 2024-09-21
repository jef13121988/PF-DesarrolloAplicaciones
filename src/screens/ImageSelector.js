import { StyleSheet, View, Image } from 'react-native'
import SubmitButton from '../components/SubmitButton'
import * as ImagePicker from 'expo-image-picker'
import { useState } from 'react'
import { usePatchImageProfileMutation } from '../services/users'
import { useSelector } from 'react-redux'
import { useGetUserQuery } from '../services/users'
import { colors } from '../global/colors'

const ImageSelector = ({ navigation }) => {

  const [ image, setImage ] = useState("")
  const [ triggerAddImageProfile ] = usePatchImageProfileMutation()
  const localId = useSelector( state => state.auth.localId )
  const { data: user, isLoading } = useGetUserQuery({ localId })

  if( isLoading ) return <LoadingSpinner/>

  const pickImage = async () => {

    const { granted } = await ImagePicker.requestCameraPermissionsAsync()
    
    if( !granted ) return 
    const result = await ImagePicker.launchCameraAsync({
        aspect: [9,9],
        quality: 0.2,
        base64: true,
        allowsEditing: true
    })

    if( result.canceled ) return
    setImage( "data:image/jpg;base64," + result.assets[0].base64 )

  }
  
  const confirmImage = () => {
      triggerAddImageProfile({ image, localId })
      navigation.navigate( "Profile" )
  }

  return (
    <View style={styles.container}>
      <Image
        source={ user.image ? { uri: user.image } : require("../../assets/profile_default.jpg") }
        resizeMode='cover'
        style={styles.image}
      />
      <SubmitButton title="Tomar Imagen" onPress={pickImage} />
      <SubmitButton title="Confirmar" onPress={confirmImage} />
    </View>
  )

}

export default ImageSelector

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