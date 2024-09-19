import { StyleSheet, Text, View, FlatList } from 'react-native'
import OrderItem from '../components/OrderItem'
import {  useGetOrdersByUserQuery } from '../services/orders'
import LoadingSpinner from '../components/LoadingSpinner'
import { useSelector } from 'react-redux'
import { colors } from '../global/colors'

const Orders = () => {

  const localId = useSelector(state => state.auth.localId)

  const {data:orders,isLoading} = useGetOrdersByUserQuery(localId)


  if(isLoading) return <LoadingSpinner/>

  if(orders.length === 0) return <View style={styles.emptyContainer}><Text style={styles.emptyText}>Vacío</Text></View>
  return (
    <View style={styles.container}>
      <FlatList
        data={orders}
        keyExtractor={(item)=> item.id}
        renderItem={({item})=> <OrderItem item={item}/>}
      />
    </View>
  )
}

export default Orders

const styles = StyleSheet.create({
  container:{
      justifyContent:"space-between",
      flex:1,
      backgroundColor:colors.black1
  },
  emptyContainer:{
    flex:1,
    justifyContent:"top",
    backgroundColor:colors.black1
  },
  emptyText:{
    fontSize:16,
    color:colors.white1,
    width:"90%",
    marginHorizontal:"5%",
    backgroundColor:colors.green2,
    marginVertical:7,
    padding:20,
    textAlign:"center",
    borderRadius:3 
  }
})