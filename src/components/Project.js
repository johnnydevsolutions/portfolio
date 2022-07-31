import React from 'react';

const Project = ({ item }) => {
  return (
    <div key={item.id} className='flex flex-col items-center text-center'>
      <div className='mb-8'>
        <img className='rounded-2xl' src={item.image} alt='' /> {/* image */}
      </div>
      <p className='capitalize text-accent text-sm mb-3'>{item.category}</p>
      <h3 className='text-2xl font-semibold capitalize mb-3'>{item.name}</h3> 
      <a href="https://buscador-filme.vercel.app/">
        <p className='text-base max-w-md'> {item.description1} </p>
      </a>

      <p className='text-base max-w-md'> {item.description2} </p>
  

    <a href="https://game-3wihi3b6p-devj-andrade.vercel.app/" target="_blank" >
      <p className='text-base max-w-md'> {item.description3} </p>
    </a>
  
    <a href="https://portal-news.vercel.app/" target="_blank">
      <p className='text-base max-w-md'> {item.description4} </p>
    </a>

    <a href="https://johnnydevsolutions.github.io/parallax-project/" target="_blank">
      <p className='text-base max-w-md'> {item.description5} </p>
    </a> 
    <a href="https://vr-world-five.vercel.app/" target="_blank">
      <p className='text-base max-w-md'> {item.description6} </p> 
    </a>
    
    <button type="button" class="text-white bg-amber-600 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900 mt-auto">More info</button>
    </div>
    
);
};

export default Project;
