import React from 'react';
import { useSelector } from 'react-redux'; //helps in accessing the value of states when we use them

const Profile = () => {
  const user = useSelector((state) => state.user.value); //fetching the value
  return (
    <div>
      <h1>Profile page</h1>
      <p>
        Hello <span>{user.name}</span>!
      </p>
      <p>
        You are <span>{user.age}</span> years old
      </p>
      <p>
        Your email address is <span>{user.email}</span>
      </p>
    </div>
  );
};

export default Profile;
