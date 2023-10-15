import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export default function PrimaryButton({ children, onPress }) {
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable style={styles.buttonInnerContainer} onPress={onPress} android_ripple={{ color: Colors.primary600 }} >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden',
    },
    buttonInnerContainer: {
        backgroundColor: '#72063c',
        borderRadius: 28,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
        margin: 4
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',

    }

})