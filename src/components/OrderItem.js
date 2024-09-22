import { Pressable, StyleSheet, Text, View } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import { colors } from '../global/colors';
import { useNavigation } from '@react-navigation/native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Card from './Card';

const OrderItem = ({ item }) => {

  const navigation = useNavigation()

  return (
    <Card style={styles.container}>
      <View style={styles.containerText}>
        <Text style={styles.date}>{item.createdAt}</Text>
        <Text style={styles.total}>Total: <FontAwesome6 name="coins" size={20} color="yellow" /> {item.total}</Text>
      </View>
      <Pressable onPress={ () => navigation.navigate( "OrderDetail", { id: item.id } ) }>
        <AntDesign name="search1" size={48} color={colors.white1} />
      </Pressable>
    </Card>
  )

}

export default OrderItem

const styles = StyleSheet.create({
  container:{
    padding:20,
    flexDirection:"row",
    justifyContent:"space-between",
    borderRadius:20
  },
  containerText:{
    gap:20
  },
  date:{
    color:colors.white1,
      fontSize:16
  },
  total:{
    color:colors.white1,
    fontSize:20,
    fontWeight:"bold"
  }
})