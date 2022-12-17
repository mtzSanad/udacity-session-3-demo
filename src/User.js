import React from 'react';

const User = ({ user }) => {
  const { id, name, email } = user;
  return (
    <div>
      <p>{id}</p>
      <p>{name}</p>
      <p>{email}</p>
    </div>
  );
};

export default User;
