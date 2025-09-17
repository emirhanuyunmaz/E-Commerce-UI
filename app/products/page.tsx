'use client'
import { useSearchParams } from "next/navigation"
import data from "../../dummy_data.json"
import ProductCard from "@/components/fe/ProductCard";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: 'SepetGo | Products',
//   description: '...',
// }

export default function Page(){
    const searchParams = useSearchParams()
    const category = searchParams.get("category") 
    const search = searchParams.get("search")
    
    const searchRegex =  new RegExp(search ? search : "", "i"); 
    const searchData = data.filter((item) =>   (category != "" ? item.category == category : true)  && item.name.search(searchRegex) != -1 )
    
    return(<div className="max-w-7xl mx-auto min-h-[70vh]">
        {
            searchData.length == 0 && <div className="text-center"><p className="text-lg font-bold ">Product not found</p></div>
        }
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 px-3">
        {
            searchData.map((item,idx) => <ProductCard key={idx} explanation={item.explanation} images={item.image} name={item.name} price={item.price} rating={item.rating} reviws={item.reviews.length} slug={item.slug} />)
        }
    </div>
    </div>)
        
}