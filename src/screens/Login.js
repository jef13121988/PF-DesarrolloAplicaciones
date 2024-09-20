import { StyleSheet, Text, View,Pressable } from 'react-native'
import { colors } from '../global/colors'
import { useEffect, useState } from 'react'
import InputForm from '../components/InputForm'
import SubmitButton from '../components/SubmitButton'
import { useLoginMutation } from '../services/auth'
import { setUser } from '../features/auth/authSlice'
import { useDispatch } from 'react-redux'
import { loginSchema } from '../validations/loginSchema'
import { deleteSession, insertSession } from '../db'


const Login = ({navigation}) => {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [errorEmail,setErrorEmail] = useState("")
    const [errorPassword,setErrorPassword] = useState("")
    const [triggerLogin,{data,isSuccess,isError,error}] = useLoginMutation()
    const dispatch = useDispatch()

    useEffect(()=>{
      if(isError) {
        setErrorEmail("Email o contraseña inválida")
        setErrorPassword("Email o contraseña inválida")
      }
    },[isError])


    const onSubmit = async () => {
        try {
          loginSchema.validateSync({email,password})
          const {data} = await triggerLogin({email,password})
          deleteSession()
          insertSession(data)
          dispatch(setUser({
            email:data.email,
            idToken:data.idToken,
            localId:data.localId
          }))
        } catch (error) {
          switch(error.path){
            case "email":
              setErrorEmail(error.message)
              setErrorPassword("")
              break
            case "password":
              setErrorPassword(error.message)
              setErrorEmail("")
              break
              default:
                break
          }
     
        }
    }

  return (
    <View style={styles.main}>
        <View style={styles.container}>
            <InputForm
                label="Email"
                value={email}
                onChangeText={(t) => setEmail(t)}
                isSecure={false}
                error={errorEmail}
            />
            <InputForm
                label="Contraseña"
                value={password}
                onChangeText={(t) => setPassword(t)}
                isSecure={true}
                error={errorPassword}
            />
            <SubmitButton onPress={onSubmit} title="Iniciar Sesión"/>
            <Text style={styles.sub}>¿No tenés una cuenta?</Text>
            <Pressable onPress={()=> navigation.navigate("Register")} >
                <Text style={styles.subLink}>Registrarme</Text>
            </Pressable>
        </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  main:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:colors.black1
  },
  container:{
    width:"90%",
    gap:15,
    borderRadius:10,
    justifyContent:"center",
    alignItems:"center",
    paddingVertical:20
  },
  title:{
    fontSize:22,
    fontFamily:"Lobster",
    color:colors.white1
  },
  sub:{
    fontSize:14,
    fontFamily:"Josefin",
    color:colors.white1
  },
  subLink:{
    fontSize:14,
    fontFamily:"Josefin",
    color:colors.orange
  }
})