import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import Entypo from '@expo/vector-icons/Entypo'
import { colors } from '../global/colors'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'
import { URL_THUMBNAIL } from '../firebase/database'
import { removeItemCart } from '../features/cart/cartSlice'
import { useDispatch } from 'react-redux'
import CartCounter from './CartCounter'

const CartItem = ({ item, isCart }) => {

  const dispatch = useDispatch()

  const handleRemoveItemCart = () => {
    dispatch( removeItemCart( item ) )
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerText}>
        <Text style={styles.title}>{item.nombre}</Text>
        <Text style={styles.text}>Precio: <FontAwesome6 name="coins" size={20} color="yellow" /> {item.precio}</Text>
        { isCart ? 
          <CartCounter product={item} />
        :
          <Text style={styles.text}>Cantidad: {item.cantidad}</Text>
        }
        <Text style={styles.totalPrice}>Subtotal: <FontAwesome6 name="coins" size={20} color="yellow" /> { item.precio * item.cantidad }</Text>
      </View>
      { isCart ? 
        <Pressable onPress={handleRemoveItemCart}>
          <Entypo name="trash" size={48} color={colors.red2} />
        </Pressable>
      :
        <Image
          style={styles.image}
          resizeMode='cover'
          source={{ uri: URL_THUMBNAIL + item.imagen }}
        />
      }
    </View>
  )
  
}

export default CartItem

const styles = StyleSheet.create({
  container:{
    width:"90%",
    marginHorizontal:"5%",
    backgroundColor:colors.green2,
    marginVertical:10,
    padding:20,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    borderRadius:35
  },
  containerText:{
    width:"70%",
    gap:5
  },
  title:{
    color:colors.white1,
    fontSize:18,
    textDecorationLine:"underline",
    fontWeight:"bold"
  },
  text:{
    color:colors.white1,
    fontSize:16,
    fontStyle:"italic"
  },
  totalPrice:{
    color:colors.white1,
    fontSize:20,
    fontWeight:"bold"
  },
  image:{
    minWidth:80,
    width:"20vw",
    maxWidth:150,
    minHeight:80,
    height:"20vw",
    maxHeight:150,
    borderRadius:3
  }
})