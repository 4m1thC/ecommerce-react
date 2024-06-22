import { useContext } from "react";
import { XCircleIcon } from "@heroicons/react/16/solid";
import { ShoppingCartContext } from "../../context";

const CheckoutSideMenu = () => {
  const { isCheckoutSideMenuOpen, closeCheckoutSideMenu } = useContext(ShoppingCartContext);
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
    </aside>
  )
}

export { CheckoutSideMenu };
