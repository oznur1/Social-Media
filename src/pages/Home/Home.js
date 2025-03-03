
import Topbar from "../../components/topbar/Topbar"
import "./home.css"
 import Sidebar from "../../components/sidebar/Sidebar"
import Feed from "../../components/feed/Feed"
import Rigthbar from "../../components/rightbar/Rightbar"
function Home() {
  return (
    <>
<Topbar/>
  <div className="homeContainer">  

<Sidebar/>
<Feed/>
<Rigthbar/>
</div>
 </>
)
}

export default Home;
