import './App.css'
import { useCatFact } from "./hooks/useCatFact"
import { useCatImage } from "./hooks/useCatlmage"


export function App() {
    const { fact, refreshFact } = useCatFact()
    const { imageUrl } = useCatImage({ fact })

    const handleClick = () => refreshFact()

    return (

        <main>
            <h1>App de Gatitos</h1>
            <button onClick={handleClick} type="button">Nuevo</button>
            <section>
                {fact && <p>{fact}</p>}
                {imageUrl && <img src={imageUrl} alt={`Image of cat with the text ${fact}`} />}
            </section>
        </main>
    )
}