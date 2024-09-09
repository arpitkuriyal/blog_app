
import {  type SVGProps } from 'react';
import { Link } from 'react-router-dom';
interface blogsProps{
    title:string,
    date:string,
    content:string,
    id:string,
    author:string
}
function Blogcard({title,content,date,id,author}:blogsProps){

    return(
        <Link to={`/blog/${id}`}>
            <div className='flex flex-col w-2/3 m-auto py-5 border-t-2 border-r-0 border-l-0 border-b-1 border-gray-300'>
            <div className='flex space-x-2 items-center '>
                <Avatar name={author}/>
                <div className='font-semibold'>{author}</div>
                <div className='text-gray-400'>{date}</div>
                <Star/>
            </div>
            <div>{title}</div>
            <div>{content.slice(0,100)+"..."}</div>
            <div className='mt-3 text-gray-400 font-light'>3 min read </div>
            </div>
        </Link>

    )
}

function Avatar({name}:{name:string}){
    return(
        <div className="rounded-full w-7 h-7 bg-gray-300 text-center ">
            {name[0]}
        </div>
    )
}
function Star(props: SVGProps<SVGSVGElement>) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 512 512" {...props}><defs><linearGradient id="meteoconsStarFill0" x1={187.9} x2={324.1} y1={138.1} y2={373.9} gradientUnits="userSpaceOnUse"><stop offset={0} stopColor="#fcd966"></stop><stop offset={0.5} stopColor="#fcd966"></stop><stop offset={1} stopColor="#fccd34"></stop></linearGradient></defs><path fill="url(#meteoconsStarFill0)" stroke="#fcd34d" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="m105.7 263.5l107.5 29.9a7.9 7.9 0 0 1 5.4 5.4l29.9 107.5a7.8 7.8 0 0 0 15 0l29.9-107.5a7.9 7.9 0 0 1 5.4-5.4l107.5-29.9a7.8 7.8 0 0 0 0-15l-107.5-29.9a7.9 7.9 0 0 1-5.4-5.4l-29.9-107.5a7.8 7.8 0 0 0-15 0l-29.9 107.5a7.9 7.9 0 0 1-5.4 5.4l-107.5 29.9a7.8 7.8 0 0 0 0 15Z" transform="rotate(-15 256 256)" opacity={1}></path></svg>);
}
export default Blogcard;

function useblog(): { loading: any; blog: any; } {
    throw new Error('Function not implemented.');
}
