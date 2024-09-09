import { Appbar } from "../components/Appbar"
import Blogcard from "../components/BlogCard"
import { Spinner } from "../components/Spinner";
import useblogs from "../../hooks"


function FullBlog(){
    const{blogs,loading}=useblogs();
    if(loading){
        return <div>
                    <Spinner/>
                    <Spinner/>
                    <Spinner/>
                </div>
    }
    return(
        <>
            <Appbar/>
            {blogs.map(blog=><Blogcard key={blog.id} title={blog.title} date={blog.date} content={blog.content} id={blog.id} author={blog.author.name ||"anonymous"}/>)}
            
        </>

    )
}
export default FullBlog