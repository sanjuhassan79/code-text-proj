import React from 'react';

import { useParams } from 'react-router-dom';
import LaunchesDetails from '../components/LaunchesDetails';
import { useGetcontactQuery } from '../features/contactsapi';

const SingleItem = () => {
  const { id } = useParams();
  console.log(id);
  const { data } = useGetcontactQuery(id);
  console.log(data?.flight_number);

  let content = <LaunchesDetails key={data?.flight_number} data={data} />;

  return <div>{content}</div>;
};

export default SingleItem;
