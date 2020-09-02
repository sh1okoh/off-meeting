import React from 'react';
import './App.css';

const findUserLists = () => {
  const userLists = [
    {
      id: 1,
      name: "hogehoge",
      image: "image2"
    },
    {
      id: 2,
      name: "fugafuga",
      image: "image2"
    }
  ]

  return userLists;
}

function UserListComponent() {
  return (
    <>
    {
      findUserLists().map(c => {
        return (
          <ul>
            <li>{c.image}</li>
            <li>{c.id}</li>
            <li>{c.name}</li>
          </ul>
        )
      })
    }
    </>
  )
}

function App() {
  return (
    <>
    <h1>Hello World</h1>
    <UserListComponent />
    </>
  );
}

export default App;
