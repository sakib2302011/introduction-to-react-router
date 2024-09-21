import { Link } from "react-router-dom";

const User = (user) => {
  
  const {id, name, username, email} = user.user;
  // console.log(user);
  const userStyle = {
    border: '2px solid lime',
    padding: '15px'
  }
  return (
    <div style={userStyle}>
      <h3>ID: {id} </h3>
      <h3>Name: {name} </h3>
      <h3>Username: {username} </h3>
      <h3>Email: {email} </h3>
      <Link to={`/user/${id}`}>
        <button>Show Details</button>
      </Link>
    </div>
  );
};

export default User;