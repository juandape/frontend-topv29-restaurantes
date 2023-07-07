import { useLoaderData } from 'react-router-dom';
import './restoverview.css';

const BASE_URL = import.meta.env.VITE_API_URL;

export const loaderRestaurant = async ({ params }) => {
  const { id } = params;
  const response = await fetch(`${BASE_URL}/api/restaurants/${id}`);
  const data = await response.json();

  return { restaurant: data };
};

function RestOverview() {
  const { restaurant = [] } = useLoaderData();

  return (
    <>
      <div className='overview'>
        <div className='overview__info'>
          <strong>Cuisine</strong>
          <p>{restaurant.foodtype}</p>
         <strong>Opening Hours</strong>
          <p>{restaurant.schedules}</p>
          <strong>Address</strong>
          <p>{restaurant.address}</p>
        </div>
        <div className='overview__facilities'>
          <ul>
            <strong>Facilities</strong>
            <li>Card Accepted</li>
            <li>Free Wifi</li>
            <li>Outdoor Seating</li>
            <li>Smoking Area</li>
            <li>Takeaway Available</li>
            <li>Pet Friendly</li>
            <li>Free Parking</li>
            <li>Live Music</li>
            <li>Live Sports Screening</li>
            <li>Home Delivery</li>
            <li>Table Booking</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default RestOverview;
