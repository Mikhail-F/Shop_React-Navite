import {getData} from "../api/api";

const ADD_PRODUCTS = 'ADD_PRODUCTS'
const SET_ERROR = 'SET_ERROR'
const DELETE_ERROR = 'DELETE_ERROR'

const initialState = {
    products: [],
    loading: true,
    error: false
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
        case SET_ERROR: {
            return {
                ...state,
                error: true,
                loading: false
            }
        }
        case DELETE_ERROR: {
            return {
                ...state,
                error: false,
                loading: true
            }
        }
        default:
            return state
    }
}

export const getProducts = () => dispatch => {
    getData.getProducts()
        .then(result => {
            let newProducts = result.data.items
            dispatch({type: ADD_PRODUCTS, newProducts})
        })
        .catch(() => {
            dispatch({type: SET_ERROR})
        })
}

export const deleteError = () => ({type: DELETE_ERROR})

export default productsReducer