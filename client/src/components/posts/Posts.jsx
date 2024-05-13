import Post from "../Post/Post";
import "./Posts.css";


function Posts({ posts }) {
  return (
    <div className="posts" data-aos="zoom-in">
      {posts.map((p) => (
        <Post post={p} />
      ))}
    </div>
  );
}

export default Posts;
