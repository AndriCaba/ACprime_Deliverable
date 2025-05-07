// components/Heading.js
import React from 'react';

export function Heading({ title, description, className = '' }) {
  return (
    <div className={`${className}`}>
      <h1 className="mb-4 text-4xl font-semibold text-navy-100 lg:text-5xl">
        {title}
      </h1>
      <p className="mb-4 text-navy-100">{description}</p>
    </div>
  );
}

export default Heading;
