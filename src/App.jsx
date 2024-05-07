import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Ana from './components/ana'
import img1 from '../src/imagenes/img1.png'
import img2 from '../src/imagenes/img2.png'
import img3 from '../src/imagenes/img3.png'
import estilo from './components/testimonioDesing.module.scss'

function App() {
  const arreglo = [
    {
      id: 1,
      nombre: 'Ana',
      pais: 'México',
      imagen: img1,
      cargo: 'inge',
      empresa: 'fasda',
      testimonio: 'hola'
    },
    {
      id: 2,
      nombre: 'Gera',
      pais: 'USA',
      imagen: img2,
      cargo: 'inge',
      empresa: 'bimbo',
      testimonio: 'hola brow'
    },
    {
      id: 2,
      nombre: 'Gera',
      pais: 'USA',
      imagen: img3,
      cargo: 'inge',
      empresa: 'bimbo',
      testimonio: 'hola brow'
    }
  ]
  const [count, setCount] = useState(0)

  return (
    <>
      <div className={estilo.general}>
        <h1>Preactica de la clase de ana</h1>
        {arreglo.map((arreglo) => {
          return <Ana  key={arreglo.id} nombre={arreglo.nombre} pais={arreglo.pais} imagen={arreglo.imagen} cargo={arreglo.cargo} empresa={arreglo.empresa} testimonio={arreglo.testimonio}/>

        })

        }
      </div>

    </>
  )
}

export default App
