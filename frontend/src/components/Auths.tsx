import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {SignupType,signupInput} from "@arpitdevs/common1"

import axios from "axios";
interface type{
    type:"signup"|"signin"
}
export function Auth({type}:type){
    const navigate=useNavigate()
    const [inputValue,setInputValue]=useState<SignupType>({
        name:"",
        password:"",
        email:""
    })
    async function sendRequest(){
        try{
            const respone=await axios.post( `${import.meta.env.VITE_backendURL}/api/v1/user/${type==="signup"?"signup":"signin"}`,inputValue);
            const {success}= signupInput.safeParse(inputValue)
            if(!success){
                alert("invalid syntax while login")
            }
            else{
                const jwt=respone.data;
                localStorage.setItem("token",jwt)
                navigate("/blogs")
                console.log(inputValue)
            }

        }
        catch(e){
            console.log(e)
            alert("error while sigining in")
        }
    }
    return(
            
            <div className="flex flex-col h-screen  space-y-2 justify-center mx-32 ">
                <div className="font-bold text-4xl text-center mx-20"> {type==="signup"?"Create an account":"Login To Your Account"}</div>
                <div className="text-center text-gray-500 ">{type==="signup"?"Already have a account?":"Don't Have a Account?"} <Link className="underline" to={type==="signup"?"/signIn":"/signUp"}> {type==="signup"?"Login":"Sign up"}</Link> </div>
                <div className="" >
                    {type==="signup"?<InputBox title={'UserName'} placeholder={'Enter Your Name here'}  onChange={(e)=>{
                        setInputValue({
                            ...inputValue,
                            name: e.target.value
                        })

                    }} ></InputBox>:null}
                    <InputBox title={"Email"} placeholder={"Enter the Email"}  onChange={(e)=>{
                        setInputValue({
                            ...inputValue,
                            email: e.target.value
                        })

                    }}></InputBox>
                    <InputBox title={"Password"} type={"password"} onChange={(e)=>{
                        setInputValue({
                            ...inputValue,
                            password: e.target.value
                        })

                    }} ></InputBox>
                    
                    <button onClick={sendRequest} className="bg-black rounded-lg w-full mt-3 text-white p-2 font-bold">{type==="signup"?"Signup":"Signin"}</button>
                    
                </div>
             </div>

    )
}
interface inputbox{
    title:string,
    placeholder?:string,
    type?:string
    onChange: (e:ChangeEvent<HTMLInputElement>)=> void
}
function InputBox({type,title,placeholder,onChange}:inputbox){
    return(
        <div>
            <label className="font-bold  ">{title}</label><br></br>
            <input onChange={onChange} type={type || "text"} placeholder={placeholder} className="border-black border rounded-md p-2 w-full "/>
        </div>

    )
}
