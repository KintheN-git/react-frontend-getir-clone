import { useEffect, useState } from "react";
import productData from "../api/products.json";
import ProductCard from "./ui/ProductCard";

interface Product {
  id: number;
  title: string;
  image: string;
  alt: string;
  price: number;
}

const Favorites = () => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    setProducts(productData);
  }, []);

  return (
    <section className="bg-white py-4">
      <div className="container mx-auto">
        <h3 className="text-sm font-semibold mb-3 text-gray-700">Favoriler</h3>

        <div className="grid grid-cols-3 2xl:grid-cols-8 xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 gap-1 gap-y-10 bg-white rounded-lg">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Favorites;
