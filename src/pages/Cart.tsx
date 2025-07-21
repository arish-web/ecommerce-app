import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { removeFromCart } from "../features/cartSlice";
import { Product } from "../types/Product";

const Cart = () => {
  const cart = useAppSelector((state) => state.cart as Product[]);
  const dispatch = useAppDispatch();

  const total = cart
    .reduce((sum, item) => sum + item.price * item.quantity!, 0)
    .toFixed(2);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border p-4 rounded"
            >
              <div>
                <p className="font-semibold">{item.title}</p>
                <p>Qty: {item.quantity}</p>
                <p>${(item.price * item.quantity!).toFixed(2)}</p>
              </div>
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="bg-red-500 text-white px-4 py-1 rounded"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="text-right font-bold">Total: ${total}</div>
        </div>
      )}
    </div>
  );
};

export default Cart;
