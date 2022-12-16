import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LaunchesCard from '../components/LaunchesCard';
import {
  LaunchStatusfun,
  searchKeyfun,
  upcomingfun,
} from '../features/actions/filterActions';

import { useGetcontactsQuery } from '../features/contactsapi';

const Home = () => {
  const [term, setTerm] = useState('');
  const { data, isLoading } = useGetcontactsQuery();
  const filters = useSelector((state) => state.filters.filters);
  console.log(filters);
  const { LaunchStatus, upcoming, keyword } = filters;
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (term === '') return alert('Please enter search term!');
    dispatch(searchKeyfun(term));

    setTerm('');
  };
  let content;

  if (isLoading) {
    content = <p>Loading</p>;
  }

  if (data?.length) {
    content = data.map((item) => (
      <LaunchesCard key={item?.flight_number} item={item} />
    ));
  }

  if (data?.length && (LaunchStatus || upcoming || keyword?.length)) {
    content = data
      .filter((item) => {
        if (LaunchStatus) {
          return item.launch_success === true;
        }
        return item;
      })
      .filter((item) => {
        if (upcoming) {
          return item.upcoming === true;
        }
        return item;
      })
      .filter((item) => {
        if (keyword) {
          return item?.rocket.rocket_name.includes(keyword);
        }
        return item;
      })
      .map((item) => <LaunchesCard key={item?.flight_number} item={item} />);
  }
  const activeClass = 'text-white bg-indigo-500 border-white';
  return (
    <div className="max-w-7xl gap-14 mx-auto my-10">
      <div className="mb-10 flex justify-end gap-5">
        <form
          onSubmit={submitHandler}
          // className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden"
        >
          <div class="flex space-x-4">
            <div class="flex rounded-md overflow-hidden w-full">
              <input
                type="text"
                class="w-full rounded-md rounded-r-none text-base"
                placeholder="Search something.."
                onChange={(e) => setTerm(e.target.value)}
              />
              <button
                class="bg-indigo-600 text-white px-6 text-lg font-semibold py-2 rounded-r-md"
                type="submit"
              >
                Go
              </button>
            </div>
          </div>
        </form>

        <select
          id="countries"
          class="border px-3 py-2 rounded-md text-base w-40"
        >
          <option selected>Launch Date</option>
          <option value="US">Last Week</option>
          <option value="CA">Last Month</option>
          <option value="FR">Last Year</option>
        </select>
        <button
          onClick={() => dispatch(upcomingfun())}
          className={`border px-3 py-2 rounded-md font-semibold ${
            upcoming ? activeClass : null
          } `}
        >
          In Upcoming
        </button>
        <button
          onClick={() => dispatch(LaunchStatusfun())}
          className={`border px-3 py-2 rounded-md font-semibold ${
            LaunchStatus ? activeClass : null
          } `}
        >
          {LaunchStatus ? 'Success' : 'Failure'}
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
        {content}
      </div>
    </div>
  );
};

export default Home;
