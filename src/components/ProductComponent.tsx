import { useProductQuery } from "../services/products/product.query";

const ProductComponent = () => {
  const { data: products, isLoading, isError } = useProductQuery();
  if (isLoading)
    return (
      <p className="flex items-center justify-center min-h-screen">
        Loading please wait...
      </p>
    );
  if (isError)
    return (
      <p className="flex items-center justify-center min-h-screen">
        something went wrong. Please try again.
      </p>
    );
  console.log(products);


  return <div>


  </div>;
};

export default ProductComponent;
