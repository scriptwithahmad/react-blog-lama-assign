import "./Single.css"
import Sidebar from "../../components/sidebar/Sidebar"
import SinglePost from "../../components/SinglePost/SinglePost"



function Single() {
  return (
    <div className="Single">
        <SinglePost />
        <Sidebar />

    </div>
  )
}

export default Single