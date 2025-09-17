import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Search, TextAlignJustify } from "lucide-react"
import { RightBarNavigation } from "./RightBarNavigation"
import { useState } from "react"
import { useRouter } from "next/navigation"

export function RightBar() {
    const router = useRouter()
    const [open,setOpen] = useState(false)
    const [search,setSearch] = useState("")
    const [category,setCategory] = useState("")
    function goToSearch(){
        console.log("SSA:",category);
        setCategory("")
        setSearch("")
        setOpen(false)
        router.push(`/products?search=${search}&category=${category}`)
    }

  return (
    <Sheet onOpenChange={setOpen} open={open}>
      <SheetTrigger asChild>
        <Button variant="outline"><TextAlignJustify /></Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Categories</SheetTitle>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4 overflow-y-scroll">
          {/* MAIN - START */}
            <div className="grid grid-cols-7 border-2 border-grey rounded py-1 px-2">
            <input value={search} onChange={(item) => setSearch(item.target.value)} placeholder="Seach Products" className="outline-none border-none col-span-3"/>

            <select className="outline-none border-none col-span-3" value={category} onChange={(select) => setCategory(select.target.value)} >
                <option value="category" defaultChecked>All Category</option>
                <option className="border-none " value={`woman`} >Woman</option>
                <option className="border-none" value={`male`} >Male</option>
                <option className="border-none" value={`mother-child`} >Mother-Child</option>
                <option className="border-none" value={`home-furniture`} >Home & Furniture</option>
                <option className="border-none" value={`super-market`} >Super Market</option>
                <option className="border-none" value={`cosmetics`} >Cosmetics</option>
                <option className="border-none" value={`shoe-bag`} >Shoe & Bag</option>
                <option className="border-none" value={`sport-outdoor`} >Sport & Outdoor</option>
            </select>
            <button onClick={goToSearch} className="border-l border-grey p-1 col-span-1 mx-auto"><Search/></button>
        </div>
            <RightBarNavigation setOpen={setOpen} />
          
          {/* MAIN - END */}
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
