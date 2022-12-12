import React from 'react';

// import ProductCard from "../components/ProductCard";
// import { useProducts } from "../context/ProductProvider";
import { useParams } from 'react-router-dom';
import LaunchesDetails from '../components/LaunchesDetails';
import { useGetcontactQuery } from '../features/contactsapi';

const SingleItem = () => {
  const { id } = useParams();
  console.log(id);
  const { data } = useGetcontactQuery(id);
  console.log(data?.flight_number);
  //   const {
  //     state: { cart, loading, error },
  //   } = useProducts();

  let content = <LaunchesDetails key={data?.flight_number} data={data} />;

  // if (loading) {
  //   content = <p>Loading</p>;
  // }

  // if (error) {
  //   content = <p>Something went wrong</p>;
  // }

  // if (!loading && !error && cart.length === 0) {
  //   content = <p>Nothing to show, product list is empty</p>;
  // }

  // if (!loading && !error && cart.length) {
  //   content =
  // }

  return <div>{content}</div>;
};

export default SingleItem;
