import React, { useState } from 'react'
import FuncSummOfQuantities from '../Components/ComponentLesson99/FuncSummOfQuantities'

export const Lesson910 = () => {
  const [products, setProducts] = useState({
    existingProducts: [
      { title: 'Pomidor', price: 5, quantity: 100, checked: false },
      { title: 'Ogirok', price: 4, quantity: 350, checked: false },
      { title: 'Tcibulia', price: 1, quantity: 700, checked: false },
      { title: 'Kukurudza', price: 6, quantity: 34, checked: false },
      { title: 'Rediska', price: 1, quantity: 240, checked: false },
      { title: 'Kartoshka', price: 1, quantity: 1270, checked: false },
      { title: 'Morkva', price: 2, quantity: 830, checked: false }
    ],
    newProduct: { title: '', price: '', quantity: '' },
  });

  const TableOfProdacts = ({ data, removeFunc, handleChangeChecked }) => {
    return (
      <table>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>
                <input type="checkbox" checked={item.checked} onChange={() => handleChangeChecked(index)} />
              </td>

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
              <td>
                <button onClick={() => removeFunc(index)}>DELETE PRODUCT</button>
              </td>
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
    copy.existingProducts.push(copy.newProduct);
    copy.newProduct = {
      title: '',
      price: '',
      quantity: ''
    };

    setProducts(copy);
  };

  const handleChangeChecked = (index) => {
    const copy = { ...products };
    copy.existingProducts[index].checked = !copy.existingProducts[index].checked;
    setProducts(copy);
  };

  return <div>
    <TableOfProdacts data={products.existingProducts} removeFunc={handleRemove} handleChangeChecked={handleChangeChecked} />
    <FuncSummOfQuantities products={products} />
    <div>
      {products.currentSumOfQuantities}
    </div>

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
  </div>
}

export default Lesson910
