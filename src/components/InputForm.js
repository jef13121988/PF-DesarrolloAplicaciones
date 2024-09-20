import { StyleSheet, Text, View, TextInput } from 'react-native'
import { colors } from '../global/colors'
import { useState } from 'react'

const InputForm = ({label,value,onChangeText,isSecure,error}) => {

  const [focus, setFocus] = useState(false);

  return (
    <View style={styles.inputContainer}>
        <Text style={styles.titleInput}>{label}</Text>
        <TextInput  
          value={value}  
          onChangeText={onChangeText} 
          secureTextEntry={isSecure}
          style={focus ? styles.inputOnFocus : styles.inputOnBlur}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
        <View><Text style={styles.error}>{error ? error : ""} </Text></View>
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
    padding:5,
    fontFamily:"Josefin",
    fontSize:14,
    marginHorizontal:"5%",
    marginVertical:10,
    borderRadius:10,
    borderColor:colors.green5,
    backgroundColor:colors.green1,
    color:colors.white1
  },
  inputOnFocus:{
    width:"90%",
    borderWidth:3,
    padding:5,
    fontFamily:"Josefin",
    fontSize:14,
    marginHorizontal:"5%",
    marginVertical:10,
    borderRadius:10,
    borderColor:colors.green6,
    backgroundColor:colors.green3,
    color:colors.white1
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