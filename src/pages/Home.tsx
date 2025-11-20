import { useUserQuery } from "../services/users/user.query"
import HomeComponent from "../components/HomeComponent"
import ProductComponent from "../components/ProductComponent"
import UserComponent from "../components/UserComponent"
import { useProductQuery } from "../services/products/product.query"

const Home = () => {
  const { data: products, isLoading: loadingProducts } = useProductQuery()
  const { data: users = [], isLoading: loadingUsers } = useUserQuery()

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-8">
      <HomeComponent />

      <section className="bg-gray-400/5  rounded-lg p-6 shadow-lg">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Recently Added Products
        </h2>
        
        {loadingProducts ? (
          <div className="text-gray-500 py-4">Loading products...</div>
        ) : (
          <div className="space-y-2">
            {(products || []).slice(0, 4).map((product) => (
              <ProductComponent key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>

      <section className="bg-white border-gray-950/5 rounded-lg p-6 shadow-lg">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Recently Joined Users
        </h2>
        {loadingUsers ? (
          <div className="text-gray-500 py-4">Loading users...</div>
        ) : (
          <div className="space-y-2">
            {users.slice(0, 4).map((user) => (
              <UserComponent key={user.id} user={user} />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}

export default Home
