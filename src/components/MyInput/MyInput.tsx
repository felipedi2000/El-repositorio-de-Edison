// ejecutar rafc  y tab
import React from 'react'
import  {setup} from './styles'

interface Props {                                  //se crea una propiedad para extraer el json
    name: string;
    type: string;
    fondo: string;
}

export const MyInput = ({name, type, fondo }: Props) => {    //llega la propiedad como jason
    return (
    <input style= {setup.inputs} type = {type}  placeholder = {name}></input>    // input de tipo text
  )
}

