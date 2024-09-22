import { Link } from "react-router-dom";

const Post = ({post}) => {
  
  const {id, title} = post;

  const postsStyle = {
    border: '2px solid lime',
    padding: '15px'
  }

  return (
    <div style={postsStyle}>
      <h3>Post no. {id}</h3>
      <h3>Title: {title} </h3>
      <Link to={`/posts/${id}`}>
        <button>Post Details</button>
      </Link>
    </div>
  );
};

export default Post;