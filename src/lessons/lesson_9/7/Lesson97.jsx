import React, { useState } from 'react'

const Lesson97 = () => {
  const [products, setProducts] = useState([
    { title: 'Pomidor', price: 5, quantity: 100, amount: true },
    { title: 'Ogirok', price: 4, quantity: 350, amount: true },
    { title: 'Tcibulia', price: 1, quantity: 700, amount: true },
    { title: 'Kukurudza', price: 6, quantity: 34, amount: true },
    { title: 'Rediska', price: 1, quantity: 240, amount: true },
    { title: 'Kartoshka', price: 1, quantity: 1270, amount: true },
    { title: 'Morkva', price: 2, quantity: 830, amount: true }
  ]);

  const TableOfProdacts = ({ data, removeFunc }) => {
    return (
      <table>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.title}
              </td>
              <td>{item.price}
              </td>
              <td>{item.quantity}
              </td>
              <td>{item.price * item.quantity}</td>
              <button onClick={() => removeFunc(index)}>DELETE PRODUCT</button>
            </tr>
          ))}
        </tbody>
      </table>
    )
  };

  const handleRemove = (index) => {
    const copy = [...products]
    copy.splice(index, 1);
    setProducts(copy);
  };

  return <div>
    <TableOfProdacts data={products} removeFunc={handleRemove} />
  </div>
}

export default Lesson97
