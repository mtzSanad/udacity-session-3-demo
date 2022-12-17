import React, { useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Search from './Search';
import Users from './Users';

const App = () => {
  const [users, setUsers] = useState([]);

  const updateUser = (user) => {
    setUsers([user]);
  };

  //Don't put async on useEffect 1st param function
  useEffect(() => {
    //Creaqting anonymous IIFE to use async await
    (async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users`
      );
      const users = await response.json();
      console.log(users);
      //Now we update the state
      setUsers(users);
    })();
  }, []);

  if (users?.length === 0) {
    return <h1>Loading ...</h1>;
  }

  return (
    <div>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Link to="/search">Go to search</Link>
              <Users users={users} />
            </>
          }
        />
        <Route
          path="/search"
          element={<Search users={users} updateUser={updateUser} />}
        />
      </Routes>
    </div>
  );
};

export default App;
