import { Link } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";

const Header = () => {
  const cart = useAppSelector((state) => state.cart);

  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">
        ShopZone
      </Link>
      <nav className="space-x-4">
        <Link to="/" className="hover:underline">
          Products
        </Link>
        <Link to="/cart" className="hover:underline">
          Cart ({cart.length})
        </Link>
      </nav>
    </header>
  );
};

export default Header;
