
import './category-item.styles.scss';


const CategoryItem = ( {category} ) => {
    console.log(category);
    const {title, imageUrl} = category;

    const capitalisedTitle = title.charAt(0).toUpperCase() + title.slice(1);
    
    return (

        <div className="category-container">
            <div className="background-image" style={{
                backgroundImage: `url(${imageUrl})`
            }} />
            <div className="category-body-container">
                <h2>{capitalisedTitle}</h2>
                <p>Shop Now</p>
            </div>

        </div>

    );
};

export default CategoryItem;