import { useContext } from "react";
import { XCircleIcon } from "@heroicons/react/16/solid";
import { ShoppingCartContext } from "../../context";
import { OrderCard } from "../order-card";

const CheckoutSideMenu = () => {
  const { isCheckoutSideMenuOpen, closeCheckoutSideMenu, cartProducts } = useContext(ShoppingCartContext);
  return (
    <aside
      className={`${isCheckoutSideMenuOpen ? 'flex' : 'hidden'} overflow-y-scroll scrollbar-thumb-rounded top-[68px]
     flex flex-col fixed right-0 border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-68px)]`}>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>My Order</h2>
        <div>
          <XCircleIcon
            className='h-6 w-6 text-black cursor-pointer'
            onClick={() => closeCheckoutSideMenu()}></XCircleIcon>
        </div>
      </div>
      <div className="p-6">
        {
          cartProducts.map((product) => {
            return <OrderCard key={product.id}
              price={product.price}
              title={product.title}
              image={product.image}
            />
          })
        }
      </div>
    </aside>
  )
}

export { CheckoutSideMenu };
