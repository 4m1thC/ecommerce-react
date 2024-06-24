import { useContext } from 'react';
import { NavItem } from '../nav-item'
import { ShoppingCartContext } from '../../context';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import { Bars4Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  let activeStyle = {
    textDecoration: "underline"
  }
  const {
    count,
    menuOpen, setMenuOpen,
    openCheckoutSideMenu,
    categories,
    setSelectedCategory
  } = useContext(ShoppingCartContext);

  const actionMenu = (action) => {
    setSelectedCategory(action);
    setMenuOpen(!menuOpen);
  }

  return (
    <nav className='bg-white flex flex-col lg:flex-row top-0 justify-between items-center fixed w-full z-10 py-5 px-8 text-sm font-light'>
      <div className='flex justify-between items-center w-full lg:w-16'>
        <div className='font-semibold text-lg' onClick={() => actionMenu('')}>
          <NavItem to='/'>
            Shopi
          </NavItem>
        </div>
        <div className='lg:hidden flex items-center'>
          <button onClick={() => setMenuOpen(!menuOpen)} className='text-gray-800'>
            {menuOpen ? <XMarkIcon className='w-6 h-6' /> : <Bars4Icon className='w-6 h-6' />}
          </button>
        </div>
      </div>
      <div className={`${menuOpen ? 'flex flex-col' : 'hidden'} lg:flex lg:flex-row justify-between w-full items-center `}>
        <ul className='flex flex-col mb-3 lg:mb-0 lg:flex-row items-center gap-3'>
          <li onClick={() => actionMenu('')}>
            <NavItem to='/' activeStyle={activeStyle} >
              All
            </NavItem>
          </li>
          {
            categories?.map((category, index) => (
              <li key={index} onClick={() => actionMenu(`${category}`)}>
                <NavItem to={`/category/${category}`} activeStyle={activeStyle} >
                  {category}
                </NavItem>
              </li>
            ))
          }
        </ul>
        <ul className='flex flex-col lg:flex-row items-center gap-3'>
          <li className='text-black/60'>
            amith@gmail.com
          </li>
          <li>
            <NavItem to='/my-orders' activeStyle={activeStyle}>
              My Orders
            </NavItem>
          </li>
          <li>
            <NavItem to="/my-account" activeStyle={activeStyle}>
              My Account
            </NavItem>
          </li>
          <li>
            <NavItem to='/sign-in' activeStyle={activeStyle}>
              Sing In
            </NavItem>
          </li>
          <li onClick={() => {
            openCheckoutSideMenu();
            setMenuOpen(!menuOpen);
          }}
            className='flex bg-gray-100 p-1 rounded-lg shadow-sm cursor-pointer'>
            <ShoppingCartIcon className='size-5 items-center justify-center' />
            <span>{count}</span>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export { Navbar }
