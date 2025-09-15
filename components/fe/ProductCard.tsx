import { Heart, Star } from "lucide-react";

export default function ProductCard(){
    return(<div className="border border-grey relative rounded-xl p-2 hover:shadow-xl transition-all">
        {/* IMAGE */}
        <div>
            <img src="/images/bag_1.png" alt="" className="w-full h-40 rounded-t-xl" />
        </div>
        {/* IMAGE - END */}
        {/* DESC */}
        <div className="p-3">
            <p className="font-medium">Bag</p>
            <p className="text-gray-500">Lorem, ipsum dolor.</p>
        </div>
        {/* DESC - END */}
        <div className="flex gap-3">
            <div className="flex">
                <Star color="yellow" fill="yellow" />
                <Star color="yellow" fill="yellow" />
                <Star color="yellow" fill="yellow" />
                <Star color="yellow" fill="yellow" />
                <Star color="yellow" />
            </div>
            <p>(12)</p>
        </div>
        <div className="px-2">
            <p className="text-error font-bold">$120</p>
        </div>
        <div className="absolute right-2 top-2">
            <button><Heart/></button>
        </div>
    </div>)
}