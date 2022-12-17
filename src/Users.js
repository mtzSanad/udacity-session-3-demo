import React from 'react';
import User from './User';

const Users = ({ users }) => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <User user={user} />
        </li>
      ))}
    </ul>
  );
};

export default Users;
