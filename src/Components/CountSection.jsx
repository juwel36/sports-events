import React from 'react';
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown';

const Completionist = () => <span>You are good to go!</span>;


const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <Completionist />;
  } else {
    return <span>{days}d {hours}h {minutes}m {seconds}s</span>;
  }
};

const CountSection = () => {

  const Date1 = Date.now() + 39 * 24 * 50 * 60 * 1000;  
  const Date2 = Date.now() + 19 * 24 * 24 * 60 * 1000;  
  const Date3 = Date.now() + 21 * 24 * 11 * 60 * 1000;  
  const Date4 = Date.now() + 17 * 24 * 20 * 60 * 1000;  
  const Date5 = Date.now() + 14 * 24 * 40 * 60 * 1000;  
  const Date6 = Date.now() + 25 * 24 * 44 * 60 * 1000;  

  return (
    <div className='mt-36 p-3 lg:p-0'>
      <p className='text-3xl text-white text-center'>Game Day Countdown: Get Ready for the Action</p>
      <p className="border-b-4 w-96 mt-5 mx-auto border-red-500 mb-8"></p>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 mb-36'>
     <div className='text-white bg-gray-900 flex gap-4 items-center'>
      <p className='text-4xl' > JS League<span className='text-xs'> Event start in</span>  </p>
  <span className='text-3xl text-white   p-2 rounded-lg'>
  <Countdown
        date={Date1}
        renderer={renderer}
      />
  </span>
     </div>
     <div data-aos="zoom-in-up" className='text-white bg-gray-800 px-2 rounded-lg flex gap-4 items-center'>
      <p className='text-4xl' > Sylhet Cycling <span className='text-xs'> Event start in</span>  </p>
  <span className='text-3xl text-white   p-2 rounded-lg'>
  <Countdown
        date={Date2}
        renderer={renderer}
      />
  </span>
     </div>
     <div data-aos="zoom-in-up" className='text-white bg-gray-800 px-2 rounded-lg flex gap-4 items-center'>
      <p className='text-4xl' > Tennis Grand <span className='text-xs'> Event start in</span>  </p>
  <span className='text-3xl text-white   p-2 rounded-lg'>
  <Countdown
        date={Date3}
        renderer={renderer}
      />
  </span>
     </div>
     <div data-aos="zoom-in-up" className='text-white bg-gray-900 px-2 rounded-lg flex gap-4 items-center'>
      <p className='text-3xl' > Basketball Finals<span className='text-xs'> Event start in</span>  </p>
  <span className='text-3xl text-white   p-2 rounded-lg'>
  <Countdown
        date={Date4}
        renderer={renderer}
      />
  </span>
     </div>
     <div data-aos="zoom-in-up" className='text-white bg-gray-900 px-2 rounded-lg flex gap-4 items-center'>
      <p className='text-4xl' > Horse Racing<span className='text-xs'> Event start in</span>  </p>
  <span className='text-3xl text-white   p-2 rounded-lg'>
  <Countdown
        date={Date5}
        renderer={renderer}
      />
  </span>
     </div>
     <div data-aos="zoom-in-up" className='text-white bg-gray-800 px-2 rounded-lg flex gap-4 items-center'>
      <p className='text-3xl' > Golf Tournament<span className='text-xs'> Event start in</span>  </p>
  <span className='text-3xl text-white   p-2 rounded-lg'>
  <Countdown
        date={Date6}
        renderer={renderer}
      />
  </span>
     </div>
    </div>
    </div>
  );
};

ReactDOM.render(
  <CountSection />,
  document.getElementById('root')
);

export default CountSection;
