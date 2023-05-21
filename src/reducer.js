export function reducer (state, {type, payload}) {
    switch (type) {
        case 'SET_GOODS': {
            return {
                ...state,
                goods: payload || [],
                loading: false,
            };
        }
        case 'CLOSE_FLASH':
            return {
                ...state,
                flashName: ''
            };
        case 'REMOVE_ITEM_FROM_CART':
            return {
                ...state,
                order: state.order.filter((orderItem) => orderItem.id !== payload.id),
            };
        case 'ADD_TO_CART': {
            const itemIdx = state.order.findIndex((orderItem) => orderItem.id === payload.id);

            let newOrder = null;

            if (itemIdx < 0) {
                const newItem = {
                    ...payload,
                    qty: 1
                };

                newOrder = [...state.order, newItem];
            } else {
                newOrder = state.order.map((orderItem, idx) => {
                    return (idx === itemIdx) ? {
                        ...orderItem,
                        qty: orderItem.qty + 1
                    } : orderItem;
                });
            }

            return {
                ...state,
                order: newOrder,
                flashName: payload.name,
            };
        }
        case 'INCREASE_ITEMS_QTY': {
            return {
                ...state,
                order: state.order.map((orderItem) => {
                    if (orderItem.id === payload.id) {
                        const newQty = orderItem.qty + 1;

                        return  {...orderItem, qty: newQty};
                    }

                    return orderItem;
                }),
            };
        }
        case 'DECREASE_ITEMS_QTY': {
            return {
                ...state,
                order: state.order.map((orderItem) => {
                    if (orderItem.id === payload.id) {
                        const newQty = orderItem.qty - 1;

                        return  {
                            ...orderItem,
                            qty: newQty >= 0 ? newQty : 0,
                        };
                    }

                    return orderItem;
                }),
            };
        }
        case 'HANDLE_CART_VISIBILITY': {
            return {
                ...state,
                isCartVisible: !state.isCartVisible,
            };
        }
        default:
            return state;
    }
}