import "./CartScreen.css";
import CartItem from "../components/CartItem";

const CartScreen=()=> {
    return (
        <div className="cartscreen">
            <div className="cartscreen_left">
                <h2>
                    Shopping Cart
                </h2>
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
            </div>
            <div className="cartscreen_right">
                <div className="cartscreen_info">
                <p>Subtotal </p>
                <p>$898</p>
                </div>
                <div>
                    <button>Proceed to checkout</button>
                </div>
            </div>
        </div>
    );
}

export default CartScreen;