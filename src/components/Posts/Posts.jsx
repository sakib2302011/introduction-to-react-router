import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";
import '../Users/Users.css'

const Posts = () => {
  
  const posts = useLoaderData();
  
  
  return (
    <div>
      <h1>Post: {posts.length} </h1>
      <div className="posts">
        {
          posts.map(post => <Post key={post.id} post={post}></Post>)
        }
      </div>
    </div>
  );
};

export default Posts;