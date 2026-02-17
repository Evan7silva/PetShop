import { theme } from "@/theme/theme";
import { useState } from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { CATEGORIES } from "@/utils/categories";

export default function Index() {

    const [selectedId, setSelectedId] = useState(CATEGORIES[0].id);

    const renderCategory = ({ item }: { item: typeof CATEGORIES[0] }) => {
        const isSelected = item.id === selectedId;

        return (
            <TouchableOpacity
                onPress={() => setSelectedId(item.id)}
                activeOpacity={0.7}
                style={styles.categoryItem}
            >
                <View style={[styles.categoryBadge, isSelected && styles.categoryBadgeSelected]}>
                    <Text
                        style={[
                            styles.categoryText,
                            { color: isSelected ? theme.colors.white[300] : theme.colors.white[100] }
                        ]}
                    >
                        {item.name}
                    </Text>
                </View>
                {isSelected && <View style={styles.indicator} />}
            </TouchableOpacity>
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}></View>
            <View style={styles.content}>
                <Image source={require("@/assets/media/logo.png")} />
                <Text style={styles.text}>ESTOQUE</Text>

                <View style={styles.scrollContainer}>
                    <FlatList
                        data={CATEGORIES}
                        renderItem={renderCategory}
                        keyExtractor={(item) => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.flatListContent}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.black[300],
    },
    header: {
        height: 70,
        backgroundColor: theme.colors.red[300],
    },
    content: {
        flex: 1,
        alignItems: "center",
        paddingTop: 20,
    },
    text: {
        fontSize: theme.textSizes.large,
        fontFamily: theme.fonts.text,
        color: theme.colors.white[300],
        marginTop: 2,
    },
    scrollContainer: {
        height: 70,
        width: "100%",
    },
    flatListContent: {
        paddingHorizontal: 20,
        alignItems: "center",
    },
    categoryItem: {
        marginRight: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    categoryBadge: {
        paddingHorizontal: 15,
        paddingVertical: 6,
        borderRadius: 8,
        backgroundColor: theme.colors.gray[300],
    },
    categoryBadgeSelected: {
        paddingHorizontal: 15,
        paddingVertical: 6,
        borderRadius: 8,
        backgroundColor: theme.colors.red[300],
    },
    categoryText: {
        fontSize: 14,
        fontWeight: "bold",
        fontFamily: theme.fonts.text,
    },
    indicator: {
        height: 3,
        width: "80%",
        borderRadius: 2,
        marginTop: 4,
        backgroundColor: theme.colors.white[300],
    }
})