import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <div className="banner-bg">
      <div class="hero-content text-center text-white   ">
        <div class="max-w-md ml-28 py-10">
          <h1 class="mb-5 text-3xl font-bold ">About Us</h1>
          <p class="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button class="btn  btn-neutral  rounded-full font-bold hover:bg-white hover:border-none  ease-in duration-300 ">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;