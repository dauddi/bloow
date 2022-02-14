import React from 'react';

const Brand = ({ Logo, Title }) => {
  return (
    <div className="flex items-center justify-start mx-10 " >
      <img src={Logo} width={40} height='auto' alt="bloow logo" />
      <h2 className="font-bold text-2xl pl-3 text-orange-300 " > {Title} </h2>
    </div>
  )
};

export default Brand;
