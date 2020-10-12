import React from 'react';
import User from './User'


function App() {

  return (
    <div className="App">
      <User user={[{name: "Jack", lastname: "Yell"}, {name: "Jack", lastname: "Bourne"},{name: "Zaack", lastname: "Ari"},{name: "Ali", lastname: "Pitt"}, {name: "Maria", lastname: "Hendrix"}]} />
    </div>
  );
}

export default App;
