import { GoPlus } from "react-icons/go";
interface Product {
  id: number;
  title: string;
  image: string;
  alt: string;
  price: number;
}
const ProductCard = ({ product }: { product: Product }) => {
  const { title, image, alt, price } = product;
  return (
    <div className="flex flex-col gap-y-1 items-center text-center text-sm font-semibold p-3 relative">
      <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-lg flex items-center justify-center text-brand-color border border-gray-200 shadow-md transition-all hover:bg-brand-color hover:text-brand-yellow hover:border-brand-color ">
        <GoPlus size={22} className="" />
      </button>
      <div className="w-[120px] h-[120px] rounded overflow-hidden">
        <img src={image} alt={title} className="w-full h-full" />
      </div>
      <div className=" text-brand-color">₺{price}</div>
      <div className=" text-gray-900">{title}</div>
      <div className=" text-gray-400">{alt}</div>
    </div>
  );
};

export default ProductCard;
