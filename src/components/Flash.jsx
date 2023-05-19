import {useEffect} from "react";
/**
 * `Flash` component.
 * It shows flashing message after an item added to the Shopping cart.
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
function Flash (props) {
    const {name, close = Function.prototype} = props;


    useEffect(() => {
        const timerId = setTimeout(close, 3000);

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
