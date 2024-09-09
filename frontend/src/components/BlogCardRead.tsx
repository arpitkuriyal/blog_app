import { BlogCardProps } from "../../hooks"

export function BlogCardRead({blog}:{blog:BlogCardProps}){
    return (
        <div className="grid grid-cols-3 w-full h-screen pt-20 px-16 gap-6 overflow-x-hidden">
            <div className="col-span-2">
                <div className="font-bold text-4xl">
                    {blog.title}
                </div>
                <div className="text-gray-500">Posted On 14 August 2024</div>
                <div>{blog.content}              
                </div>
            </div>
            <div className="col-span-1">
                <div className="font-bold px-4">
                    Author
                </div>
                <div className="grid grid-rows-2 grid-cols-4 place-items-center ">
                    <div className="rounded-full w-7 h-7 bg-gray-300 row-span-2 "></div>
                    <div className="col-span-3 font-bold text-3xl place-self-start">{blog.author.name || "anonymous"}</div>
                    <div className="col-span-3">Master of the mirth and the funniest person in the kingdom</div>
                </div>


            </div>
        </div>

    )
}

