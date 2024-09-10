import { Appbar } from "../components/Appbar"
import Blogcard from "../components/BlogCard"
import useblogs from "../../hooks"
import Aside from "../components/Aside";
import { BlogSkeleton } from "../components/BlogSkeletion";


function FullBlog(){
    const{blogs,loading}=useblogs();
    if(loading){
        return <div>
                    <BlogSkeleton/>
                    <BlogSkeleton/>
                    <BlogSkeleton/>
                    <BlogSkeleton/>
                    <BlogSkeleton/>
                    <BlogSkeleton/>
                    <BlogSkeleton/>

                </div>
    }
    return(
        <>
            <Appbar/>
            <div className="flex">
                <div className="w-3/4">    
                     {blogs.map(blog=><Blogcard key={blog.id} title={blog.title} date={blog.date} content={blog.content} id={blog.id} author={blog.author.name ||"anonymous"}/>)}</div>
                <div>
                    <Aside/>
                </div>
            </div>
       
            

            
            
        </>

    )
}
export default FullBlog