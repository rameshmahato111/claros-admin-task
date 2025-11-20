import { useSearchParams } from "react-router-dom";
import Pagination from "../components/Pagination";
import ProductComponent from "../components/ProductComponent";
import SearchComponent from "../components/SearchComponent";
import { useProductQuery } from "../services/products/product.query";
import Button from "../components/Button";
import { PiPlus } from "react-icons/pi";

const Product = () => {
  const { data: products, isLoading, isError } = useProductQuery();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get("search") || "";

  const filteredProducts = (products ?? []).filter((product) => {
    if (!searchTerm.trim()) return true;
    const term = searchTerm.toLowerCase();
    return (
      product.title.toLowerCase().includes(term) ||
      product.category.toLowerCase().includes(term)
    );
  });

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

  return (
    <section className="md:p-4 p-2 rounded-lg ring shadow-lg ring-gray-900/5 space-y-4 py-5 mx-2 mt-10">
      <h1>All products</h1>
      <div className=" md:flex items-center justify-between mb-4">
        <SearchComponent
          onSearch={(value) => {
            if (value.trim()) {
              setSearchParams({ search: value });
            } else {
              setSearchParams({});
            }
          }}
          placeholder="Search products"
          delay={300}
          defaultValue={searchTerm}
        />
        <div className="md:mt-0 mt-3"> 
          <Button children={`Add Product`} icon={<PiPlus/>} className="border bg-gray-200"/>
        </div>
      </div>
      <div className="w-full overflow-x-scroll">
        <ul className="w-auto mx-auto grid grid-cols-4 rounded-lg p-2 font-poppins md:text-base text-sm font-semibold border-b pb-2">
          <li>Products</li>
          <li>Category</li>
          <li>Price</li>
          <li>Action</li>
        </ul>
        <Pagination
          data={filteredProducts}
          pageSize={5}
          renderRow={(product) => <ProductComponent product={product} />}
        />
      </div>
    </section>
  );
};

export default Product;





