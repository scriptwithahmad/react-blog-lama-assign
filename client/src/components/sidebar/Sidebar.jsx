import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    Aos.init({ duration: 1000 });
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle" data-aos="fade-up">
          About Me
        </span>
        <img
          className="sidebarImg"
          data-aos="fade-in"
          src="./Images/hero.jpg"
          alt=""
        />
        <p className="para" data-aos="zoom-out">
          Hi there, This is Muhammad Ahmad. I am a full stack web developer in
          the latest technology around the globe. I build modern single page
          applications using React and Next.JS. Deep knowledge of
          HTML5, CSS3 and JavaScript are my major worth.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle" data-aos="flip-up">Categories</span>
        <ul className="sidebarList" data-aos="flip-down">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
              <li className="sidebarlistItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Follow Us</span>
        <div className="sidebarSocial" data-aos="zoom-out-up">
          <i className="sidebarIcon fa-brands fa-facebook"></i>
          <i className="sidebarIcon fa-brands fa-square-instagram"></i>
          <i className="sidebarIcon fa-brands fa-github"></i>
          <i className="sidebarIcon fa-brands fa-square-twitter"></i>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
