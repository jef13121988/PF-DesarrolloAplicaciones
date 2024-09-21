import { Pressable, StyleSheet, Text, View } from 'react-native'
import { useEffect, useState } from 'react'
import { colors } from '../global/colors'
import { increaseQuantity, decreaseQuantity } from '../features/counter/counterSlice'
import { useDispatch, useSelector } from 'react-redux'

const ProductCounter = () => {

    const counter = useSelector( state => state.counter )
    const [ disableButton, setDisableButton ] = useState( false )

    const dispatch = useDispatch()

    const handleIncrementItem = () => {
        dispatch( increaseQuantity() )
    }

    const handleDecrementItem = () => {
        dispatch( decreaseQuantity() )
    }

    useEffect( () => {
        if( counter.quantity === 1 ){
            setDisableButton( true )
        } else {
            setDisableButton( false )
        }
    },[ counter.quantity ])

  return (
    <View style={styles.container}>
        <Text style={styles.text}>Cantidad:</Text>
        <Pressable onPress={handleDecrementItem} style={[ styles.button, disableButton && styles.disabledButton ]} disabled={disableButton}>
            <Text style={styles.buttonText}>-</Text>
        </Pressable>
        <Text style={styles.text}>{counter.quantity}</Text>
        <Pressable onPress={handleIncrementItem} style={styles.button}>
            <Text style={styles.buttonText}>+</Text>
        </Pressable>
    </View>
  )
}

export default ProductCounter

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        flexDirection:"row"
    },
    text:{
        color:colors.white1,
        fontSize:18
    },
    button:{
        backgroundColor:colors.green1,
        minWidth:25,
        alignItems:"center",
        justifyContent:"center",
        padding:7,
        borderRadius:10,
        margin:5
    },
    disabledButton:{
        opacity: 0.5
    },
    buttonText:{
        color:colors.white1,
        fontSize:18
    }
})