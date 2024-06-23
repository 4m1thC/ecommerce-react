import { PropTypes } from 'prop-types';

import { ChevronRightIcon } from "@heroicons/react/16/solid";
import { ShoppingBagIcon } from '@heroicons/react/20/solid';
import { CalendarDaysIcon } from '@heroicons/react/20/solid';

const OrderSCard = ({ date, totalProducts, totalPrice }) => {
  return (
    <div className="flex justify-between items-center mb-3 border border-black p-4
     hover:bg-gray-200 rounded-lg w-72">
      <div className="flex justify-between w-full">
        <p className="flex flex-col">
          <span className='flex items-center gap-x-1 font-light'>
            <CalendarDaysIcon className='size-4' />
            {date}
          </span>
          <span className='flex items-center gap-x-1 font-light'>
            <ShoppingBagIcon className='size-4' />
            {totalProducts} {totalProducts === 1 ? 'article' : 'articles'}
          </span>
        </p>
        <div className='flex justify-center items-center'>
          <span className='font-medium text-2xl'>${totalPrice}</span>
          <ChevronRightIcon className='size-8' />
        </div>
      </div>
    </div>
  )
}

OrderSCard.propTypes = {
  date: PropTypes.string.isRequired,
  totalProducts: PropTypes.number.isRequired,
  totalPrice: PropTypes.number.isRequired,
};

export { OrderSCard };
