import { useState, useEffect } from 'react'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

const getFirstWordFromFact = (fact) => {
  const newFact = fact.split(' ').slice(0, 3).join(' ')
  return newFact
}

export function useCatImage ({ fact }) {
  const [image, setImage] = useState('')

  useEffect(() => {
    if (!fact) return
    const firstWord = getFirstWordFromFact(fact)
    fetch(`https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red&json=true`)
      .then(response => response.json())
      .then(data => {
        const { _id } = data
        const url = `/cat/${_id}/says/${firstWord}`
        setImage(url)
      })
  }, [fact])

  return { imageUrl: `${CAT_PREFIX_IMAGE_URL}${image}` }
}
