import { createContext, useEffect, useState } from "react";
import { PropTypes } from 'prop-types'
import { apiUrl } from "../api";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => {
    setIsProductDetailOpen(true);
    setIsCheckoutSideMenuOpen(false);
  };
  const closeProductDetail = () => setIsProductDetailOpen(false);

  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const openCheckoutSideMenu = () => {
    setIsCheckoutSideMenuOpen(true);
    setIsProductDetailOpen(false);
  };
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

  const [productShow, setProductShow] = useState({
    id: "",
    title: "",
    price: "",
    category: "",
    description: "",
    image: "",
  });

  const [cartProducts, setCartProducts] = useState([]);

  const [order, setOrder] = useState([]);

  const [products, setProducts] = useState(null);

  const [categories, setCategories] = useState(null);

  const [filteredProducts, setFilteredProducts] = useState(null);

  const [searchInput, setSearchInput] = useState('');

  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    fetch(`${apiUrl}/products`)
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, [])

  useEffect(() => {
    fetch(`${apiUrl}/products/categories`)
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(err => console.error(err));
  }, [])

  useEffect(() => {
    let updatedProducts = products;
    if (selectedCategory) {
      updatedProducts = products.filter(
        (item) => item.category === selectedCategory
      );
    }
    if (searchInput) {
      updatedProducts = updatedProducts.filter((item) =>
        item.title.toLowerCase().includes(searchInput.toLowerCase())
      );
    }
    setFilteredProducts(updatedProducts);
  }, [products, searchInput, selectedCategory]);

  return (
    <ShoppingCartContext.Provider value={{
      count, setCount,
      menuOpen, setMenuOpen,
      isProductDetailOpen, openProductDetail, closeProductDetail,
      productShow, setProductShow,
      cartProducts, setCartProducts,
      isCheckoutSideMenuOpen, openCheckoutSideMenu, closeCheckoutSideMenu,
      order, setOrder,
      products, setProducts,
      categories,
      filteredProducts, setFilteredProducts,
      searchInput, setSearchInput,
      selectedCategory, setSelectedCategory
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}

ShoppingCartProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
