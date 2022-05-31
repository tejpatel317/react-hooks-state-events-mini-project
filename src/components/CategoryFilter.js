import React from "react";

function CategoryFilter({categories, selectedCategory, setSelectedCategory}) {

  const compCategories = categories.map((category) => {
    let appClass = ""
    if (category === selectedCategory) {
      appClass = "selected"
    }
    return(<button key={category} id={category} className={appClass} onClick={handleClick}>{category}</button>)
  })

  function handleClick(e) {
    setSelectedCategory(e.target.textContent)
  }
 
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {compCategories}
    </div>
  );
}

export default CategoryFilter;
