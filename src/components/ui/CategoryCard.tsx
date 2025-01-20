import { Link } from "react-router-dom";

interface Category {
  id: number;
  title: string;
  image: string;
}

interface CategoryCardProps {
  category: Category;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  const { id, title, image } = category;
  return (
    <Link
      to={`/categories/${id}`}
      className="flex flex-col items-center justify-center text-center gap-y-2"
    >
      <div className="w-12 h-12 rounded overflow-hidden border border-gray-200 ">
        <img src={image} alt={title} className="object-contain w-full h-full" />
      </div>
      <span className="text-sm font-semibold text-gray-600 tracking-tight">
        {title}
      </span>
    </Link>
  );
};

export default CategoryCard;
