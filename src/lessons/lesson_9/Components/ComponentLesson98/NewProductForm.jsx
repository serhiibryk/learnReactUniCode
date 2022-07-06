import React from 'react'
// import Lesson98 from '../8/Lesson98';


const NewProductForm = ({ products, handleChange, handleClick }) => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
        <span>Title:</span>
        <input
          type="text"
          value={products.newProduct.title}
          name="title"
          onChange={handleChange}
        />
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
        <span>Price:</span>
        <input
          value={products.newProduct.price}
          name="price"
          type="number"
          onChange={handleChange}
        />
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
        <span>Quantity:</span>
        <input
          value={products.newProduct.quantity}
          type="number"
          name="quantity"
          onChange={handleChange}
        />
      </div>

      <button
        style={{ display: 'flex', justifyContent: 'flex-start' }}
        onClick={handleClick} >Add new product</button>
    </div>
  );



};

export default NewProductForm
