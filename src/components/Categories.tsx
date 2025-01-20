import { useEffect, useState } from "react";
import categoryData from "../api/categories.json";
import CategoryCard from "./ui/CategoryCard";

interface Category {
  id: number;
  title: string;
  image: string;
}

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  useEffect(() => {
    setCategories(categoryData);
  }, []);

  return (
    <section className="bg-white py-4">
      <div className="container mx-auto px-[150px]">
        <h3 className="text-sm font-semibold mb-3 text-gray-700">
          Kategoriler
        </h3>
        <div className="grid grid-cols-10 gap-4 gap-y-10 ">
          {categories &&
            categories.map((category, index) => (
              <CategoryCard key={index} category={category} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
