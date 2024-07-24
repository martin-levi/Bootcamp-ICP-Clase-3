import { useState } from 'react';
import { bootcamp_backend } from 'declarations/bootcamp_backend';

function App() {
  const [greeting, setGreeting] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const last = event.target.elements.last.value;
    const age = event.target.elements.age.value;
    bootcamp_backend.greet(name,last,age).then((greeting) => {
      setGreeting(greeting);
    });
    return false;
  }

  return (
    <main>
      <img src="/logo2.svg" alt="DFINITY logo" />
      <br />
      <br />
      <form action="#" onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre: &nbsp;</label>
        <input id="name" alt="Name" type="text" />
        <label htmlFor="last">Apellido: &nbsp;</label>
        <input id="last" alt="Name" type="text" />
        <label htmlFor="age">Edad: &nbsp;</label>
        <input id="age" alt="Name" type="number" />
        <button type="submit">Click Me!</button>
      </form>
      <section id="greeting">{greeting}</section>
    </main>
  );
}

export default App;
