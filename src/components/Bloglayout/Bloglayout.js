import React from 'react'
import './Bloglayout.css';
export default function Bloglayout() {
  return (
    <section className='blog-section'>
        <h1>Latest</h1>
        <div className='grid-layout'>
            <div className='grid-item'>
                <div className='grid-image prod2'>

                </div>
                <div className='item-info'>
                    <span className='categorie'> Fruit</span>
                    <span className='time'>--- 5 min read</span>
                </div>
                <h2>
                    Simple juste recipes boost your ummine system
                </h2>

            </div>
            <div className='grid-item'>
                <div className='grid-image prod3'>

                </div>
                <div className='item-info'>
                    <span className='categorie'> Fruit</span>
                    <span className='time'>--- 5 min read</span>
                </div>
                <h2>
                    Simple juste recipes boost your ummine system
                </h2>

            </div>
            <div className='grid-item'>
                <div className='grid-image prod1'>

                </div>
                <div className='item-info'>
                    <span className='categorie'> Fruit</span>
                    <span className='time'>--- 5 min read</span>
                </div>
                <h2>
                    Simple juste recipes boost your ummine system
                </h2>

            </div>
            
           
        </div>

    </section>
  )
}
