import { useDispatch } from 'react-redux';
import { addToCart } from '../cartSlice';

const AddToCard = ({ product }) => {
  const dispatch = useDispatch();

  if (!product) return null;

  return (
    <div className="border p-4 rounded shadow mb-4">
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <button
        onClick={() => dispatch(addToCart(product))}
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCard;
