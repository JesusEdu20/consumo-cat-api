const API_RANDOM_FACT_URL = 'https://catfact.ninja/fact'
export async function getRandomFact () {
  const response = await fetch(API_RANDOM_FACT_URL)
  const data = await response.json()
  const { fact } = data
  return fact
}
