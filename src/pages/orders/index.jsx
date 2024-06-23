import { useContext } from "react";
import { Link } from "react-router-dom";

import { Layout } from "../../components/layout";
import { OrderSCard } from "../../components/orders-card";
import { ShoppingCartContext } from "../../context";


function Orders() {

  const { order } = useContext(ShoppingCartContext);

  return (
    <Layout>
      <div className="flex justify-center items-center w-80 mb-5">
        <h1>My Orders</h1>
      </div>
      {
        order.map((order, index) => {
          return (
            <Link key={index} to={`/my-orders/${index}`} >
              <OrderSCard
                date={order.date}
                totalProducts={order.totalProducts}
                totalPrice={order.totalPrice} />
            </Link>
          );
        })
      }
    </Layout >
  )
}

export { Orders };
