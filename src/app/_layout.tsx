import { useFonts } from "expo-font"
import { Stack } from "expo-router"
import LoaderScree from "../components/LoaderScreen/LoaderScreen.js"

export default function Layout() {

    // Carrega fontes
    const [ fontsLoaded ] = useFonts({
        RobotoItalic: require("../../assets/fonts/Roboto-Italic.ttf"),
        RobotoLight: require("../../assets/fonts/Roboto-Light.ttf"),
        RobotoMedium: require("../../assets/fonts/Roboto-Medium.ttf"),
        RobotoRegular: require("../../assets/fonts/Roboto-Regular.ttf"),
        RobotoSemiBold: require("../../assets/fonts/Roboto-SemiBold.ttf"),
    })

    // Enquanto carrega fontes -> mostra loader
    if (!fontsLoaded) {
        return <LoaderScree/>
    }
    return (
        <Stack screenOptions={{ headerShown: false}}>
            <Stack.Screen name="()tabs"/>
        </Stack>
    ) 
}