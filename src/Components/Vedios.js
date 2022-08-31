import React from 'react';

const Vedios = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold text-primary text-center'>PRODUCT MAKING</h1>
      <div className="flex items-center justify-center p-9 m-3 gap-4">
        <iframe
          width="800"
          height="350"
          src="https://www.youtube.com/embed/XuSlMGZrG5E"
          title="FACTORY में AIRPODS कैसे बनता है?AirPods And AirPod Cover Manufacture | AirPods Production."
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="800"
          height="350"
          src="https://www.youtube.com/embed/psDO1rPFQ1Y"
          title="How Smartphones Are Made in Factory"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Vedios;