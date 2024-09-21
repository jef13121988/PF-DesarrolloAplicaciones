import { Image, useWindowDimensions, StyleSheet, View } from 'react-native'
import { colors } from '../global/colors'
import { URL_IMAGE } from '../firebase/database'

const ProductImage = ({ route }) => {

  const { image } = route.params
  const { width } = useWindowDimensions()

  return (
    <View style={styles.container}>
      <Image
        style={ [ styles.image, { height: width - 20 } ] }
        resizeMode='contain'
        source={{ uri: URL_IMAGE + image }}
      />
    </View>
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