import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import img1 from '../images/staff/staff1.jpg';
import img3 from '../images/staff/staff2.jpg';
import img2 from '../images/staff/staff3.jpg';
import './TeamMembers.css';

const TeamMembers = () => {
  return (
    <div className="p-9   bg-base-200">
      <h1 class="mb-5 text-3xl font-bold text-center ">
        TEAM OF GetQuickStart
      </h1>
      <div className="flex items-center justify-center ">
        <Carousel className="w-1/3 h-1/3 shadow-2xl rounded-2xl  ">
          <div className="rounded-2xl bg-base-100  ">
            <img className="" src={img1} />

            <h1 class="text-3xl font-bold text-center legend ">CEO</h1>
          </div>
          <div>
            <img className="bg-base-100" src={img2} />
            <p className="legend">Managing Director</p>
          </div>
          <div>
            <img src={img3} />
            <p className="legend">Software engineer</p>
          </div>
          <div>
            <img src={img3} />
            <p className="legend">Software engineer</p>
          </div>
          <div>
            <img src={img3} />
            <p className="legend">Software engineer</p>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default TeamMembers;