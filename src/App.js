import React from 'react';

import './categories.styles.scss';
// categories data imported from file and stored in indentifier as an array
import categories from './categories.json';

import Category from './components/category-item/category-item.component';


const App = () => {

  
  return (
  <>
   <div className="categories-container">
    {/* map through each category in the categories array of category objects */}
    {/* desctructured off directly to obtain the keys from categories */}
      {categories.map(({title, id, imageUrl}) => (
        // return the JSX structure of the categories
          <div key={id} className="category-container">
            <div className="background-image" style={{
              backgroundImage: `url(${imageUrl})`
            }}/>
            <CategoryItem title={title}/>
         </div>
      ))}
      {/* end categories container */}
    </div>
    
    </>
  );
}

export default App;
