import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="">
      <div class="navbar bg-primary text-white  ">
        <div class="navbar-start pl-20">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary text-white rounded-box w-52"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Catagories</a>
              </li>
              <li>
                <a>Items</a>
              </li>
              <li>
                <a>Workflow</a>
              </li>
              <li>
                <a>Reviwes </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="navbar-center">
          <a href="/" class="btn btn-ghost normal-case text-2xl font-bold">
            GetQuick
            <span className="font-light">Store</span>
          </a>
        </div>
        <div class="navbar-end ">
          {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg> */}

          <div class="navbar-end">
            <Link to="/login" class="btn btn-secondary text-white">
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;