import { FlatList, StyleSheet, View, Text} from 'react-native'
import { useEffect, useState } from 'react'
import Search from '../components/Search'
import ProductItem from '../components/ProductItem'
import { useGetProductsQuery } from '../services/shop'
import LoadingSpinner from '../components/LoadingSpinner'
import { colors } from '../global/colors'


const ProductListCategory = ({ route }) => {

  const { category } = route.params
  const { data: products, isSuccess, isLoading, isError, error } = useGetProductsQuery( category )
  const [ productsFiltered, setProductsFiltered ] = useState( [] )

  useEffect( () => {
    if( isSuccess ) {
      setProductsFiltered( products )
    }
  },[ category, isSuccess ])

  const onSearch = ( input ) => {

    if( input ) {
      setProductsFiltered( products.filter( product => product.nombre.toLowerCase().includes( input.toLowerCase() ) ) )
    }else{
      setProductsFiltered( products )
    }
   
  }

  if( isLoading ) return <LoadingSpinner/>
  if( isError ) return <View><Text>{error.message}</Text></View>

  return (
    <View style={styles.container}>
      <Search onSearch={onSearch} />
      <FlatList
        data={productsFiltered}
        keyExtractor={ item => item.id }
        renderItem={ ({ item }) => <ProductItem product={item} /> }
      />
    </View>
  )

}

export default ProductListCategory

const styles = StyleSheet.create({
  container:{
    width:"100%",
    backgroundColor:colors.black1,
    flex:1
  }
})