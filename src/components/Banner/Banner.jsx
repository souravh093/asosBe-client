import { Player } from '@lottiefiles/react-lottie-player';
import React from 'react';

const Banner = () => {
    return (
        <div className='bg-lime-300'>
            <div className='grid grid-cols-3 items-center max-w-7xl mx-auto py-20'>
            <div className='col-span-2'>
                <p className='text-2xl text-gray-700'>In this season, find the best 🔥</p>
                <h1 className='text-7xl max-w-3xl font-bold my-5'>Exclusive collection for everyone</h1>
                <button className='bg-gray-800 mt-10 text-gray-50 py-3 px-5 rounded-3xl text-2xl'>Explorer now</button>
            </div>
            <div className='col-span-1'>
                <Player
                    src="83548-online-shopping-black-friday.json"
                    autoplay
                    loop
                />
            </div>
        </div>
        </div>
    );
};

export default Banner;
