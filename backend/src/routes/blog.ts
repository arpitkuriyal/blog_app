import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { verify } from "hono/jwt";
import { Context } from "hono";
import { createPostInput,updatePostInput } from "@arpitdevs/common1";

export const blogRouter=new Hono<{
    Bindings:{
        DATABASE_URL:string,
        JWT_SECRET:string
    },
    Variables:{
        userId:string
    }
}>();
blogRouter.use("/*", async (c:Context, next: () => Promise<void>)=>{

    const token=c.req.header("authorization")as string;
    if(!token){
        c.json({
            msg:"unauthorized"
        })
    }
    // const token=authHeader.split("")[1];
    const payload=await  verify(token,c.env.JWT_SECRET) 
    c.set("userId",payload.id)
    await next()
})
blogRouter.get('/:id',async  (c) => {
	const id = c.req.param('id')
	console.log(id);
    const prisma= new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate())
    const  post =await prisma.post.findUnique({
        where:{
            id:id
        },
        select: {
            id: true,
            title: true,
            content: true,
            author: {
                select: {
                    name: true
                }
            }
        }
    })
    return c.json({
      post
    })
})

blogRouter.post('/', async (c) => {
    const prisma=new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate());
    const userId=c.get("userId")
    const body=await c.req.json()
    const result=createPostInput.safeParse(body)
	if(!result.success){
		console.log(!result.error.issues)
        
	}
    else{
        console.log(userId)
       const post=await prisma.post.create({
            data:{
                title:body.title,
                content:body.content,
                authorId:userId
            }
        })
        console.log(post)

        return c.json({
         post 
    })
    }

})

blogRouter.get('/all/bulkss',async  (c) => {
    const prisma= new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate())
    try{
        const allBlog=await prisma.post.findMany({
            select:{
                id:true,
                content:true,
                title:true,
                author:{
                    select:{
                        name:true
                    }
                }

            }
        })
        return c.json({
            allBlog
        })
    }
    catch(e){
        console.log(e)
    }

})
blogRouter.put("/",async (c)=>{
    const prisma= new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate())
    const userId=c.get("userId")
    const body=await c.req.json()
    const {success}=updatePostInput.safeParse(body)
	if(!success){
		return c.json({
			msg:"invalid input during signup"
		})
	}
    await prisma.post.update({
        where:{
            id:body.id,
            authorId:userId
        },
        data:{
            title:body.title,
            content:body.content
        }
    })
})

export default blogRouter;
