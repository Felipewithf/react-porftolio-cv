import React, {useState, useEffect} from 'react';
import SingleHeroes from '../items/single_heroes';
import './css/itemsHeroes.css';

function Heroes() {

  const [items, setItems] = useState(SingleHeroes);
const [activeCategory, setActiveCategory] = useState("50s");

const categories = ["50s","70s", "80s", "90s", "2000s", "2010s"];

const filterItem = (categItem) => {
  const updateItems = SingleHeroes.filter((curElem) => curElem.period === categItem);
  setItems(updateItems);
  setActiveCategory(categItem);
};

useEffect(() => {
  const updateItems = SingleHeroes.filter((curElem) => curElem.period === activeCategory);
  setItems(updateItems);
}, [activeCategory]); // Dependency array ensures effect runs when activeCategory changes


  return (
    <>
      <h3 className='title'>Heroés del Fútbol</h3>
      <p className='description'>Explored the theme of heroism in sports through a series of daily drawings, capturing the iconic presence of soccer players as modern-day role models. This personal project, undertaken during InkOctober, involved creating each piece within a 30-minute time limit using pen and markers. The collection reflects a blend of artistic discipline and appreciation for the influence of soocer athletes in contemporary culture</p>
     
      <div className='innerGrid heroes' style={{width:"100%"}}>

        <img className='halfwidth' src= 'img/gallery/heroesfutbol/cover.png' alt='' />

        <div className="container">
        <ul className="nav nav-pills justify-content-center">
          {categories.map((category) => (
            <li className="nav-item" key={category}>
              <a
                className={activeCategory === category ? "nav-link active" : "nav-link"}
                href="#"
                onClick={() => filterItem(category)}
              >
                {category}
              </a>
            </li>
          ))}
        </ul>
      </div>
        
        <div className="container-fluid mt-4">
        <div className="row m-3">
          {items.map((elem) => {
            const { name, image, description, country, period, country_color, name_color } = elem;

            return (
              <div className="col-sm-6" id={name} key={name}>
                <div className="card mb-3">
                <img className="img-fluid" src={image} alt={name} />
                  <div className="row no-gutters">

                      <div className="card-body">
                        <div className="d-flex justify-content-between">
                          <h5 className="card-title" style={{color:name_color}}>{name}</h5>
                          <h5 className="card-title"style={{color:country_color}}>{country}</h5>
                        </div>
                        <p className="card-text text-start">{description}</p>
                        
                      </div>
                    
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      </div>
    </>
  );
}

export default Heroes;