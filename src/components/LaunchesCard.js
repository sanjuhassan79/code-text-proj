import React from 'react';
import { BiListPlus } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import TimeAgo from './TimeAgo';
const LaunchesCard = ({ item }) => {
  return (
    <Link to={`single/${item.flight_number}`}>
      <div class="bg-white shadow-xl rounded-lg overflow-hidden">
        <div
          class="bg-cover bg-center h-56 p-4"
          style={{
            backgroundImage: `url(${item.links.mission_patch})`,
          }}
        >
          <div class="flex justify-end">11</div>
        </div>
        <div class="p-4">
          <p class="uppercase tracking-wide text-sm font-bold text-gray-700">
            {item?.mission_name}
          </p>
          <p class="text-xl text-gray-900">Launch Year:{item?.launch_year}</p>
          <p class="text-gray-700">
            <TimeAgo timestamp={item?.launch_date_utc} />
          </p>
        </div>
        <div class="flex p-4 border-t border-gray-300 text-gray-700">
          <div class="flex-1 inline-flex items-center">
            <span class="text-gray-900 font-bold">
              {String(item?.launch_success)}:
            </span>
            <p>Success</p>
          </div>
          <div class="flex-1 inline-flex items-center">
            <span class="text-gray-900 font-bold">
              {String(item?.upcoming)}:
            </span>
            <p>upcoming</p>
          </div>
        </div>
        <div class="px-4 pt-3 pb-4 border-t border-gray-300 bg-gray-100">
          <div class="text-xs uppercase font-bold text-gray-600 tracking-wide">
            Realtor
          </div>
          <div class="flex items-center pt-2">
            <div
              class="bg-cover bg-center w-10 h-10 rounded-full mr-3"
              style={{
                backgroundImage: ` url(${item?.links.mission_patch})`,
              }}
            ></div>
            <div>
              <p class="font-bold text-gray-900">{item.mission_name}</p>
              <p class="text-sm text-gray-700">{item?.rocket.rocket_name}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default LaunchesCard;
