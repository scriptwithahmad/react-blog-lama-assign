import Home from "./pages/home/Home";
// import Numfunction from "./components/topbar/topbar";
import Single from "./pages/Single/Single";
import Write from "./pages/Write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Topbar from "./components/topbar/topbar";
import { useContext } from "react";
import { Context } from "./context/Context";

const App = () => {
  const { user } = useContext(Context);
  return (
    <BrowserRouter>
      <Topbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/settings" element={user ? <Settings /> : <Register />} />
        <Route path="/post/:postId" element={<Single />} />

        {/* <Route path="*" element={"404 Page Not Found"} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
