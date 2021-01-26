import {getData} from "../api/api";

const ADD_PRODUCTS = 'ADD_PRODUCTS'

const initialState = {
    products: [],
    loading: true
}

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCTS: {
            return {
                ...state,
                products: action.newProducts,
                loading: false
            }
        }
        default: return state
    }
}

export const getProducts = () => {
    return async dispatch =>{
        let newProducts =  await getData.getProducts()
        dispatch({type: ADD_PRODUCTS, newProducts})
    }
}

export default productsReducer