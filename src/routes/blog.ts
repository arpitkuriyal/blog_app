import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { verify } from "hono/jwt";
import { Context } from "hono";

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
    return c.text("done")
})
blogRouter.get('/:id',async  (c) => {
	const id = c.req.param('id')
	console.log(id);
    const prisma= new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate())
    await prisma.post.findMany({
        where:{
            id:id
        }
    })
    c.json({
        msg:"done"
    })
})

blogRouter.post('/', async (c) => {
    const prisma=new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate());
    const userId=c.get("userId")
    const body=await c.req.json()
    console.log(userId)
    await prisma.post.create({
        data:{
            title:body.title,
            content:body.content,
            authorId:userId
        }
    })
    return c.json({
        msg:"blog is done"
    })
})

blogRouter.put('/bulk',async  (c) => {
    const prisma= new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate())
    await prisma.post.findMany({})
    c.json({
        msg:"done"
    })
})
blogRouter.put("/",async (c)=>{
    const prisma= new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate())
    const userId=c.get("userId")
    const {title,content,id}=await c.req.json()
    await prisma.post.update({
        where:{
            id,
            authorId:userId
        },
        data:{
            title,
            content
        }
    })
})

export default blogRouter;
