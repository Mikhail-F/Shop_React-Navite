import React, {useEffect} from 'react'
import {View, ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {deleteError, getProducts} from "../Redux/productsReducer";
import Product from "../components/Product";
import {FontAwesome} from '@expo/vector-icons';

const MainScreen = () => {
    let dispatch = useDispatch()
    let loading = useSelector(state => state.products.loading)
    let error = useSelector(state => state.products.error)
    let products = useSelector(state => state.products.products)

    useEffect(() => {
        dispatch(getProducts())
    }, [])

    if (loading) {
        return (
            <View>
                <ActivityIndicator size={'small'} color={''}/>
            </View>
        )
    }

    if (error) {
        return (
            <View style={styles.wrapper}>
                <TouchableOpacity activeOpacity={0.7} onPress={() => [dispatch(deleteError()), dispatch(getProducts())]}
                                  style={styles.errorWrapper}>
                    <Text style={styles.errorText}>
                        Данные не были загружены
                    </Text>
                    <FontAwesome name="refresh" size={24} color="black"/>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={styles.wrapper}>
            <FlatList
                data={products}
                keyExtractor={(el, i) => i.toString()}
                renderItem={({item}) => <Product item={item}/>}
                numColumns={2}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        paddingHorizontal: 10
    },
    errorWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    errorText: {
        fontSize: 18,
        marginRight: 20
    }
})

export default MainScreen