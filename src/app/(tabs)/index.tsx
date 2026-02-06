import { theme } from "@/theme/theme"
import { Image, StyleSheet, Text, View } from "react-native"

export default function Index() {
    return (
        <View style={styles.container}>
            <View style={styles.header}></View>
            <View style={styles.content}>
                <Image source={require("@/assets/media/logo.png")}/>
                <Text style={styles.text}>ESTOQUE</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 0.6,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.colors.red[300]
    },
    content: {
        flex: 6,
        backgroundColor: theme.colors.black[300],
        alignItems: "center",
        paddingTop: 20,
        gap: 10
    },
    text: {
        fontSize: theme.textSizes.large,
        color: theme.colors.white[300],
        fontFamily: theme.fonts.text
    },
    text2: {
        fontSize: theme.textSizes.small,
        color: theme.colors.white[300],
    }
})