import { useParams } from "react-router-dom";
import { Appbar } from "../components/Appbar";
import { BlogCardRead } from "../components/BlogCardRead";
import { useBlog } from "../../hooks";
import { BlogSkeleton } from "../components/BlogSkeletion";


function BlogRead(){
    const {id}=useParams()
    const {loading,blogs}=useBlog({id:id||""})
    
    if(loading || !blogs){
        return(
            <div>
                <BlogSkeleton/>
                <BlogSkeleton/>
                <BlogSkeleton/>
                <BlogSkeleton/>
            </div>
        )
    }

    return(
        <div>
            <Appbar/>
            <BlogCardRead blog={blogs}/>
            
        </div>
    )
} export default BlogRead;