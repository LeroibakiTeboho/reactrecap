import React from 'react'
import { useState } from 'react';

const Content = () => {

    const [name, setName] = useState('Teboho');
    const [count, setCount] = useState(0);

    const handleNameChange = () =>{
        const names = ['Bob', 'Kevin','Dave'];
        const int = Math.floor(Math.random() * names.length);

        setName(names[int]);
    }

    const handleClick = () =>{
        setCount(count + 1);
        console.log(count);
    }
    const handleClick2 = (name) =>{
        console.log(`${name} was clicked`);
    }
    const handleClick3 = (e) =>{
        console.log(e.target.innerText);
    }



  return (
    <main>
        <p onDoubleClick={handleNameChange}>
            Hello {name}!
        </p>

        <button onClick={handleNameChange}>Change Name</button>
        <button onClick={handleClick}>Click It</button>
        <button onClick={(e) => handleClick3(e)}>Click It</button>
    </main>
  )
}

export default Content