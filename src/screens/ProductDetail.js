import { Image, Pressable, StyleSheet, ScrollView, Text, View} from 'react-native'
import { colors } from '../global/colors'
import { addItemCart } from '../features/cart/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { useGetProductQuery } from '../services/shop'
import LoadingSpinner from '../components/LoadingSpinner'
import { URL_IMAGE, URL_THUMBNAIL } from '../firebase/database'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'
import ProductCounter from '../components/ProductCounter'
import { resetQuantity } from '../features/counter/counterSlice'

const ProductDetail = ({route}) => {

  const {id} = route.params
  const {data:product,isLoading} = useGetProductQuery(id)
  const navigation = useNavigation()
  const counter = useSelector( state => state.counter )

  const dispatch = useDispatch()


  const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>

  const handleAddItemCart = () => {
    dispatch(addItemCart({...product,cantidad:counter.quantity}))
    dispatch( resetQuantity() )
    navigation.navigate("CartStack")
  }

  if(isLoading) return <LoadingSpinner/>

  return (
    <ScrollView style={styles.container}>
      <Pressable onPress={ () => navigation.navigate( "Image" , { image: product.imagen } ) }>
        <Image
          style={styles.image}
          resizeMode='contain'
          source={{uri:URL_THUMBNAIL+product.imagen}}
        />
      </Pressable>
      <View style={styles.containerText}>
        <Text style={styles.title}>{product.nombre}</Text>
        <Text style={styles.characteristic}><B>Características:</B> otorga {product.valor} de {product.cualidad}.</Text>
        <Text style={styles.description}><B>Descripción:</B>{"\n"}{product.descripcion}</Text>
        <Text style={styles.price}><B>Precio:</B> <FontAwesome6 name="coins" size={20} color="yellow" /> {product.precio}</Text>
        <ProductCounter product={product}/>
      </View>
      
      <Pressable style={styles.button} onPress={handleAddItemCart}>
        <Text style={styles.buttonText}>AGREGAR AL CARRITO</Text>
      </Pressable>
    </ScrollView>
  )
}

export default ProductDetail

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
    color:colors.white1,
    borderRadius:10
  },
  price:{
    fontSize:20,
    color:colors.white1
  },
  image:{
    height:250,
    marginVertical:10
  },
  button:{
    width:"80%",
    marginHorizontal:"10%",
    backgroundColor:colors.green6,
    borderRadius:10,
    padding:10,
    alignItems:"center",
    justifyContent:"center",
    marginBottom:10
  },
  buttonText:{
    color:"white",
    fontWeight:"bold",
    fontSize:20
  }
})