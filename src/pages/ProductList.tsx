import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";
import { Product } from "../types/Product";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get<Product[]>(
        "https://fakestoreapi.com/products"
      );
      setProducts(res.data);
    };
    fetchProducts();
  }, []);

  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = filtered.slice(
    startIndex,
    startIndex + productsPerPage
  );

  return (
    <div className="p-4">
      <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-4">
        {currentProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(filtered.length / productsPerPage)}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default ProductList;
