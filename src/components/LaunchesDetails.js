import React from 'react';

const LaunchesDetails = ({ data }) => {
  return (
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
      <div class="flex flex-col md:flex-row -mx-4">
        <div class="md:flex-1 px-4">
          <div x-data="{ image: 1 }" x-cloak>
            <div class="h-64 md:h-80 rounded-lg bg-gray-100 mb-4">
              <img src={data?.links.mission_patch} alt={data?.mission_name} />
            </div>
          </div>
        </div>
        <div class="md:flex-1 px-4">
          <h2 class="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
            {data?.mission_name}
          </h2>
          <p class="text-gray-500 text-sm">
            By{' '}
            <a href="#" class="text-indigo-600 hover:underline">
              {data?.launch_year}
            </a>
          </p>

          <p class="text-gray-500">{data?.details}</p>
        </div>
      </div>
    </div>
  );
};

export default LaunchesDetails;
