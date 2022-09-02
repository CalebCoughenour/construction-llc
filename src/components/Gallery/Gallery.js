import React from "react";
import './Gallery.css';
import Img1 from './Images/contractors1.jpg';
import Img2 from './Images/contractors2.jpg';
import Img3 from './Images/contractors3.jpg';
import Img4 from './Images/contractors4.jpg';

function Gallery() {

  let data = [
    {
      id: 1,
      imgSrc: Img1,
    },
    {
      id: 2,
      imgSrc: Img2
    },
    {
      id: 3,
      imgSrc: Img3
    },
    {
      id: 4,
      imgSrc: Img4
    },
  ]
  return (

    <>
    <h1>Testing Gallery</h1>
  
    <div className="gallery">
      {data.map((item, index)=> {
        return(
          <div className="pics" key={index}>
            <img src={item.imgSrc} style ={{width: '100%' }}/>
          </div>
        )
      })}
    </div>
    {/* <div>
      <div style={{ padding: '300px 0px', background: 'gray'}}>

      </div>
    </div> */}
    
    </>

    
    

  )
  }
  
  
export default Gallery;