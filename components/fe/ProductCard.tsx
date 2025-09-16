import { Heart, Star } from "lucide-react";
import Link from "next/link";

export default function ProductCard({slug,name,price,rating,reviws,explanation}:{slug:string,name:string,price:number,rating:number,reviws:number,explanation:string}){
    return(<Link href={`/productDetail/${slug}`} className="border border-grey relative rounded-xl p-2 hover:shadow-xl transition-all">
        {/* IMAGE */}
        <div>
            <img src="/images/bag_1.png" alt="" className="w-full h-40 rounded-t-xl" />
        </div>
        {/* IMAGE - END */}
        {/* DESC */}
        <div className="p-3">
            <p className="font-medium">{name}</p>
            <p className="text-gray-500">{explanation}...</p>
        </div>
        {/* DESC - END */}
        <div className="flex gap-3">
            <div className="flex">
                <Star color="yellow" fill={`${rating >= 1 ? "yellow" : "white"}`} />
                <Star color="yellow" fill={`${rating >= 2 ? "yellow" : "white"}`}/>
                <Star color="yellow" fill={`${rating >= 3 ? "yellow" : "white"}`}/>
                <Star color="yellow" fill={`${rating >= 4 ? "yellow" : "white"}`}/>
                <Star color="yellow" fill={`${rating == 5 ? "yellow" : "white"}`}/>
            </div>
            <p>({reviws})</p>
        </div>
        <div className="px-2">
            <p className="text-error font-bold">${price}</p>
        </div>
        <div className="absolute right-2 top-2">
            <button><Heart/></button>
        </div>
    </Link>)
}