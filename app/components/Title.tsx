import React from 'react';
import Image from 'next/image';

const Title: React.FC = () => {
  return (
    <section className="p-4 m-4 flex flex-col items-center justify-center">
      <Image 
      src={"/headtitle.png"}
      alt='LOGO'
      width={1200}
      height={500}/>

    </section>
  );
};

export default Title;
