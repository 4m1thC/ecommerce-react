import { PropTypes } from 'prop-types';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../context';
import { PlusIcon, CurrencyDollarIcon, CheckIcon } from '@heroicons/react/20/solid';

const Card = ({ id, price, title, image, category, description }) => {
  const {
    count, setCount,
    openProductDetail, setProductShow,
    cartProducts, setCartProducts
  } = useContext(ShoppingCartContext);

  const showProduct = (idSend, priceSend, titleSend, imageSend, descriptionSend) => {
    openProductDetail();
    setProductShow({ id: idSend, price: priceSend, title: titleSend, image: imageSend, description: descriptionSend });
  }

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

  const renderIcon = (idSend) => {
    const isInCart = cartProducts.filter((product) => product.id === idSend).length > 0;
    if (isInCart) {
      return (
        <CheckIcon className="size-8 absolute top-0 right-0 flex justify-center items-center
           bg-gray-500 text-white hover:bg-gray-300 hover:text-black w-6 h-6 rounded-full m-2 p-1"
        />
      )
    }
    return (
      <PlusIcon className="size-8 absolute top-0 right-0 flex justify-center items-center
         bg-gray-100 hover:bg-gray-300 w-6 h-6 rounded-full m-2 p-1" onClick={(event) => {
          addProductsToCart(event, id, price, title, image, category, description);
        }} />
    )
  }


  return (
    <div className="bg-gray-100 hover:bg-gray-300 transition-colors
      duration-500 ease-in-out shadow-2xl cursor-pointer w-56 h-60 rounded-lg"
      onClick={() => showProduct(id, price, title, image, description)}
    >
      <figure className="relative mb-2 w-full h-3/4">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {category}
        </span>
        <img className="w-full h-full object-fill rounded-lg" src={image} alt={title} />
        {renderIcon(id)}
      </figure>
      <p className="flex justify-between px-3 py-1">
        <span className="text-sm font-light truncate">{title}</span>
        <span className="flex items-center shadow-md text-lg font-medium bg-gray-200 rounded-lg p-0.5">
          <CurrencyDollarIcon className='size-6' />
          <span>
            {price}
          </span>
        </span>
      </p>
    </div>
  )
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  category: PropTypes.string,
  description: PropTypes.string,
};


export { Card };
