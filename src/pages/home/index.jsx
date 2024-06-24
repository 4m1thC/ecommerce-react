import { useContext } from "react";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

import { Layout } from "../../components/layout";
import { Card } from "../../components/card"
import { ProductDetail } from "../../components/product-detail";
import { ShoppingCartContext } from "../../context";

const Home = () => {
  const { products, filteredProducts, searchInput, selectedCategory, setSearchInput } = useContext(ShoppingCartContext);

  const renderView = () => {
    let itemsToRender = products;
    if (searchInput?.length > 0 || selectedCategory?.length > 0) {
      itemsToRender = filteredProducts;
    }
    if (itemsToRender?.length > 0) {
      return (
        <div className="grid transition duration-500 ease-in-out justify-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
          justify-items-center gap-4 w-full max-w-screen-lg">
          {
            itemsToRender?.map((product) => (
              <Card key={product.id}
                id={product.id}
                price={product.price}
                title={product.title}
                image={product.image}
                category={product.category}
                description={product.description}
              />
            ))
          }
        </div>
      );
    } else {
      return <div className="flex flex-col transition duration-500 ease-in-out justify-center items-center">
        <MagnifyingGlassIcon />
        <span>
          No results found
        </span>
      </div>;
    }
  };

  return (
    <Layout>
      <div className="flex justify-center items-center w-80 mb-5">
        <h1 className="font-medium text-2xl">Exclusive products</h1>
      </div>
      <input
        type="text"
        placeholder="Search a product"
        className="border-b-2 border-gray-500 focus:border-gray-800 focus:outline-none
         rounded-lg w-full md:w-80 p-2 mb-4 shadow-lg"
        onChange={(event) => setSearchInput(event.target.value)}
      />
      {renderView()}
      <ProductDetail />
    </Layout>
  )
}

export { Home };
