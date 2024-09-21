import { Image, useWindowDimensions, StyleSheet, ScrollView } from 'react-native'
import { colors } from '../global/colors'
import { addItemCart } from '../features/cart/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { useGetProductQuery } from '../services/shop'
import LoadingSpinner from '../components/LoadingSpinner'
import { URL_IMAGE } from '../firebase/database'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'
import ProductCounter from '../components/ProductCounter'
import { resetQuantity } from '../features/counter/counterSlice'

const ProductImage = ({route}) => {

  const { image } = route.params
  const {width, height} = useWindowDimensions()

  return (
    <ScrollView style={styles.container}>
      <Image
        style={[styles.image,{height: width-20}]}
        resizeMode='contain'
        source={{uri:URL_IMAGE+image}}
      />
    </ScrollView>
  )
}

export default ProductImage

const styles = StyleSheet.create({
  container:{
    width:"100%",
    flex:1,
    backgroundColor:colors.black1
  },
  image:{
    margin:10
  }
})