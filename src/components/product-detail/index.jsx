import { useContext } from "react";
import { XCircleIcon } from "@heroicons/react/16/solid";
import { ShoppingCartContext } from "../../context";
import { CurrencyDollarIcon } from "@heroicons/react/24/outline";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";

const ProductDetail = () => {
  const { isProductDetailOpen, closeProductDetail, productShow, count, setCount } = useContext(ShoppingCartContext);
  const { image, title, price, description } = { ...productShow }

  return (
    <aside className={`${isProductDetailOpen ? 'flex' : 'hidden'} overflow-y-scroll scrollbar-thumb-rounded
     flex flex-col fixed right-0 border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-68px)]`}>
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <XCircleIcon onClick={() => closeProductDetail()} className="size-6 cursor-pointer" />
      </div>
      <figure className="px-6">
        <img src={image} alt={title} className="w-full h-full rounded-lg object-contain" />
      </figure>
      <div className="flex flex-col p-6">
        <button className="flex items-center justify-center bg-gray-300 hover:bg-green-500 transition-colors
         hover:text-white duration-300 ease-in-out rounded-lg cursor-pointer gap-2 p-1 shadow-xl"
          onClick={() => setCount(count + 1)}
        >
          <ShoppingBagIcon className="size-4" />
          Add to cart
        </button>
        <div className="flex items-center justify-end gap-1 my-2">
          <span className="font-medium text-md">{title}</span>
          <p className="flex bg-gray-600 text-white shadow-lg rounded-lg p-1">
            <CurrencyDollarIcon className="size-6" />
            <span>{price}</span>
          </p>
        </div>
        <span className="font-light text-sm">{description}</span>
      </div>
    </aside>
  )
}

export { ProductDetail };
