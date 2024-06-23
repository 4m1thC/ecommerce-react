import { PropTypes } from 'prop-types';

import { XCircleIcon } from "@heroicons/react/16/solid";

const OrderCard = ({ id, price, title, image, handleDelete }) => {
  return (
    <div className="flex justify-between items-center mb-3 border-b-2 hover:bg-gray-200 rounded-lg">
      <div className="flex items-center gap-1">
        <figure className="w-40 h-20">
          <img src={image} alt={title} className="w-full h-full rounded-lg object-cover" />
        </figure>
        <p className="w-full text-sm font-light">{title}</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        {
          handleDelete &&
          <XCircleIcon onClick={() => handleDelete(id)}
            className='size-6 self-end text-black cursor-pointer hover:text-red-600'></XCircleIcon>
        }
        <p className="text-lg font-medium text-green-600">${price}</p>
      </div>

    </div>
  )
}

OrderCard.propTypes = {
  id: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  handleDelete: PropTypes.func,
};

export { OrderCard };
