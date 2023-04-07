import React from 'react'
import ArticleCards from './ArticleCards'


const Tech = (poop) => {
  return (
<div className="pt-12 sm:pt-20 relative w-full mx-auto bg-hero-pattern bg-no-repeat bg-center bg-cover h-screen"> 
  <section className='w-full px-3 sm:px-8 md:px-16 lg:px-20 pt-5 grid grid-cols-2 sm:grid cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-4 '>
        <ArticleCards url={'https://newsapi.org/v2/everything?q=bitcoin&apiKey=b8936a4314524e848465318f3746aa53'} />
  </section>
</div>


  )
}

export default Tech 