import React from 'react'
import { MyBoton} from './components/MyBoton/MyBoton'
import { MyInput } from './components/MyInput/MyInput'
export const Mifunct = () => {    // nombre de la funcion es el nombre del componente, la primera siempre es 
                              // en mayuscula
  return (        // aprenderiza componentes html no esta obligado
    <div> 
      <MyInput fondo = 'red' name="Ingrese user" type='text'/>    // envia la prop en jason
      <MyInput fondo = 'blue' name="Password" type = 'password' />
    </div>        // returna un html
  )
}

// creamos con reactfc es el primer componente con export exportamos componente o
// se usa export const para exportar varios componentes

// export const Mifunct = () => {    // nombre de la funcion es el nombre del componente, la primera siempre es 
//   // en mayuscula
// return (
// <div>Hello wordf</div>        // returna un html
// )
// }

// export default app              // se usa solo cuando se exporta un solo componente

