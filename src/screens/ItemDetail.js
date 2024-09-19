import { Image, Pressable, StyleSheet, ScrollView, Text, View} from 'react-native'
import { colors } from '../global/colors'
import { addItemCart } from '../features/cart/cartSlice'
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { useGetProductQuery } from '../services/shop'
import LoadingSpinner from '../components/LoadingSpinner'
import { URL_IMAGE, URL_THUMBNAIL } from '../firebase/database'

const ItemDetail = ({route}) => {

  const {id} = route.params
  const {data:product,isLoading} = useGetProductQuery(id)
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>

  const handleAddItemCart = () => {
    dispatch(addItemCart({...product,quantity:1}))
    navigation.navigate("CartStack")
  }

  if(isLoading) return <LoadingSpinner/>

  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.image}
        resizeMode='contain'
        source={{uri:URL_THUMBNAIL+product.imagen}}
      />
      <View style={styles.containerText}>
        <Text style={styles.title}>{product.nombre}</Text>
        <Text style={styles.characteristic}><B>Características:</B> otorga {product.valor} de {product.cualidad}.</Text>
        <Text style={styles.description}><B>Descripción:</B>{"\n"}{product.descripcion}</Text>
        <Text style={styles.price}><B>Precio:</B> <Image
        style={styles.coin}
        resizeMode='contain'
        source={"../../assets/moneda.svg"}
        /> {product.precio}</Text>
      </View>
      <Pressable style={styles.button} onPress={handleAddItemCart}>
        <Text style={styles.buttonText}>AGREGAR AL CARRITO</Text>
      </Pressable>
    </ScrollView>
  )
}

export default ItemDetail

const styles = StyleSheet.create({
  container:{
    width:"100%",
    backgroundColor:colors.black1
  },
  containerText:{
    width:"80%",
    gap:10,
    margin:10,
    marginHorizontal:"10%"
  },
  title:{
    fontSize:20,
    fontWeight:"bold",
    color:colors.white1
  },
  characteristic:{
    fontSize:18,
    color:colors.white1
  },
  description:{
    fontStyle:"italic",
    fontSize:18,
    backgroundColor:colors.gray1,
    padding: 10,
    color:colors.white1
  },
  price:{
    fontSize:20,
    color:colors.white1
  },
  image:{
    height:250,
    marginVertical:10
  },
  coin:{
    width: 20,
    height:20
  },
  button:{
    width:"80%",
    marginHorizontal:"10%",
    backgroundColor:colors.green6,
    borderRadius:3,
    padding:10,
    alignItems:"center",
    justifyContent:"center",
    fontSize:20,
    marginBottom:10
  },
  buttonText:{
    color:"white",
    fontWeight:"bold",
    fontSize:20
  }
})