import { useState, useEffect } from 'react'
import { getRandomImage } from '../services/facts'

export function useCatImage({ fact }) {

    const [imageUrl, setImageUrl] = useState(null)

    useEffect(() => {
        if (!fact) return
        const threeFirtsWords = fact.split(' ', 3).join(' ')
        getRandomImage(threeFirtsWords).then(url => setImageUrl(url))
    }, [fact])

    return { imageUrl }
}