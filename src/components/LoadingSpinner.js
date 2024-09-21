import { StyleSheet, ActivityIndicator, View } from 'react-native'
import { colors } from '../global/colors'

const LoadingSpinner = () => {

    return (
        <View style={styles.container}>
            <ActivityIndicator size={80} color={colors.black1} />
        </View>
    )

}

export default LoadingSpinner

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.green1
    }
})