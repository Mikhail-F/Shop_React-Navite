import React, {useEffect} from 'react'
import {View, ActivityIndicator, FlatList, StyleSheet} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "../Redux/productsReducer";
import Product from "../components/Product";


const MainScreen = () => {
    let dispatch = useDispatch()
    let loading = useSelector(state => state.products.loading)
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
    }
})

export default MainScreen