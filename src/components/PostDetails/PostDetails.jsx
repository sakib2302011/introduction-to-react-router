import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
  
  const post = useLoaderData();

  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  }
  return (
    <div>
      <h3>Post title: {post.title}</h3>
      <h3>Body: {post.body}</h3>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default PostDetails;