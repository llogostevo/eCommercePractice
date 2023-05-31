import CategoryItem from '../category-item/category-item.component';

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