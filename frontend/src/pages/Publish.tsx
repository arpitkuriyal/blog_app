import { Appbar } from "../components/Appbar";
import NewBlog from "../components/NewBlog";

function Publish(){
    return(
        <div className="h-screen">
            <Appbar/>
            <NewBlog/>
        </div>
    )
} export default Publish;