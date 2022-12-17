import React, { useEffect, useState } from 'react';
import Users from './Users';

const Search = ({ users, updateUser }) => {
  const [txtValue, setTxtValue] = useState('');
  const handleChange = (event) => {
    setTxtValue(event.target.value);
  };

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${txtValue}`
      );
      const user = await response.json();
      updateUser(user);
    })();
  }, [txtValue]);

  return (
    <>
      <input
        type="text"
        placeholder="Search By Email"
        value={txtValue}
        onChange={handleChange}
      />
      <Users users={users} />
    </>
  );
};

export default Search;
