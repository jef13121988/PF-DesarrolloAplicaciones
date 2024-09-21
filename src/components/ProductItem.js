import { Image, Pressable, StyleSheet, Text, useWindowDimensions } from 'react-native'
import { colors } from '../global/colors'
import { useNavigation } from '@react-navigation/native'
import { URL_THUMBNAIL } from '../firebase/database'

const ProductItem = ({ product }) => {

  const { width } = useWindowDimensions()
  const navigation = useNavigation()

  return (
    <Pressable style={styles.container} onPress={ () => navigation.navigate( "Detail", { id: product.id } ) }>
      <Text style={ [ styles.title,width < 300 ? styles.titleMin : styles.titleMax ] }>{product.nombre}</Text>
      <Image
        style={styles.image}
        resizeMode='cover'
        source={{ uri: URL_THUMBNAIL + product.imagen }}
      />
    </Pressable>
  )

}

export default ProductItem

const styles = StyleSheet.create({
    container:{
        width:"90%",
        marginHorizontal:"5%",
        backgroundColor:colors.green1,
        marginVertical:7,
        padding:10,
        alignItems:"center",
        borderRadius:20,
        flexDirection:"row",
        gap:10,
        borderColor:colors.green2,
        borderWidth:3
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