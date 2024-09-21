import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from '../components/Header'
import Orders from '../screens/Orders'
import OrderDetail from '../screens/OrderDetail'

const Stack = createNativeStackNavigator()

const OrdersStack = () => {

    return (
        <Stack.Navigator
            screenOptions={(
                ({ route }) => {
                    return {
                        header: () => <Header title={
                            route.name === "Orders" ?
                                "Órdenes" 
                            : 
                                "Detalle de la Orden"
                        } />
                    }
                }
            )}
        >
            <Stack.Screen name='Orders' component={Orders} />
            <Stack.Screen name='OrderDetail' component={OrderDetail} />
        </Stack.Navigator>
    )
    
}

export default OrdersStack