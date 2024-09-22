import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
  
  const post = useLoaderData();

  return (
    <div>
      <h3>Post title: {post.title}</h3>
      <h3>Body: {post.body}</h3>
    </div>
  );
};

export default PostDetails;