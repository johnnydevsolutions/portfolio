import React from 'react';

const Project = ({ item }) => {
  const openLink = (link) => {
    window.open(link, '_blank');
  };

  return (
    <div key={item.id} className='flex flex-col items-center text-center'>
      <div className='mb-8'>
        <img className='rounded-2xl' src={item.image} alt='' 
        /* style={{ transition: 'transform 0.3s', cursor: 'pointer' }}
         onMouseOver={(e) => (e.target.style.transform = 'scale(1.1)')}
        onMouseOut={(e) => (e.target.style.transform = 'scale(1)')} */
        /* onClick={() => openLink(item.moreInfoLink)} */
        /> {/* image */}
      </div>
      <p className='capitalize text-accent text-sm mb-3'>{item.category}</p>
      <h3 className='text-2xl font-semibold capitalize mb-3'>{item.name}</h3> 

      <p className='text-base max-w-md'>
        <a href={item.link1} target='_blank' rel='noopener noreferrer'>
          {item.description1}
        </a>
      </p>

      <p className='text-base max-w-md'>
        <a href={item.link2} target='_blank' rel='noopener noreferrer'>
          {item.description2}
        </a>
      </p>

      <p className='text-base max-w-md'>
        <a href={item.link3} target='_blank' rel='noopener noreferrer'>
          {item.description3}
        </a>
      </p>

      <p className='text-base max-w-md'>
        <a href={item.link4} target='_blank' rel='noopener noreferrer'>
          {item.description4}
        </a>
      </p>

      <p className='text-base max-w-md'>
        <a href={item.link5} target='_blank' rel='noopener noreferrer'>
          {item.description5}
        </a>
      </p>

      <p className='text-base max-w-md mb-4' >
        <a href={item.link6} target='_blank' rel='noopener noreferrer'>
          {item.description6}
        </a>
      </p>
      
      
      <button
        type='button'
        className='text-white bg-amber-600 hover:bg-yellow-500 focus:outline-none 
        focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900 mt-auto'
        onClick={() => openLink(item.moreInfoLink)}
      >
        More info
      </button>
    </div>
  );
};

export default Project;
