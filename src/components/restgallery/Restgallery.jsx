import { useLoaderData, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './restgallery.css';

const BASE_URL = import.meta.env.VITE_API_URL;
const url = `${BASE_URL}/api/restaurants`;

export const loaderRestaurant = async ({ params }) => {
  const { id } = params;
  const response = await fetch(`${BASE_URL}/api/restaurants/${id}`);
  const data = await response.json();

  return { restaurant: data };
};

function Restgallery() {
  const { restaurant = [] } = useLoaderData();
console.log(restaurant)

  return (
    <>
      <motion.div className='restgallery__container'>
        <motion.div
          className='restgallery__container--slider'
          drag='x'
          dragConstraints={{ right: 0, left: -1024 }}
        >
          {(restaurant.gallery).map((img) => (
            <motion.div className='restgallery__container__img'>
              <img
                src={img.name}
                alt='rest img'
                className='restgallery__container__img--img'
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
}

export default Restgallery;
