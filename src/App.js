import logo from './logo.svg';
import './App.css';

export function Book() {
  return (
    <div id='container'>
      <div id='book'>
        <img src='book.jpg'/>
        <div id='book-info'>
          <h1>The Lost Daughters of Ukraine</h1>
          <h2>Erin Litteken</h2>
          <div className='full'>
            <div>Information:</div>
            <div>Genre: <span>Historical Fiction</span></div>
            <div>Pages: 420</div>
          </div>
        </div>
      </div>
      <div id='review-container'>
        <h2 id='review-text'>Reviews</h2>
        <div className='review'>
          <div className='photo-container'>
            <div className='photo'></div>
          </div>
          <div className='comment'>This is a powerful story is based on the authors family history about three women from different walks of life and the tragedies and the horrors they endured and the determination to get through the war and be re united with their families.</div>
        </div>
        <hr/>
        <div className='review'>
          <div className='photo-container'>
            <div className='photo'></div>
          </div>
          <div className='comment'>The Lost Daughters of Ukraine took my breath away. This heart-wrenching novel is the story of three women whose lives are forever changed by the terrors their families and their homeland endured during WWII. There are passages and scenes in this book that are very hard to read—honest and raw accounts of the horrors of war, and especially the suffering and brutality that were unique to Ukraine.</div>
        </div>
        <hr/>
        <div className='review'>
          <div className='photo-container'>
            <div className='photo'></div>
          </div>
          <div className='comment'>Painful book to read, especially in light of what The Ukraine 🇺🇦 is having to endure right now.</div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Book></Book>
  );
}

export default App;
