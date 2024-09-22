import { Link, useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

const Post = ({post}) => {
  
  const {id, title} = post;

  const postsStyle = {
    border: '2px solid lime',
    padding: '15px'
  };

  const navigate = useNavigate();
  const handleLoadPostDetails =() => {
    navigate(`/posts/${id}`);
  };

  return (
    <div style={postsStyle}>
      <h3>Post no. {id}</h3>
      <h3>Title: {title} </h3>
      <Link to={`/posts/${id}`}>
        <button>Post Details</button>
      </Link>
      <button onClick={handleLoadPostDetails}>Detail Button</button>
    </div>
  );
};

Post.propTypes ={
  post: PropTypes.object
}
export default Post;