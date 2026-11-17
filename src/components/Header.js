import React from 'react';
const Heading = ({ title, subtitle }) => {
  return (     <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-slate-100 mb-4">{title}</h2>
      <p className="text-lg text-slate-400">{subtitle}</p>
    </div>
  );
};
export default Heading; 