import { PropTypes } from 'prop-types';
import { useContext } from 'react';
import { ShoopingCartContext } from '../../context/Index';

const Card = ({ price, title, image, category }) => {
  const { count, setCount } = useContext(ShoopingCartContext);
  return (
    <div className="bg-gray-100 hover:bg-gray-300 transition-colors
     duration-500 ease-in-out shadow-2xl cursor-pointer w-56 h-60 rounded-lg">
      <figure className="relative mb-2 w-full h-3/4">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          { category }
        </span>
        <img className="w-full h-full object-cover rounded-lg" src={ image } alt={ title } />
        <button className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
          onClick={() => setCount(count + 1)}>
          +
        </button>
      </figure>
      <p className="flex justify-between px-3 py-1">
        <span className="text-sm font-light truncate">{ title }</span>
        <span className="text-lg font-medium">${ price }</span>
      </p>
    </div>
  )
}

Card.propTypes = {
	price: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
  image: PropTypes.string,
  category: PropTypes.string,
};


export { Card };
