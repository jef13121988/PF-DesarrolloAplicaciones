import { FlatList } from 'react-native'
import CategoryItem from './CategoryItem'
import { useGetCategoriesQuery } from '../services/shop'
import LoadingSpinner from './LoadingSpinner'


const Categories = () => {
  const {data:categories,isLoading} = useGetCategoriesQuery()

  if(isLoading) return <LoadingSpinner/>
  return (
      <FlatList
        data={categories}
        keyExtractor={item => item}
        renderItem={({item}) => <CategoryItem item={item} />}
      />
  )
}

export default Categories