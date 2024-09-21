import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  
  const user = useLoaderData();

  const {name, website, phone} = user;

  return (
    <div>
      <h1>Details for Mr. {name} </h1>
      <h3>Phone Number: {phone}</h3>
      <h3>Website: <a href="#">{website}</a> </h3>
    </div>
  );
};

export default UserDetails;