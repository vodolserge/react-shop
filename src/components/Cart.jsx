/**
 * `Cart` component.
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
function Cart (props) {
    const {qty, handleCartVisibility = Function.prototype} = props;

    return (
        <div className="cart blue darken-4 white-text" onClick={handleCartVisibility}>
            <i  className="material-icons">shopping_cart</i>
            {qty ? <span className="cart-qty">{qty}</span> : null}
        </div>
    );
};

export {Cart};
