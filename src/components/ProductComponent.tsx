import Button from "./Button";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import type Product from "../types/product";

interface ProductComponentProps {
  product: Product;
}

const ProductComponent = ({ product }: ProductComponentProps) => {
  return (
    <div
      className="items-center grid grid-cols-4 md:gap-4 gap-2 py-4 text-sm font-poppins px-2 rounded-lg ring shadow-lg ring-gray-900/5 my-4"
    >
      <div className="capitalize flex items-center gap-2">
        <img
          src={product.image}
          className="size-8 object-contain"
          alt={product.title}
        />
        <span className="md:inline-block hidden">
          {product.title.slice(0, 10)}...
        </span>
      </div>
      <div className="capitalize md:text-base text-sm">
        {product.category}
      </div>
      <div className="md:text-base text-sm">{product.price}</div>

      <div className="flex items-center md:gap-2 -ml-5">
        <Button
          icon={
            <FaEdit className="bg-green-500 rounded-full p-1 md:text-2xl text-xl text-white" />
          }
        />
        <Button
          icon={
            <MdDelete className="bg-red-500 rounded-full p-1 md:text-2xl text-xl text-white" />
          }
        />
      </div>
    </div>
  );
};

export default ProductComponent;
