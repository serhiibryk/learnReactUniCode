import React from "react";

const FuncSummOfQuantities = ({ products }) => {
  const handleSumm = () => {
    return products.existingProducts.reduce((prev, current) => {
      if (current.checked) {
        const summ = current.price * current.quantity;
        return prev + summ;
      }
      return prev;
    }, 0);
  };

  return <p>Сумма продуктов - {handleSumm()}</p>;
};

export default FuncSummOfQuantities;
