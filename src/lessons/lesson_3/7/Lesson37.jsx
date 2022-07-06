import React from "react";
//???????????????
const Lesson37 = () => {
  const state = {
    hrefs: [
      { href: "1.html", text: "ссылка 1" },
      { href: "2.html", text: "ссылка 2" },
      { href: "3.html", text: "ссылка 3" },
    ],
  };

  return (
    <ul>
      {state.hrefs.map((item, index) => (
        <li key={index}>
          <a href={item.href}>{item.text}</a>
        </li>
      ))}
    </ul>
  );
};

export default Lesson37;
