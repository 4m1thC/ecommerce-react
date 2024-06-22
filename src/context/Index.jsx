import { createContext, useState } from "react";
import PropTypes from 'prop-types'

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  const [productShow, setProductShow] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
  });

  return (
    <ShoppingCartContext.Provider value={{
      count,
      setCount,
      isProductDetailOpen,
      openProductDetail,
      closeProductDetail,
      productShow,
      setProductShow,
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}

ShoppingCartProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
