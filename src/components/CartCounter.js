import { Pressable, StyleSheet, Text, View } from 'react-native'
import { useEffect, useState } from 'react'
import { colors } from '../global/colors'
import { incrementItemCart, decrementItemCart } from '../features/cart/cartSlice'
import { useDispatch } from 'react-redux'


const CartCounter = ({ product }) => {

    const [ disableButton, setDisableButton ] = useState( false )
    const dispatch = useDispatch()

    const handleIncrementItemCart = () => {
        dispatch( incrementItemCart( product ) )
    }

    const handleDecrementItemCart = () => {
        dispatch( decrementItemCart( product ) )
    }

    useEffect( () => {
        if( product.cantidad === 1 ){
            setDisableButton( true )
        } else {
            setDisableButton( false )
        }
    },[ product.cantidad ])

  return (
    <View style={styles.container}>
        <Text style={styles.text}>Cantidad:</Text>
        <Pressable onPress={handleDecrementItemCart} style={ [ styles.button, disableButton && styles.disabledButton ] } disabled={disableButton}>
            <Text style={styles.buttonText}>-</Text>
        </Pressable>
        <Text style={styles.text}>{product.cantidad}</Text>
        <Pressable onPress={handleIncrementItemCart} style={styles.button}>
            <Text style={styles.buttonText}>+</Text>
        </Pressable>
    </View>
  )
  
}

export default CartCounter

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