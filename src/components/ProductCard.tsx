import { Product } from "../types/Product";
import { useAppDispatch } from "../redux/hooks";
import { addToCart } from "../features/cartSlice";
import Notiflix from "notiflix";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const dispatch = useAppDispatch();

  return (
    <div className="border rounded-xl p-4 shadow">
      <img
        src={product.image}
        alt={product.title}
        className="h-40 mx-auto object-contain"
      />
      <h2 className="font-semibold text-lg mt-2">{product.title}</h2>
      <p className="text-gray-600">${product.price}</p>
      <button
        onClick={() => {
          dispatch(addToCart(product));
          Notiflix.Notify.success(`${product.title} added to cart!`);
        }}
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
