import {createContext, useReducer} from "react";
import {reducer} from "./reducer"

export const ShopContext = createContext(null);

const initialState = {
    goods: [],
    loading: true,
    order: [],
    isCartVisible: false,
    flashName: '',
};

const initState = (state) => state;

export const ContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState, initState);

    state.closeFlash = () => {
        dispatch({type: 'CLOSE_FLASH'});
    };

    state.removeItemFromCart = (itemId) => {
        dispatch({type: 'REMOVE_ITEM_FROM_CART', payload: {id: itemId} });
    };

    state.addToCart = (item) => {
        dispatch({type: 'ADD_TO_CART', payload: item });
    };

    state.increaseItemsQty = (itemId) => {
        dispatch({type: 'INCREASE_ITEMS_QTY', payload: {id: itemId}});
    };

    state.decreaseItemsQty = (itemId) => {
        dispatch({type: 'DECREASE_ITEMS_QTY', payload: {id: itemId}});
    };

    state.handleCartVisibility = () => {
        dispatch({type: 'HANDLE_CART_VISIBILITY'});
    };

    state.setGoods = (data) => {
        dispatch({type: 'SET_GOODS', payload: data});
    };


    return <ShopContext.Provider value={state}>
        {children}
    </ShopContext.Provider>
};
