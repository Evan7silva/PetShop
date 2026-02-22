import { theme } from "@/theme/theme";
import { useState } from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { CATEGORIES } from "@/utils/categories";
import { PRODUCTS, ProductProps } from "@/utils/products";

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

    const renderProduct = ({ item }: { item: ProductProps }) => (
        <TouchableOpacity style={styles.productCard}>
            <View style={styles.imagemContainer}>
                <Image source={item.image} style={styles.productImage} resizeMode="contain" />
            </View>
            <Text style={styles.productName}>{item.name}</Text>
        </TouchableOpacity>
    )
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
                <View style={{ width: '75%', height: '57%' }}>
                    <FlatList
                        data={PRODUCTS.filter(p => p.categoryId === selectedId)}
                        renderItem={renderProduct}
                        keyExtractor={(item) => item.id}
                        numColumns={3}
                        contentContainerStyle={styles.gridContent}
                        columnWrapperStyle={styles.columnWrapper}
                        showsVerticalScrollIndicator={false}
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
    },
    gridContent: {
        paddingBottom: 100,
        paddingHorizontal: 15,
    },
    columnWrapper: {
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    productCard: {
        backgroundColor: theme.colors.gray[300],
        width: '30%',
        aspectRatio: 0.8,
        borderRadius: 12,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imagemContainer: {
        width: '100%',
        height: '60%',
        backgroundColor: theme.colors.white[300],
        borderRadius: 50,
        padding: 5,
        marginBottom: 8,
    },
    productImage: {
        width: '100%',
        height: '100%',
    },
    productName: {
        color: theme.colors.white[300],
        fontSize: theme.textSizes.small,
        textAlign: 'center',
        fontFamily: theme.fonts.text,
    },
})