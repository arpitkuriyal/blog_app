import { CreatePostType } from "@arpitdevs/common1";
import { ChangeEvent, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { createBlogInput } from "@100xdevs/medium-common";

function NewBlog(){
    const navigate=useNavigate()
    const [inputValue,setInputValue]=useState<CreatePostType>({
        title:"",
        content:""
    })

    return(

        <div className="mx-96 mt-32">
            <div className="flex">          
                <div className="h-10 border bg-gray-400 w-1 mx-4 "></div>
                <textarea placeholder="Title" className="text-4xl  w-full h-20  font-serif focus:outline-none " onChange={(e:ChangeEvent<HTMLTextAreaElement>)=>{
                     setInputValue({...inputValue,title:e.target.value});
                }} />
            </div>
            <textarea placeholder="Tell Your Story" className=" ml-10 h-96 w-full placeholder-gray-600 focus:placeholder-gray-500 border-transparent focus:outline-none  "onChange={(e:ChangeEvent<HTMLTextAreaElement>)=>{
                     setInputValue({...inputValue,content:e.target.value});
                }} />
             <button className="rounded-lg bg-green-500 px-4" onClick={async ()=>{
                try{
                    const response=await axios.post(`${import.meta.env.VITE_backendURL}/api/v1/blog`,{
                        title:inputValue.title,
                        content:inputValue.content
                    },{
                        headers:{
                            Authorization:localStorage.getItem("token")
                        }
                    });
                    console.log(response)
                    const {success}= createBlogInput.safeParse(inputValue)
                    if(!success){
                        alert('invalid inputs')
                    }
                    else{
                        navigate(`/blog/${response.data.post.id}`)
                    }
                }
                catch(e){
                    console.log(e,"fuck")
                }

             }}>Publish</button>
        </div>
    )
}

export default NewBlog;