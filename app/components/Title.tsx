import React from 'react';
import Image from "next/image";

const Title: React.FC = () => {
  return (
    <section className="p-4 m-4 flex flex-col items-center justify-center" 
    style={{ fontFamily: 'Ambit, sans-serif' }}>
      <Image
        src={"/headtitle.png"}
        alt='LOGO'
        width={1200}
        height={500}
        style={{
          maxWidth: "100%",
          height: "auto"
        }} />

    </section>
  );
};

export default Title;
