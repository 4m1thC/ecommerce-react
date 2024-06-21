import { createContext, useState } from "react";
import PropTypes from 'prop-types'

export const ShoopingCartContext = createContext();

export const ShoopingCartProvider = ({children}) => {
  const [count, setCount] = useState(0);
  return (
    <ShoopingCartContext.Provider value={{
      count,
      setCount
     }}>
      {children}
    </ShoopingCartContext.Provider>
  )
}

ShoopingCartProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
