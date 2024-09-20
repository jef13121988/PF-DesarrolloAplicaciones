import { Pressable, StyleSheet, Text, View } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import { colors } from '../global/colors';
import { useNavigation } from '@react-navigation/native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const OrderItem = ({item}) => {

  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View style={styles.containerText}>
        <Text style={styles.date}>{item.createdAt}</Text>
        <Text style={styles.total}>Total: <FontAwesome6 name="coins" size={20} color="yellow" /> {item.total}</Text>
      </View>
      <Pressable onPress={()=>navigation.navigate("OrderDetail",{id:item.id})}>
          <AntDesign name="search1" size={48} color={colors.white1} />
      </Pressable>
      
    </View>
  )
}

export default OrderItem

const styles = StyleSheet.create({
  container:{
      backgroundColor:colors.green1,
      width:"90%",
      marginHorizontal:"5%",
      marginVertical:10,
      padding:20,
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center",
      borderRadius:20,
      borderColor:colors.green2,
      borderWidth:3
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