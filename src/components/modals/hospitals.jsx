import React, {useState, useEffect} from 'react';
import SingleHospitals from '../items/single_hospitals';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import './css/itemsHospitals.css';

function Hospitals() {

  const [items, setItems] = useState(SingleHospitals);
const [activeCategory, setActiveCategory] = useState("Austria");

const categories = ["Austria","Belgium","Canada","Denmark","Germany","France","Netherlands","Uganda","UK","USA"];

const filterItem = (categItem) => {
  const updateItems = SingleHospitals.filter((curElem) => curElem.country === categItem);
  setItems(updateItems);
  setActiveCategory(categItem);
};

useEffect(() => {
  const updateItems = SingleHospitals.filter((curElem) => curElem.country === activeCategory);
  setItems(updateItems);
}, [activeCategory]); // Dependency array ensures effect runs when activeCategory changes


  return (
    <>
      <h3 className='title'>Hospital Illustrations</h3>
      <p className='description'>Led the creation of bespoke illustrations for hospitals to help our company stand out. The goal was to develop unique visual assets that could be utilized across products and marketing materials while showcasing the innovative spirit of our company. The illustrations were crafted in Adobe Illustrator, ensuring they are both visually appealing and recognizable as city landmarks. To scale the project, I currently guide and oversee the work of a visual designer, managing the production of the remaining illustrations. This project reinforces our brand's distinctiveness and enhance the product bespoke ethos.</p>
     
      <div className='innerGrid hospitals' style={{width:"100%"}}>

      {/* <img className='fullwidth' src= 'img/gallery/hospitals/rigshospitalet_h.png' alt='' />
      <img className='fullwidth' src= 'img/gallery/hospitals/parkland_h.png' alt='' /> */}
      <img className='fullwidth' src= 'img/gallery/hospitals/johnsHopkins_h.png' alt='' />


      <img className='fullwidth' src= 'img/gallery/hospitals/z_compilation.png' alt='' />


       <div className='innerGrid comparisonSliders pb-4'>
       <p className='title'>process work</p>
            <div className='labels'>
              <p>wireframe</p>
              <p>rendered</p>
            </div>
            
            <ReactCompareSlider className='border'
            itemOne={<ReactCompareSliderImage src="img/gallery/hospitals/wireframe.png" alt="Image one" />}
            itemTwo={<ReactCompareSliderImage src="img/gallery/hospitals/stanford_h.png" alt="Image two" />}
            style={{
              width: '100%',
            flexGrow: 1,
            backgroundColor: 'white',
            }}
            />

        </div>
       
        <div className="container pt-5">
          {/* <h3>Browse All Hospitals</h3> */}
        <p className='title pb-3'>browse all hospitals</p>
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
        <div className="row">
          {items.map((elem) => {
            const { name, image, continent, year, country } = elem;
            return (
              <div key={name} >
                <img className="img-fluid pb-4" src={image} alt={name} />
              </div>
            );
          })}
        </div>
      </div>
      </div>

    
    </>
  );
}

export default Hospitals;