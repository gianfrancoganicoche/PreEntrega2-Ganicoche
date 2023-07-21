import React from 'react'


const ItemDetail = ({item}) => {
  return (
      <div className='text-black row p-2'>
        <div className='col-md-4 offset-md-4'>
          <img src={item.imagen} className='rounded img-fluid' alt={item.nombre}/>
          <div className='card text-center'>
          <h2>{item.nombre}</h2>
          <p>{item.descripcion}</p>
          <p> Precio: $ {item.precio}</p>
          <p> Stock: {item.stock}</p>
        </div>
      </div>
      </div>
  )
}

export default ItemDetail