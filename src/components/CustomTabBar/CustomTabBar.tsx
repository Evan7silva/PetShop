import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import FloatingActionMenu from "../FloatingActionMenu/FloatingActionMenu";

export default function CustomTabBar() {
  const router = useRouter();

  return (
    <>
      <View style={styles.wrapper}>
        <View style={styles.tabBar}>
          <TouchableOpacity onPress={() => router.push("/")}>
            <Ionicons name="home-outline" size={26} color="#000" />
          </TouchableOpacity>

          <View style={{ width: 60 }} />

          <TouchableOpacity onPress={() => router.push("/")}>
            <Ionicons name="stats-chart-outline" size={26} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      <FloatingActionMenu />
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    alignItems: "center",
  },
  tabBar: {
    flexDirection: "row",
    backgroundColor: "#FF0000",
    width: "90%",
    height: 60,
    borderRadius: 30,
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 30
  },
});