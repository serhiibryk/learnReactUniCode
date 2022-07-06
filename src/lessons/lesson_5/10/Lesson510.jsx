import React, { useState } from 'react'

const Lesson510 = () => {
  const [state, setState] = useState({
    hrefs: [
      { href: '1.html', text: 'ссылка 1' },
      { href: '2.html', text: 'ссылка 2' },
      { href: '3.html', text: 'ссылка 3' },
    ],
    newHref: { href: '', text: '' },
  });

  const handleEvent = () => {

    const copyInfo = { ...state };
    copyInfo.hrefs.push({
      href: copyInfo.newHref.href,
      text: copyInfo.newHref.text
    });
    copyInfo.newHref = { href: '', text: '' };
    setState(copyInfo);
  };

  const List = () => {
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

  const handleChange = ({ target: { name, value } }) => {
    setState({
      ...state,
      newHref: {
        ...state.newHref,
        [name]: value
      }
    })
  };

  return <div>
    <List data={state.hrefs} />
    <ul></ul>
    <input type='text' name='href' value={state.hrefs.href} onChange={handleChange} />
    <input type='text' name='text' value={state.hrefs.text} onChange={handleChange} />
    <button onClick={handleEvent}>Add new Link</button>
  </div>

}

export default Lesson510
