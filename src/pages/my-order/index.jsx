import { useContext } from "react";
import { Link } from "react-router-dom";

import { ChevronDoubleLeftIcon } from "@heroicons/react/16/solid";

import { Layout } from "../../components/layout";
import { OrderCard } from "../../components/order-card";
import { ShoppingCartContext } from "../../context";

function MyOrder() {
  const { order } = useContext(ShoppingCartContext);
  const currentPath = window.location.pathname;
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1);
  if (index === 'last') index = order?.length - 1;

  return (
    <Layout>
      <div className="flex relative justify-center items-center w-80 mb-5">
        <Link to={'/my-orders/'} className={"absolute left-0"}>
          <ChevronDoubleLeftIcon className="h-6 w-6 cursor-pointer" />
        </Link>
        <h1>My Order</h1>
      </div>
      <div className="flex flex-col w-80 justify-center items-center">
        {
          order && order.length > 0 ? order[index]?.products.map((product) => {
            return <OrderCard key={product.id}
              id={product.id}
              price={product.price}
              title={product.title}
              image={product.image}
            />
          })
            : <p>No hay productos en la orden.</p>
        }
      </div>
    </Layout>
  )
}

export { MyOrder };
