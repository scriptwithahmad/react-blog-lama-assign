import "./SinglePost.css";
import { useLocation } from "react-router";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";
import toast, { Toaster } from "react-hot-toast";



function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const PF = "http://localhost:5000/images/";
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      toast.success("Deleted Successfully!", {
        duration: 5000,
      })
      await axios.delete(`/posts/${post._id}`, {
        data: { username: user.username },
      });
      // window.location.replace("/");
      // window.location.replace("/posts");
    } catch (err) {}
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${post._id}`, {
        username: user.username,
        title,
        desc,
      });
      setUpdateMode(false)
    } catch (err) {}
  };

  return (
    <div className="SinglePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <div className="imgDiv">
            <img src={PF + post.photo} alt="" />
          </div>
        )}
        {updateMode ? (
          <input
            type="text"
            value={title}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singlePostTitle">
            {title}
            {post.username === user?.username && (
              <div className="singlePostEdit">
                <i
                  class="fa-solid fa-pen-to-square"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i class="fa-solid fa-trash" onClick={handleDelete}></i>
              </div>
            )}
          </h1>
        )}
        <div className="singlePostInfo">
          <span className="author">
            Author:
            <Link to={`/?user=${post.username}`} className="link">
              <b>{post.username}</b>
            </Link>
          </span>
          <span className="SinglePostDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        <Toaster />
        {updateMode ? (
          <textarea
            className="singlePostDescInput"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className="singlePostDesc">{desc}</p>
        )}
        {updateMode && (
          <button className="singlePostButton" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
  );
}

export default SinglePost;
