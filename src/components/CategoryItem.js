import { Pressable, StyleSheet, Text } from 'react-native'
import Card from './Card'
import { colors } from '../global/colors'
import { useNavigation } from '@react-navigation/native'

const CategoryItem = ({item}) => {

  const navigation = useNavigation()

  return (
    <Pressable onPress={()=>navigation.navigate("Products",{category:item})}>
          <Card style={styles.container}>
            <Text style={styles.text}>{item}</Text>
          </Card>
    </Pressable>

  )
}

export default CategoryItem

const styles = StyleSheet.create({
    container:{
        width:"90%",
        marginHorizontal:"5%",
        backgroundColor:colors.green1,
        marginVertical:10,
        padding:20,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:3,
 
    },
    text:{
        fontSize:16
    }
})