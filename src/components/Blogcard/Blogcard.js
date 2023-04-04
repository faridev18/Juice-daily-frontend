import React from 'react';
import '../../style/main.css';

export default function Blogcard(props) {
  return (
    <div className='grid-item'>
                <div className='grid-image prod2'>

                </div>
                <div className='item-info'>
                    <span className='categorie'> {props.categorie}</span>
                    <span className='time'>--- {props.minute} min read</span>
                </div>
                <h2>
                    {props.titre}
                </h2>
            </div>
  )
}
