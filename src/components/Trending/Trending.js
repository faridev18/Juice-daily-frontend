import React from 'react';
import '../../style/main.css';
import image1 from '../../images/image1.png';
import image2 from '../../images/image2.png';
import image3 from '../../images/image3.png';

export default function Trending() {
  return (
    <section className='trend-section'>
        <h1>Trending</h1>
        <div className='trend-grid'>
            <div className='trend-item'>
                <div className=''>
                <img src={image1} alt="Images" width={"300px"} />
                </div>
                <div className='trend-info'>
                    <h3>Simple juste recipes boost your ummine </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                
                </div>
            </div>
            <div className='trend-item'>
                <div className=''>
                <img src={image2} alt="Images" width={"300px"} />
                </div>
                <div className='trend-info'>
                    <h3>Simple juste recipes boost your ummine </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                
                </div>
            </div>
            <div className='trend-item'>
                <div className=''>
                <img src={image3} alt="Images" width={"300px"} />
                </div>
                <div className='trend-info'>
                    <h3>Simple juste recipes boost your ummine </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                
                </div>
            </div>
            
            
        </div>
    </section>
  )
}
