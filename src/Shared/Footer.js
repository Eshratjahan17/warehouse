import React from 'react';
import facebook from '../images/icons/facebook.png';
import instagram from '../images/icons/instagram.png';
import linkedin from '../images/icons/linkedIn.png';
import logo from '../images/icons/logo.png';

const Footer = () => {
  return (
    <footer class="footer footer-center pt-5 bg-secondary text-white">
      <div>
        <img className='h-20 w-20' src={logo} alt="" />
        <p class="font-bold text-xl">GetQuickStore</p>
        <p>Copyright © 2022 - All right reserved by Eshrat Jahan </p>
      </div>
      <div>
        <div class="grid grid-flow-col gap-4">
          <div class="footer footer-center mt-6 pb-5 text-base-content">
            <div className="flex ">
              <a
                target="_blank"
                href="https://www.facebook.com/eshratjahan17/"
                class=" rounded-full  bg-blue-800 flex p-3 "
                rel="noreferrer"
              >
                <img src={facebook} alt="" />
                <span className="pl-2 text-white">Facebook</span>
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/eshratjahan17/"
                class=" rounded-full  bg-pink-700 flex p-3 "
                rel="noreferrer"
              >
                <img src={instagram} alt="" />
                <span className="pl-2 text-white">Instagram</span>
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/eshratjahan17/"
                class=" rounded-full  bg-sky-800 flex p-3 "
                rel="noreferrer"
              >
                <img src={linkedin} alt="" />
                <span className="pl-2 text-white">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;