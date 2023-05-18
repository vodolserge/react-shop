import {useEffect, useState} from "react";
import {Preloader} from "./Preloader";
import {GoodsList} from "./GoodsList";
import {apiKey, apiUrl} from "../helpers/params"

/**
 * Shop component.
 */
function Shop () {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);


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
            {
                loading ? <Preloader/> : <GoodsList goods={goods}/>
            }
        </main>
    );
}

export {Shop};
