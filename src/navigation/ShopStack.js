import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'
import ProductListCategory from '../screens/ProductListCategory'
import ProductDetail from '../screens/ProductDetail'
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
        <Stack.Screen name='Products' component={ProductListCategory}/>
        <Stack.Screen name='Detail' component={ProductDetail}/>
    </Stack.Navigator>
  )
}

export default ShopStack