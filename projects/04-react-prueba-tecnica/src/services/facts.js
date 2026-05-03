const CAT_ENDPOINT_FACT_URL = 'https://catfact.ninja/fact'


export const getRandomFact = () => {
    return fetch(CAT_ENDPOINT_FACT_URL)
        .then(res => res.json())
        .then(data => {
            const { fact } = data
            return fact
        })
}


export const getRandomImage = (threeFirtsWords) => {
    return fetch(`https://cataas.com/cat/says/${threeFirtsWords}?size=50&color=red&json=true`)
        .then(res => res.json())
        .then(data => {
            const { url } = data
            return url
        })
}