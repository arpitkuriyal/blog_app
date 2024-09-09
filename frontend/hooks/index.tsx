import axios from "axios"
import { useEffect, useState } from "react"
import { backendURL } from "../src/config"
export interface BlogCardProps{
    date:string
    id:string,
    title: string,
    content:string,
    author:{
        name:string
    }
}


export function useBlog({id}:{id:string}){
    const [loading,isLoading]=useState(true)
    const [blogs,setBlogs]=useState<BlogCardProps>()
    useEffect(()=>{
        const fetch=async ()=>{
           const response=await axios.get(`${backendURL}/api/v1/blog/${id}`,{
                headers:{
                    Authorization:localStorage.getItem("token")
                }
            })
            setBlogs(response.data.post)
            isLoading(false)
            console.log(response)
        }
        fetch()
      
        
    },[])
    return {blogs,loading}
}






function useBlogs(){
    const [loading,isLoading]=useState(true)
    const [blogs,setBlogs]=useState<BlogCardProps[]>([])

    useEffect(()=>{
        const fetchBlogs=async()=>{
            try{
                const respnose=await axios.get(`${backendURL}/api/v1/blog/all/bulkss`,{
                    headers:{
                        Authorization:localStorage.getItem("token")
                    }
                })
                setBlogs(respnose.data.allBlog)
                console.log(respnose)
                isLoading(false)
            }
            catch(e){
                console.log(e)
            }
        }
        fetchBlogs()

        }
    ,[])
    return {blogs,loading} 
}
export default useBlogs;





