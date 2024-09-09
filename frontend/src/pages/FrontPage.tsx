/**
 * v0 by Vercel.
 * @see https://v0.dev/t/eW1exN1Ls4n
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import { Link } from "react-router-dom";

export default function FrontPage() {
  return (
    <div className="flex flex-col min-h-[100dvh] ">
      <header className="bg-background px-4 lg:px-6 h-14 flex items-center border-b">
        <div  className="flex items-center justify-center" >
          <span className="text-xl font-bold">Medium</span>
        </div>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <div  className="text-sm font-medium hover:underline underline-offset-4" >
            <Link to="/signup">Login</Link>
          </div>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-6 lg:py-12">
          <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 md:px-6">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Discover the Best Stories on the Web
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Explore a world of captivating content, from thought-provoking essays to inspiring personal
                  narratives.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <div
                  
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  
                >
                  Start Reading
                </div>
                <div
                  
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  
                >
                  Write a Story
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/blogImage.avif"
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
              <div className="absolute bottom-0 left-0 bg-background/80 p-4 rounded-b-xl">
                <h2 className="text-xl font-bold">The Power of Storytelling</h2>
                <p className="text-muted-foreground">
                  Explore how the art of storytelling can transform our understanding of the world.
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <div>
                    <p className="text-sm font-medium">John Doe</p>
                    <p className="text-xs text-muted-foreground">Published 2 days ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 Medium. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <div  className="text-xs hover:underline underline-offset-4" >
            Terms of Service
          </div>
          <div  className="text-xs hover:underline underline-offset-4" >
            Privacy
          </div>
        </nav>
      </footer>
    </div>
  )
}
