import React from 'react';
import Banner from './Banner';
import Products from './Products/Products';
import Search from './Search';
import TeamMembers from './TeamMembers';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Search></Search>
      <Products></Products>
      <TeamMembers></TeamMembers>
    </div>
  );
};

export default Home;