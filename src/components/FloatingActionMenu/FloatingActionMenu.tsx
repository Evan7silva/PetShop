import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useRef, useState } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

export default function FloatingActionMenu() {
  const router = useRouter();
  const animation = useRef(new Animated.Value(0)).current;
  const [open, setOpen] = useState(false);

  function toggleMenu() {
    Animated.spring(animation, {
      toValue: open ? 0 : 1,
      useNativeDriver: true,
    }).start();
    setOpen(!open);
  }

  const rotation = {
    transform: [
      {
        rotate: animation.interpolate({
          inputRange: [0, 1],
          outputRange: ["0deg", "45deg"],
        }),
      },
    ],
  };

  const categoryStyle = {
    transform: [
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -70],
        }),
      },
      { scale: animation },
    ],
    opacity: animation,
  };

  const productStyle = {
    transform: [
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -140],
        }),
      },
      { scale: animation },
    ],
    opacity: animation,
  };

  return (
    <View style={styles.container}>
      {/* Criar Produto */}
      <Animated.View style={[styles.action, productStyle]}>
        <TouchableOpacity
          onPress={() => {
            toggleMenu();
            router.push("/");
          }}
          style={styles.option}
        >
          <Ionicons name="cube-outline" size={22} color="#fff" />
          <Text style={styles.text}>Produto</Text>
        </TouchableOpacity>
      </Animated.View>

      {/* Criar Categoria */}
      <Animated.View style={[styles.action, categoryStyle]}>
        <TouchableOpacity
          onPress={() => {
            toggleMenu();
            router.push("/");
          }}
          style={styles.option}
        >
          <Ionicons name="pricetags-outline" size={22} color="#fff" />
          <Text style={styles.text}>Categoria</Text>
        </TouchableOpacity>
      </Animated.View>

      {/* BOTÃO + */}
      <TouchableOpacity style={styles.fab} onPress={toggleMenu}>
        <Animated.View style={rotation}>
          <Ionicons name="add" size={34} color="#000" />
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 60,
    alignSelf: "center",
    alignItems: "center",
  },
  fab: {
    width: 94,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    elevation: 6,
  },
  action: {
    position: "absolute",
    bottom: 0,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FF0000",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 24,
    gap: 8,
    elevation: 4,
  },
  text: {
    color: "#fff",
    fontWeight: "600",
  },
});