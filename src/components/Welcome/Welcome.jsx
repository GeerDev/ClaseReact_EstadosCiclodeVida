import React from 'react'
import List from './List/List'

function Welcome() {

    const comunidadAnillo = [
        {
            id:1,
            nombre: "Frodo",
            lugar: "La Comarca"
        },
        {
            id:2,
            nombre: "Legolas",
            lugar: "Rivendel"
        },
        {
            id:3,
            nombre: "Aragorn",
            lugar: "El trono de Gondor"
        },
    ]

    // const miembros = comunidadAnillo.map(miembro => (
    //     <p key={miembro.id}>Mi nombre es {miembro.nombre}</p>
    // ))

  return (
    <div>
        <h1>Hola</h1>
        <h3>Estos son los integrantes por ahora de la comunidad del anillo:</h3>
        {
            comunidadAnillo.map(miembro => (
                <List key={miembro.id} {...miembro}/>
            ))
        }
    </div>
  )
}

export default Welcome