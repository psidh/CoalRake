import React from 'react';
import Image from 'next/image';

const WhatDo: React.FC = () => {
  return (
    <section className="p-4 md:p-10 m-4 sm:m-16 sm:flex sm:items-center sm:justify-between">
      <div className="sm:w-full md:w-1/2">
        <h2 className="text-3xl md:text-5xl font-semibold mb-2 md:mb-4">
          About Us
        </h2>
        <h3 className="text-xl md:text-2xl font-medium mb-2 md:mb-4">
          What We Do
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl text-justify">
          At CEN Coal Express Navigators, we specialize in revolutionizing coal
          logistics. Our digital platform provides real-time updates on coal
          availability at railway sidings, ensuring that trains are dispatched
          to the nearest location with sufficient coal. By optimizing coal
          transportation routes and minimizing waiting times, we help companies
          save on demurrage charges and streamline their operations. Our
          advanced algorithms and technology-driven solutions empower the coal
          industry to make informed decisions, reduce costs, and enhance
          efficiency. With a focus on sustainability and innovation, we aim to
          drive positive change in the transportation of this critical resource.
        </p>
      </div>
      <div className="sm:w-1/2 flex justify-center items-center my-4 sm:mt-0">
        <Image
          src="/indiamap.png"
          alt="India"
          width={270} // Adjust the desired width for smaller screens
          height={189} // Adjust the desired height for smaller screens
          className="rounded overflow-hidden"
        />
      </div>
    </section>
  );
};

export default WhatDo;
