import { FlatList, StyleSheet } from 'react-native'
import CategoryItem from './CategoryItem'
import { useGetCategoriesQuery } from '../services/shop'
import LoadingSpinner from './LoadingSpinner'
import { colors } from '../global/colors'

const Categories = () => {

  const { data: categories, isLoading } = useGetCategoriesQuery()

  if( isLoading ) return <LoadingSpinner/>
  
  return (
      <FlatList
        data={categories}
        keyExtractor={ item => item }
        renderItem={ ( { item } ) => <CategoryItem item={item} /> }
        style={styles.container}
      />
  )
  
}

export default Categories

const styles = StyleSheet.create({
  container:{
    backgroundColor:colors.black1
  }
})