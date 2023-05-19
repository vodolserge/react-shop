import {useEffect, useState} from "react";
import {Preloader} from "./Preloader";
import {GoodsList} from "./GoodsList";
import {apiKey, apiUrl} from "../helpers/params"
import {Cart} from "./Cart"
import {CartList} from "./CartList"

/**
 * Shop component.
 */
function Shop () {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isCartVisible, setCartVisible] = useState(false);

    const addToCart = (item) => {
        const itemIdx = order.findIndex((orderItem) => orderItem.id === item.id);

        if (itemIdx < 0) {
            const newItem = {
                ...item,
                qty: 1
            };

            setOrder([...order, newItem]);
        } else {
            const newOrder = order.map((orderItem, idx) => {
                return (idx === itemIdx) ? {
                    ...orderItem,
                    qty: orderItem.qty + 1
                } : orderItem;
            });

            setOrder(newOrder);
        }
    }

    const increaseItemsQty = (itemId) => {
        const newOrder = order.map((orderItem) => {
            if (orderItem.id === itemId) {
                const newQty = orderItem.qty + 1;

                return  {...orderItem, qty: newQty};
            }

            return orderItem;
        });

        setOrder(newOrder);
    }

    const decreaseItemsQty = (itemId) => {
        const newOrder = order.map((orderItem) => {
            if (orderItem.id === itemId) {
                const newQty = orderItem.qty - 1;

                return  {
                    ...orderItem,
                    qty: newQty >= 0 ? newQty : 0,
                };
            }

            return orderItem;
        });

        setOrder(newOrder);
    }

    const handleCartVisibility = () => {
        setCartVisible(!isCartVisible);
    }

    const removeItemFromCart = (cartItemId) => {
        const newOrder = order.filter((orderItem) => orderItem.id !== cartItemId);
        setOrder(newOrder);
    }

    useEffect(function getGoods () {
        fetch(apiUrl, {
            headers: {
                'Authorization': apiKey
            }
        })
            .then(res => res.json())
            .then((data) => {
                data['shop'] && setGoods(data['shop']);
                setLoading(false);
            })
    }, []);

    return (
        <main className="container content">
            <Cart qty={order.length}
                  handleCartVisibility={handleCartVisibility}
            />
            {
                loading ? <Preloader/> : <GoodsList goods={goods} addToCart={addToCart}/>
            }
            {
                isCartVisible
                && <CartList qty={order.length}
                             order={order}
                             handleCartVisibility={handleCartVisibility}
                             removeItemFromCart={removeItemFromCart}
                             increaseItemsQty={increaseItemsQty}
                             decreaseItemsQty={decreaseItemsQty}
                />
            }
        </main>
    );
}

export {Shop};
