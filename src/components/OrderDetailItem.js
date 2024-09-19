import { StyleSheet, Text, View, Image } from 'react-native'
import { URL_THUMBNAIL } from '../firebase/database';
import { colors } from '../global/colors'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const OrderDetailItem = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerText}>
        <Text style={styles.title}>{item.nombre}</Text>
        <Text style={styles.text}>Precio: <FontAwesome6 name="coins" size={20} color="yellow" /> {item.precio}</Text>
        <Text style={styles.text}>Cantidad: {item.quantity}</Text>
        <Text style={styles.totalPrice}>Subtotal: <FontAwesome6 name="coins" size={20} color="yellow" /> {item.precio * item.quantity}</Text>
      </View>
      <Image
        style={styles.image}
        resizeMode='cover'
        source={{uri:URL_THUMBNAIL+item.imagen}}
      />
    </View>
  )
}

export default OrderDetailItem

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
    borderRadius:3
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