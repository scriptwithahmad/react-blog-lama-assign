import "./home.css"
import Header from "../../components/header/Header"
import React from 'react'
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import { useState , useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";



function Home() {

  const [ posts, setPosts ]  = useState([])
  const { search } = useLocation();

  useEffect(()=> {
    Aos.init({duration: 1000})
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search)
      setPosts(res.data)
    }
    fetchPosts()
  },[search])

  // Aos 
  // useEffect(()=> {
  //   Aos.init({duration: 1000})
  // },[])
  //Aos

  return (
    <div>
        <Header />
        <div className="home" data-aos="fade-up">
          <Posts posts={posts} />
          <Sidebar />
        </div>
    </div>
  )
}

export default Home;

