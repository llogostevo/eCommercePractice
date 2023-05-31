import React from 'react';

import './category-item.styles.scss';


const CategoryItem = ({title}) =>{
     const capitalisedTitle = title.charAt(0).toUpperCase() + title.slice(1);
    return(
        <div className="category-body-container">
              <h2>{capitalisedTitle}</h2>
              <p>Shop Now</p>
        </div>
    );
};

export default CategoryItem;