import {useEffect, useContext} from "react";
import {ShopContext} from "../context";

/**
 * `Flash` component.
 * It shows flashing message after an item added to the Shopping cart.
 *
 * @returns {JSX.Element}
 * @constructor
 */
function Flash () {
    const {closeFlash, flashName: name = ''} = useContext(ShopContext);

    useEffect(() => {
        const timerId = setTimeout(closeFlash, 3000);

        return () => {
            clearTimeout(timerId);
        }
        // eslint-disable-next-line
    }, [name]);

    return (
        <div id="toast-container">
            <div className="toast">
                {name} added to the Cart.
            </div>
        </div>
    );
};

export {Flash};
