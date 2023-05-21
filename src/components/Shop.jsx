import {useEffect, useContext} from "react";
import {Preloader} from "./Preloader";
import {GoodsList} from "./GoodsList";
import {apiKey, apiUrl} from "../helpers/params"
import {Cart} from "./Cart"
import {CartList} from "./CartList"
import {Flash} from "./Flash"
import {ShopContext} from "../context"

/**
 * Shop component.
 */
function Shop () {
    const {flashName, setGoods, loading, isCartVisible} = useContext(ShopContext);

    useEffect(function getGoods () {
        fetch(apiUrl, {
            headers: {
                'Authorization': apiKey
            }
        })
            .then(res => res.json())
            .then((data) => {
                setGoods(data['shop'])
            })
    });

    return (
        <main className="container content">
            <Cart/>
            {loading ? <Preloader/> : <GoodsList/>}
            {isCartVisible && <CartList/>}
            {flashName && <Flash/>}
        </main>
    );
}

export {Shop};
