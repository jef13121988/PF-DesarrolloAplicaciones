import { StyleSheet, Text, View,FlatList, Pressable } from 'react-native'
import CartItem from '../components/CartItem'
import { colors } from '../global/colors'
import { useDispatch, useSelector } from 'react-redux'
import { usePostOrderMutation } from '../services/orders'
import { clearCart } from '../features/cart/cartSlice'

const Cart = ({navigation}) => {

  const cart = useSelector(state => state.cart)
  const localId = useSelector(state => state.auth.localId)
  const [triggerPostOrder] = usePostOrderMutation()
  const dispatch = useDispatch()

  const handleAddOrder = () => {
    const createdAt = new Date().toLocaleString()
    const order = {
      ...cart,
      createdAt
    }
    triggerPostOrder({localId,order})
    dispatch(clearCart())
    navigation.navigate("OrdersStack")

  }
  if(cart.total === 0) return <View style={styles.emptyContainer}><Text style={styles.emptyText}>Vacío</Text></View>
  return (
    <View style={styles.container}>
      <FlatList
      data={cart.items}
      keyExtractor={item => item.id}
      renderItem={({item})=> <CartItem item={item}/> }
      />
      <View style={styles.containerConfirm}>
        <Pressable onPress={handleAddOrder}>
          <Text style={styles.textConfirm}>Confirmar</Text>
        </Pressable>
        <Text style={styles.textConfirm}>Total: {cart.total} $</Text>
      </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
    container:{
        justifyContent:"space-between",
        flex:1,
        backgroundColor:colors.black1
    },
    containerConfirm:{
        backgroundColor:colors.green2,
        padding:20,
        flexDirection:"row",
        justifyContent:"space-between"
    },
    textConfirm:{
        color:"white",
        fontSize:20
    },
    emptyContainer:{
      flex:1,
      justifyContent:"top",
      backgroundColor:colors.black1
    },
    emptyText:{
      fontSize:16,
      color:colors.white1,
      width:"90%",
      marginHorizontal:"5%",
      backgroundColor:colors.green2,
      marginVertical:7,
      padding:20,
      textAlign:"center",
      borderRadius:3 
    }
})