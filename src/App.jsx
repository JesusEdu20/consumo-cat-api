import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'
import './App.css'

export function App () {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  return (
    <main>
      <section className='app-container'>
        <div className='fact-container'>
          <p className='fact'>{fact}</p>
        </div>
        <div className='img-container'>
          <img src={imageUrl} alt={`Image extracted using the first three words for ${fact}`} />
        </div>
        <button className='fact-button' onClick={refreshFact}>New Fact</button>
      </section>
    </main>
  )
}
