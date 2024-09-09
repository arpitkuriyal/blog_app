
export default function Aside() {
  return (
    <aside className="hidden w-64  border-l border-t bg-background px-6 py-8 md:block sticky top-0 ">
      <div className="space-y-6 ">
        <div className="space-y-2">
          <h4 className="text-sm font-bold">Categories</h4>
          <div className="grid gap-2">
            <Top name={"Technolgy"}/>
            <Top name={"Design"}/>
            <Top name={"Lifestyle"}/>
            <Top name={"Travel"}/>
            <Top name={"Busniess"}/>
          </div>
        </div>
        <div className="space-y-2">
          <h4 className="text-sm font-bold">Archives</h4>
          <div className="grid gap-2">
            <Top name="3 December 2023"/>
            <Top name="23 March 2024"/>
            <Top name="14 Arpril 2024"/>
            <Top name="26 July 2024"/>
          </div>
        </div>
        <div className="space-y-2">
          <h4 className="text-sm font-bold">Tags</h4>
          <div className="flex flex-wrap gap-2">
            <Last name="React"/>
            <Last name="Tailwind"/>
            <Last name="Postgres"/>
            <Last name="Typescript"/>
            <Last name="Prisma"/>
          </div>
        </div>
      </div>
    </aside>
  )
}
function Top({name}:{name:string}){
    return(
        <div
              
              className="block  rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
              
            >
              {name}
            </div>
    )
}
function Last({name}:{name:string}){
    return (
        <div
              
              className="rounded-md bg-gray-200 bg-muted px-3 py-1 text-xs font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
              
            >
              {name}
            </div>
    )
}