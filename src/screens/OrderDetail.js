import { Text, View, StyleSheet, FlatList } from 'react-native'
import { useSelector } from 'react-redux'
import { useGetOrderByUserQuery } from '../services/orders'
import { colors } from '../global/colors'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'
import LoadingSpinner from '../components/LoadingSpinner'
import CartItem from '../components/CartItem'


const OrderDetail = ({ route }) => {

  const { id } = route.params
  const localId = useSelector( state => state.auth.localId )
  const { data: order, isLoading } = useGetOrderByUserQuery({ localId, orderId: id })

  if( isLoading ) return <LoadingSpinner/>

  return (
    <View style={styles.container}>
      <FlatList
        data={order.items}
        keyExtractor={ item => item.id }
        renderItem={ ({ item }) => <CartItem item={item} isCart={false} /> }
      />
      <Text style={styles.total}>Total: <FontAwesome6 name="coins" size={20} color="yellow" /> {order.total}</Text>
    </View>
  )

}

export default OrderDetail

const styles = StyleSheet.create({
  container:{
    justifyContent:"space-between",
    flex:1,
    backgroundColor:colors.black1
  },
  total:{
    textAlign:"right",
    color:colors.white1,
    fontSize:20,
    fontWeight:"bold",
    marginRight:20,
    marginVertical:10
  }
})