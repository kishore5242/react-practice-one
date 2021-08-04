import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchCart, saveCart } from "../store/action-creators";
import Card from "../UI/Card";
import CartItem from "./CartItem";


function Cart() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(saveCart(cart));
  }, [cart, dispatch]);

  return (
    <Card>
      <h2>Cart</h2>
      {cart.items.map((item) => (
        <CartItem key={item.id} item={item}></CartItem>
      ))}
    </Card>
  );
}

export default Cart;
