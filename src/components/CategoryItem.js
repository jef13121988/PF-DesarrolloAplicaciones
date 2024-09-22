import { Pressable, StyleSheet, Text } from 'react-native'
import Card from './Card'
import { colors } from '../global/colors'
import { useNavigation } from '@react-navigation/native'

const CategoryItem = ({ item }) => {

  const navigation = useNavigation()

  return (
    <Pressable onPress={ () => navigation.navigate( "Products", { category: item } ) }>
      <Card style={styles.container}>
        <Text style={styles.text}>{item}</Text>
      </Card>
    </Pressable>
  )

}

export default CategoryItem

const styles = StyleSheet.create({
  container:{
    padding:20,
    justifyContent:"center",
    borderRadius:100
  },
  text:{
    fontSize:20,
    color:colors.white1,
    fontWeight:"bold"
  }
})