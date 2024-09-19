import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'
import ItemListCategory from '../screens/ItemListCategory'
import ItemDetail from '../screens/ItemDetail'
import Header from '../components/Header'

const Stack = createNativeStackNavigator()
const ShopStack = () => {
  return (
    <Stack.Navigator
            screenOptions={(
                ({route}) => {
                    return {
                        header: () => <Header title={
                            route.name === "Home" ?
                                "Bienvenido" 
                            : 
                                route.name === "Products" ?
                                    route.params.category
                                :
                                    "Detalle del Producto"
                        } />
                    }
                }
            )}
        >
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='Products' component={ItemListCategory}/>
            <Stack.Screen name='Detail' component={ItemDetail}/>
        </Stack.Navigator>
  )
}

export default ShopStack