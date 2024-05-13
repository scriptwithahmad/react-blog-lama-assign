import "./Post.css";
import { Link } from "react-router-dom";

function Post({ post }) {
  const PF = "http://localhost:5000/images/"
  return (
    <div className="post">
      {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}

      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c) => (
            <span className="postCat">{c.name}</span>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className="link" >
          <h2 className="postTitle">{post.title}</h2>
        </Link>
        {/* <hr /> */}
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
        <p className="postDesc">{post.desc}</p>
      </div>
    </div>
  );
}

export default Post;
