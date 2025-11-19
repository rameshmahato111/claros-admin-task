import Pagination from "../components/Pagination";
import ProductComponent from "../components/ProductComponent";
import { useProductQuery } from "../services/products/product.query";

const Product = () => {
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
        Something went wrong. Please try again.
      </p>
    );
  console.log("this is the product list in the component", products);
  return (
    <section className="md:p-4 p-2 rounded-lg ring shadow-lg ring-gray-900/5 space-y-4 py-5">
      <div className="w-full overflow-x-scroll">
        <ul className="w-auto mx-auto grid grid-cols-4 rounded-lg p-2 font-poppins md:text-base text-sm">
          <li>Products</li>
          <li>Category</li>
          <li>Price</li>

          <li>Action</li>
        </ul>
        <Pagination
          data={products ?? []}
          pageSize={5}
          renderRow={(product) => (
            <ProductComponent product={product} />
          )}
        />
      </div>
    </section>
  );
};

export default Product;
