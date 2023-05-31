import CategoryItem from '../category-item/category-item.component';
import './category.styles.scss';

const Category = ( {categories} ) => {

    return (
        <>
        {categories.map((category) => (
            // return the JSX structure of the categories
            
            <CategoryItem key={category.id} category={category}/>
             
          ))}
        </>
    );
};

export default Category;