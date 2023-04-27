import React from 'react';

const AdditionalImage = ({additional}) => {
    return (
        <figure className="object-cover">
          <img src={`https://${additional}`} alt="Shoes" className="w-full h-44 object-cover" />
        </figure>
    );
};

export default AdditionalImage;