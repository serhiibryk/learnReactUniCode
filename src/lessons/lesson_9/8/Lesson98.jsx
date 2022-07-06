import React, { useState } from 'react'
import NewProductForm from '../Components/ComponentLesson98/NewProductForm';

const Lesson98 = () => {
  const [products, setProducts] = useState({
    existingProducts: [
      { title: 'Pomidor', price: 5, quantity: 100 },
      { title: 'Ogirok', price: 4, quantity: 350 },
      { title: 'Tcibulia', price: 1, quantity: 700 },
      { title: 'Kukurudza', price: 6, quantity: 34 },
      { title: 'Rediska', price: 1, quantity: 240 },
      { title: 'Kartoshka', price: 1, quantity: 1270 },
      { title: 'Morkva', price: 2, quantity: 830 }
    ],
    newProduct: { title: '', price: '', quantity: '' }
  });



  const TableOfProdacts = ({ data, removeFunc }) => {
    return (
      <table>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>
                {item.title}
              </td>

              <td>
                {item.price}
              </td>

              <td>
                {item.quantity}
              </td>

              <td>
                {item.price * item.quantity}
              </td>
              <button onClick={() => removeFunc(index)}>DELETE PRODUCT</button>
            </tr>
          ))}
        </tbody>
      </table>
    )
  };

  const handleRemove = (index) => {
    const copy = { ...products };
    copy.existingProducts.splice(index, 1);
    setProducts(copy);
  };

  const handleChange = ({ target: { value, name } }) => {
    setProducts({
      ...products,
      newProduct: {
        ...products.newProduct,
        [name]: value,
      },
    });
  };

  const handleClick = () => {
    const copy = { ...products };
    copy.existingProducts = [...copy.existingProducts, copy.newProduct];
    copy.newProduct = {
      title: '',
      price: '',
      quantity: ''
    };

    setProducts(copy);
  };

  return <div>
    <TableOfProdacts data={products.existingProducts} removeFunc={handleRemove} />
    <NewProductForm handleClick={handleClick} handleChange={handleChange} products={products} />


  </div >
}

export default Lesson98
