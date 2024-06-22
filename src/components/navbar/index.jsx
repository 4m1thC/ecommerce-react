import { useContext } from 'react';
import { NavItem } from '../nav-item'
import { ShoppingCartContext } from '../../context';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
  let activeStyle = {
    textDecoration: "underline"
  }
  const { count, openCheckoutSideMenu } = useContext(ShoppingCartContext);

  return (
    <nav className='bg-white flex top-0 justify-between items-center fixed w-full z-10 py-5 px-8 text-sm font-light'>
      <ul className='flex items-center gap-3'>
        <li className='font-semibold text-lg'>
          <NavItem to='/'>
            Shopi
          </NavItem>
        </li>
        <li>
          <NavItem to='/' activeStyle={activeStyle}>
            All
          </NavItem>
        </li>
        <li>
          <NavItem to="/clothes" activeStyle={activeStyle}>
            Clothes
          </NavItem>
        </li>
        <li>
          <NavItem to='/electronics' activeStyle={activeStyle}>
            Electronics
          </NavItem>
        </li>
        <li>
          <NavItem to='/furnitures' activeStyle={activeStyle}>
            Furnitures
          </NavItem>
        </li>
        <li>
          <NavItem to='/toys' activeStyle={activeStyle}>
            Toys
          </NavItem>
        </li>
        <li>
          <NavItem to='/others' activeStyle={activeStyle}>
            Others
          </NavItem>
        </li>
      </ul>

      <ul className='flex items-center gap-3'>
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
        <li onClick={() => openCheckoutSideMenu()}
          className='flex bg-gray-100 p-1 rounded-lg shadow-sm cursor-pointer'>
          <ShoppingCartIcon className='size-5 items-center justify-center'/>
          <span>{count}</span>
        </li>
      </ul>
    </nav>
  )
}

export { Navbar }
