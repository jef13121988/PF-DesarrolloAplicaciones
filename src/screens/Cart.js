import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native'
import CartItem from '../components/CartItem'
import { colors } from '../global/colors'
import { useDispatch, useSelector } from 'react-redux'
import { usePostOrderMutation } from '../services/orders'
import { clearCart } from '../features/cart/cartSlice'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'

const Cart = ({ navigation }) => {

  const cart = useSelector( state => state.cart )
  const localId = useSelector( state => state.auth.localId )
  const [ triggerPostOrder ] = usePostOrderMutation()
  const dispatch = useDispatch()

  const handleAddOrder = () => {
    const createdAt = new Date().toLocaleString()
    const order = {
      ...cart,
      createdAt
    }
    triggerPostOrder({ localId, order })
    dispatch( clearCart() )
    navigation.navigate( "OrdersStack" )
  }

  const handleClearCart = () => {
    dispatch( clearCart() )
  }

  if( cart.total === 0 ) return <View style={styles.emptyContainer}><Text style={styles.emptyText}>No se han agregado productos al carrito</Text></View>

  return (
    <View style={styles.container}>
      <FlatList
        data={cart.items}
        keyExtractor={ item => item.id }
        renderItem={ ({ item }) => <CartItem item={item} isCart={true} /> }
      />
      <Text style={styles.total}>Total: <FontAwesome6 name="coins" size={20} color="yellow" /> {cart.total}</Text>
      <View style={styles.buttonContainer}>
        <Pressable onPress={handleClearCart} style={styles.clearButton}>
          <Text style={styles.buttonText}>Vaciar Carrito</Text>
        </Pressable>
        <Pressable onPress={handleAddOrder} style={styles.buyButton}>
          <Text style={styles.buttonText}>Comprar</Text>
        </Pressable>
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
  total:{
    textAlign:"right",
    color:colors.white1,
    fontSize:20,
    fontWeight:"bold",
    marginRight:20,
    marginVertical:10
  },
  buttonContainer:{
    flexDirection:"row",
    justifyContent:"space-between"
  },
  buyButton:{
    width:"46%",
    marginHorizontal:"2%",
    backgroundColor:colors.green6,
    borderRadius:10,
    padding:20,
    alignItems:"center",
    justifyContent:"center",
    fontSize:30,
    marginBottom:10
  },
  clearButton:{
    width:"46%",
    marginHorizontal:"2%",
    backgroundColor:colors.red1,
    borderRadius:10,
    padding:10,
    alignItems:"center",
    justifyContent:"center",
    fontSize:20,
    marginBottom:10
  },
  buttonText:{
    color:colors.white1,
    fontWeight:"bold",
    fontSize:22
  },
  emptyContainer:{
    flex:1,
    justifyContent:"top",
    backgroundColor:colors.black1
  },
  emptyText:{
    fontSize:16,
    fontWeight:"bold",
    color:colors.white1,
    width:"90%",
    marginHorizontal:"5%",
    backgroundColor:colors.green2,
    marginVertical:7,
    padding:20,
    textAlign:"center",
    borderRadius:20,
    borderColor:colors.green3,
    borderWidth:3
  }
})