import { useState, useEffect } from 'react';
import { default_img } from "../assets"



function ArticleCards(props) {

  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(props.url);
        const data = await res.json();
        setCardsData(data.articles);

      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  let i = 0;


  return (
    <>
    {cardsData.filter((cards) =>     
        !cards.url.includes('consent.google.com')).filter((cards) =>
        cards.content.includes('')).map((cards) => {
        return (
          <div key={i++} className='mx-2 mb-2 rounded-xl shadow-md border-4' style={{borderColor: '#ececec', backgroundColor: '#ececec'}}
          >
            <a className='rounded-md md:rounded-2xl' href={cards.url} title="image and link">
              <img className='rounded-md md:rounded-2xl md:p-2 w-fit md:w-full'
              src={cards.urlToImage} 
              alt="article image"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = {default_image}
              }} 
              />
            </a>
            <p className="mt-2 pb-2 px-2 md:px-4 text-black text-xs md:text-sm lg:text-base leading-snug" 
            >
              <span>{cards.description}</span>
              <a className="text-red-500" href={cards.url}> Link</a>
            </p>
          </div>
        );
      })}
    </>
  );
}

export default ArticleCards
