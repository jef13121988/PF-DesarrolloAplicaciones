import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../global/colors'
import { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import { TextInput } from 'react-native-paper';

const InputForm = ({ label, value, onChangeText, isSecure, error, isPassword }) => {

  const [ focus, setFocus ] = useState( false )
  const [ isSecureState, setIsSecureState ] = useState( isSecure )


  return (
    <View style={styles.inputContainer}>
        <Text style={styles.titleInput}>{label}</Text>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={isSecureState}
          textColor={colors.white1}
          selectionColor={colors.green6}
          cursorColor ={colors.green6}
          style={ focus ? styles.inputOnFocus : styles.inputOnBlur }
          onFocus={ () => setFocus( true ) }
          onBlur={ () => setFocus( false ) }
          right={ isPassword ?
            <TextInput.Icon
              icon={ () => <Ionicons name={ isSecureState ? "eye-off-outline" : "eye-outline" } size={24} color={colors.white1} /> }
              onPress={ () => { isSecureState ? setIsSecureState(false) : setIsSecureState(true) } }
            />
          :
            null
          }
        />
        <View><Text style={styles.error}>{ error ? error : " " }</Text></View>
    </View>
  )
}

export default InputForm

const styles = StyleSheet.create({
  inputContainer:{
    width:"100%"
  },
  inputOnBlur:{
    width:"90%",
    borderWidth:3,
    fontFamily:"Josefin",
    fontSize:20,
    marginHorizontal:"5%",
    marginVertical:10,
    borderRadius:10,
    borderColor:colors.green5,
    backgroundColor:colors.green1
    },
  inputOnFocus:{
    width:"90%",
    borderWidth:3,
    fontFamily:"Josefin",
    fontSize:20,
    marginHorizontal:"5%",
    marginVertical:10,
    borderRadius:10,
    borderColor:colors.green6,
    backgroundColor:colors.green3
  },
  titleInput:{
    width:"90%",
    marginHorizontal:"5%",
    fontSize:16,
    fontFamily:"Josefin",
    color:colors.white1
  },
  error:{
    fontSize:16,
    color:colors.red1,
    fontFamily:"Josefin",
    fontStyle:"italic",
    marginLeft:20
  }
})