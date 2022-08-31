import React from 'react';
import { Link } from 'react-router-dom';
import playButton from '../images/icons/Play_Button.png';
import './Banner.css';

const Banner = () => {
  return (
    <div className="banner-bg">
      <div class="hero-content text-center text-white   ">
        <div class="max-w-md ml-28 py-10">
          <h1 class="mb-5 text-3xl font-bold ">About Us</h1>
          <p class="mb-5">
            You can shop, browse, and try out products at Apple Store locations
            that have fully reopened. We're focused on limiting occupancy in
            every store, so you may experience short wait times before being
            allowed to enter.
          </p>
          <div className="flex items-center ml-28  ">
            <button class="btn  btn-neutral  rounded-full font-bold hover:bg-white hover:border-none  ease-in duration-300  ">
              Our Products
            </button>
            <button class="w-16 ">
              <Link to="/vedios">
                <img src={playButton} alt="" />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;