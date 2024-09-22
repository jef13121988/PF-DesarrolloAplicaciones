import { Image, Pressable, StyleSheet, Text, useWindowDimensions } from 'react-native'
import { colors } from '../global/colors'
import { useNavigation } from '@react-navigation/native'
import { URL_THUMBNAIL } from '../firebase/database'
import Card from './Card'

const ProductItem = ({ product }) => {

  const { width } = useWindowDimensions()
  const navigation = useNavigation()

  return (
    <Pressable onPress={ () => navigation.navigate( "Detail", { id: product.id } ) }>
      <Card style={styles.container}>
        <Text style={ [ styles.title,width < 300 ? styles.titleMin : styles.titleMax ] }>{product.nombre}</Text>
        <Image
          style={styles.image}
          resizeMode='cover'
          source={{ uri: URL_THUMBNAIL + product.imagen }}
        />
      </Card>
    </Pressable>
  )

}

export default ProductItem

const styles = StyleSheet.create({
  container:{
    padding:10,
    borderRadius:20,
    flexDirection:"row",
    gap:10
  },
  title:{
    width:"70%",
    color:colors.white1
  },
  titleMin:{
    fontSize:14
  },
  titleMax:{
    fontSize:20
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