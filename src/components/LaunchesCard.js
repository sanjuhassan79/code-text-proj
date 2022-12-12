import React from 'react';
import { BiListPlus } from 'react-icons/bi';
import { Link } from 'react-router-dom';
const LaunchesCard = ({ item }) => {
  return (
    <Link to={`single/${item.flight_number}`}>
      <div
        className="shadow-lg rounded-3xl border  p-3 flex flex-col text-indigo-900"
        key={item.flight_number}
      >
        <div className="h-52 w-52 mx-auto">
          <img src={item.links.mission_patch} alt={item.mission_name} />
        </div>
        <h1 className="font-bold text-center">{item.mission_name}</h1>
        <p className="text-center font-semibold mb-3">
          {item?.details?.slice(0, 150)}
        </p>
        <div className=" flex-1">
          {/* <ul className="space-y-2">
          {item.keyFeature.map((feature) => {
            return <li className="text-sm ">{feature}</li>;
          })}
        </ul> */}
        </div>
        <div className="flex gap-2 mt-5">
          {/* <button
          className="bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold"
          //   onClick={() =>
          //     dispatch({ type: actionTypes.ADD_TO_CART, payload: item })
          //   }
        >
          Add to cart
        </button> */}
          {/* <button
          title="Add to wishlist"
          className="bg-indigo-500  py-1 px-2 rounded-full"
        >
          <BiListPlus className="text-white" />
        </button> */}
        </div>
      </div>
    </Link>
  );
};

export default LaunchesCard;
