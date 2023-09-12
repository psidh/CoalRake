import React from 'react';
import Image from 'next/image';

const Title: React.FC = () => {
  return (
    <section className="p-4 m-4 flex flex-col items-center justify-center">
      <h2
        className="text-4xl md:text-9xl font-bold m-2 flex flex-row items-center justify-center
         text-yellow-600"
      >
        C R N
      </h2>
      <h2
        className="text-2xl md:text-4xl font-semibold m-2 flex flex-row items-center justify-center
        "
      >
        Coal Raker Navigators
      </h2>
    </section>
  );
};

export default Title;
