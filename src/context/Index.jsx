import { createContext, useState } from "react";
import PropTypes from 'prop-types'

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

  const [productShow, setProductShow] = useState({
    id: "",
    title: "",
    price: "",
    category: "",
    description: "",
    image: "",
  });

  const [cartProducts, setCartProducts] = useState([])
  return (
    <ShoppingCartContext.Provider value={{
      count, setCount,
      isProductDetailOpen, openProductDetail, closeProductDetail,
      productShow, setProductShow,
      cartProducts, setCartProducts,
      isCheckoutSideMenuOpen, openCheckoutSideMenu, closeCheckoutSideMenu
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}

ShoppingCartProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
