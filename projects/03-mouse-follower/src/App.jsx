import { useEffect, useState } from 'react'

const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event
      setPosition({ x: clientX, y: clientY })
    }

    //Agregar evento a la ventana
    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }
    //Cleanup
    // si no se hace va a generar un fuga de memoria 
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }

  }, [enabled])


  return (
    <>
      <div style={{
        position: 'absolute',
        backgroundColor: '#09f',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`,

      }} />


      <button onClick={() => setEnabled(!enabled)} type="button">
        {enabled ? 'desactivar' : 'activar'} seguir puntero del mouse
      </button>
    </>
  )
}

function App() {

  return (
    <>
      <FollowMouse />
    </>
  )
}

export default App
