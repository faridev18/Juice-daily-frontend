import React from 'react'
import '../../style/main.css';
import Blogcard from '../Blogcard/Blogcard';
export default function Bloglayout() {

    const articles = [
       {
        minute:5,
        categorie:"FUIT",
        titre:"Simple juste recipes boost your ummine system"
       },
       {
        minute:5,
        categorie:"FUIT",
        titre:"Simple juste recipes boost your ummine system"
       },
       {
        minute:5,
        categorie:"FUIT",
        titre:"Simple juste recipes boost your ummine system"
       },
       {
        minute:5,
        categorie:"FUIT",
        titre:"Simple juste recipes boost your ummine system"
       },
       {
        minute:5,
        categorie:"FUIT",
        titre:"Simple juste recipes boost your ummine system"
       },
       {
        minute:5,
        categorie:"FUIT",
        titre:"Simple juste recipes boost your ummine system"
       }
      ];

  return (
    <section className='blog-section'>
        <h1>Latest</h1>
        <div className='grid-layout'>
        {articles.map((article) => (
            <Blogcard
                minute={article.minute}
                categorie={article.categorie}
                titre={article.titre}
            />
        ))}
           
        </div>

    </section>
  )
}
