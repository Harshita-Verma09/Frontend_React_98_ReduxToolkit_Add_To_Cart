import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, increasedQty, decreaseQty } from '../cartSlice';

const ShowItems = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();

  return (
    <div className="p-4 mt-8">
      <h2 className="text-2xl font-bold mb-4"> Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map(item => (
            <div
              key={item.id}
              className="border rounded-xl shadow p-4 flex justify-between items-center"
            >
              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-500">Quantity: {item.quantity}</p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => dispatch(increasedQty(item.id))}
                  className="px-3 py-1 bg-green-500 hover:bg-green-600 text-white rounded"
                >
                  +
                </button>
                <button
                  onClick={() => dispatch(decreaseQty(item.id))}
                  className="px-3 py-1 bg-yellow-500 hover:bg-yellow-600 text-white rounded"
                >
                  -
                </button>
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ShowItems;
