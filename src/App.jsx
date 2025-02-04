import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <div className="max-md:w-[90vw] w-[60vw] my-10 items-center m-auto text-center flex-col justify-items-center border rounded">
        <Heading></Heading>
        <AnimeImg></AnimeImg>
        <Quote></Quote>
      </div>
    </>
  )
}

export default App


function Heading() {
  return(
    <>
      <h1 className='font-mono text-3xl my-5'>Get Quote at Ouotez</h1>
    </>
  )
}


function AnimeImg() {
  const [imgUrl, setImgUrl] = useState('')


  fetch('https://nekos.best/api/v2/neko')
  .then(response => response.json())
  .then(json => setImgUrl(json.results[0].url))
  return(
    <img src={imgUrl} className='w-[17vw] max-md:w-[35vw] my-10' alt="" id='anime-image'/>
  )
}


function Quote() {
  const[quote, setQuote] = useState('');
  const[author, setAuthor] = useState('');

  const api_key = 'Zxwcnh+nFrSnQykuzD/uxA==yBqlkTAvmE6I5fVS';

  fetch('https://api.api-ninjas.com/v1/quotes', {
    method: 'GET',
    headers: {
      'X-Api-Key': api_key,  
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(result => {
    setQuote(result[0].quote);
    setAuthor("- " + result[0].author);
  })
  .catch(error => {
    console.error('Error fetching the quote:', error);
  });

  return (
    <>
      <div className="my-10 w-[50vw] max-md:w-[85vw]">
        <p className='font-mono text-xl'>{quote}</p>
        <p className='font-mono text-right wrap mr-10'>{author}</p>
      </div>
    </>
  );
}
