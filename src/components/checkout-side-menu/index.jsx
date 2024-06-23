import { useContext } from "react";
import { Link } from "react-router-dom";

import { XCircleIcon } from "@heroicons/react/16/solid";

import { ShoppingCartContext } from "../../context";
import { OrderCard } from "../order-card";
import { totalPrice } from "../../utils/total-price";
import { formatNumber } from "../../utils/format-number";

const CheckoutSideMenu = () => {
  const {
    isCheckoutSideMenuOpen, closeCheckoutSideMenu,
    cartProducts, setCartProducts,
    count, setCount,
    order, setOrder
  } = useContext(ShoppingCartContext);

  const handleDelete = (id) => {
    const filteredProducts = cartProducts.filter(product => product.id != id);
    setCount(count - 1);
    setCartProducts(filteredProducts);
  }

  const handleCheckout = () => {
    const today = new Date();
    const orderToAdd = {
      date: today.toLocaleDateString(),
      products: cartProducts,
      totalProducts: cartProducts.length,
      totalPrice: totalPrice(cartProducts)
    }
    setOrder([...order, orderToAdd]);
    setCartProducts([]);
    setCount(0);
    closeCheckoutSideMenu();
  }

  return (
    <aside
      className={`${isCheckoutSideMenuOpen ? 'flex' : 'hidden'} top-[68px] overflow-y-scroll scrollbar-thumb-rounded
     flex flex-col fixed right-0 border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-68px)]`}>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>My Order</h2>
        <XCircleIcon
          className='h-6 w-6 text-black cursor-pointer'
          onClick={() => closeCheckoutSideMenu()}></XCircleIcon>
      </div>
      <div className="flex-1 p-6">
        {
          cartProducts.map((product) => {
            return <OrderCard key={product.id}
              id={product.id}
              price={product.price}
              title={product.title}
              image={product.image}
              handleDelete={handleDelete}
            />
          })
        }
      </div>
      <div className="px-6">
        <p className="flex justify-between items-center">
          <span className="font-light">Total:</span>
          <span className="font-medium text-2xl">${formatNumber(totalPrice(cartProducts), 2)}</span>
        </p>
        <Link to={"/my-orders/last"}>
          <button className="bg-black my-3 py-3 text-white w-full rounded-lg" onClick={() => handleCheckout()}>Checkout</button>
        </Link>
      </div>
    </aside>
  )
}

export { CheckoutSideMenu };
