// import './categories.styles.css';

const App = () => {

  // data for categories
  const categories = [
    {
      id: 1,
      title: 'Hats',
    },
    {
      id: 2,
      title: 'Jackets',
    },
    {
      id: 3,
      title: 'Trainers',
    },
    {
      id: 4,
      title: 'Womens',
    },
    {
      id: 5,
      title: 'Mens',
    }
  ]
  return (
   <div className="categories-container">
    {/* map through each category in the categories array of category objects */}
    {/* desctructured off directly to obtain the keys from categories */}
      {categories.map(({title, id}) => (
        // return the JSX structure of the categories
          <div key={id} className="category-container">
            <div className="background-image" />
            <div className="category-body-container">
              <h2>{title}</h2>
              <p>Shop Now</p>
            </div>
         </div>
      ))}
      {/* end categories container */}
    </div>
  );
}

export default App;
