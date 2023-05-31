import {Outlet} from 'react-router-dom'

// styling
import '../../components/category/category.component';
// categories data imported from file and stored in indentifier as an array
import categories from '../../categories.json';
// components
import Category from '../../components/category/category.component';
import React from 'react';


const Home = () => {

  return (
  <>
    <Outlet />
   <div className="categories-container">
    {/* map through each category in the categories array of category objects */}
    {/* desctructured off directly to obtain the keys from categories */}
      <Category categories={categories}/>
      {/* end categories container */}
    </div>
    </>
  );
}

export default Home;