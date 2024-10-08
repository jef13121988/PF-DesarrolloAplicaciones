import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { useState } from 'react'
import { colors } from '../global/colors'
import AntDesign from '@expo/vector-icons/AntDesign'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

const Search = ({ onSearch }) => {

    const [ input, setInput ] = useState("")
    const [ error, setError ] = useState("")

    const handleInputChange = ( t ) => {
        setInput( t )
    }

    const handleRemoveInput = () => {
        setInput("")
        onSearch("")
        setError("")
    }

    const search = () => {

        const regex = /[^a-zA-Z0-9 ]/

        if( regex.test( input ) ){
            setError("Caracteres no válidos")
        } else {
            setError("")
            onSearch( input )
        }

    }

    return (
        <View style={styles.container}>
            <View style={styles.containerInput}>
                <TextInput 
                    style={styles.input}
                    placeholderTextColor={colors.white1}
                    placeholder='Buscar producto'
                    value={input}
                    onChangeText={handleInputChange}
                />
                <View style={styles.buttonContainer}>
                    <Pressable onPress={search}>
                        <AntDesign name="search1" size={28} color={colors.white1} />
                    </Pressable>
                    <Pressable onPress={handleRemoveInput}>
                        <MaterialIcons name="cancel" size={28} color={colors.white1} />
                    </Pressable>
                </View>  
            </View>
            <Text style={styles.error}>{error}</Text>
        </View>
    )
    
}

export default Search

const styles = StyleSheet.create({
    container:{
        padding:10,
        margin: 0
    },
    containerInput:{
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center"
    },
    input:{
        backgroundColor:colors.green3,
        paddingVertical:5,
        paddingHorizontal:10,
        borderRadius:3,
        width:"75%",
        color:"white"
    },
    buttonContainer:{
        flexDirection:"row"
    },
    error:{
        color:"red",
        fontWeight:"bold",
        marginLeft:20
    }
})