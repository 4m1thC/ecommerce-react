import { useContext } from "react";
import { XCircleIcon } from "@heroicons/react/16/solid";
import { ShoppingCartContext } from "../../context";
import { CurrencyDollarIcon } from "@heroicons/react/24/outline";
import { ShoppingBagIcon, MinusCircleIcon } from "@heroicons/react/24/outline";

const ProductDetail = () => {
  const {
    isProductDetailOpen, closeProductDetail,
    productShow,
    count, setCount,
    cartProducts, setCartProducts } = useContext(ShoppingCartContext);
  const { id, image, title, category, price, description } = { ...productShow };

  const addProductsToCart = (event, idSend, priceSend, titleSend, imageSend, categorySend, descriptionSend) => {
    event.stopPropagation();
    setCount(count + 1);
    const productSend = {
      id: idSend,
      price: priceSend,
      title: titleSend,
      image: imageSend,
      category: categorySend,
      description: descriptionSend
    };
    setCartProducts([...cartProducts, productSend]);
  }

  const renderButton = (idSend) => {
    const isInCart = cartProducts.filter((product) => product.id === idSend).length > 0;
    if (isInCart) {
      return (
        <button className="flex items-center justify-center bg-gray-300 hover:bg-red-500 transition-colors
         hover:text-white duration-300 ease-in-out rounded-lg cursor-pointer gap-2 p-1 shadow-xl"
        >
          <MinusCircleIcon className="size-4" />
          Remove to cart?
        </button>
      )
    }
    return (
      <button className="flex items-center justify-center bg-gray-300 hover:bg-green-500 transition-colors
         hover:text-white duration-300 ease-in-out rounded-lg cursor-pointer gap-2 p-1 shadow-xl"
        onClick={() => addProductsToCart(event, id, price, title, image, category, description)}
      >
        <ShoppingBagIcon className="size-4" />
        Add to cart
      </button>
    )
  }

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
        {renderButton(id)}
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
