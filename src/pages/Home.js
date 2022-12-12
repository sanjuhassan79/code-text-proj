import React from 'react';
import LaunchesCard from '../components/LaunchesCard';
// import ProductCard from '../components/LaunchesCard';
import { useGetcontactsQuery } from '../features/contactsapi';
// import ProductCard from "../components/ProductCard";
// import { usedata } from "../context/ProductProvider";

const Home = () => {
  const { data, error, isLoading, isFetching, isSuccess } =
    useGetcontactsQuery();
  console.log(data);
  //   const {
  //     state: { data, loading, error },
  //   } = usedata();

  let content;

  if (isLoading) {
    content = <p>Loading</p>;
  }

  if (error) {
    content = <p>Something went wrong</p>;
  }

  if (!isLoading && !error && data.length === 0) {
    content = <p>Nothing to show, product list is empty</p>;
  }

  if (!isLoading && !error && data.length) {
    content = data.map((item) => (
      <LaunchesCard key={item.flight_number} item={item} />
    ));
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10">
      {content}
    </div>
  );
};

export default Home;
