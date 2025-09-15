import { Star } from "lucide-react";

export default function FlashProductCard(){
    return(<div className="flex flex-col gap-3 border border-grey p-5 rounded shadow-xl hover:shadow-2xl transition-all ">
        {/* TIME */}
        <div className="flex flex-col justify-center ">
            <p className="text-center font-medium">Death of Day</p>
            <div className="flex justify-center items-center gap-3">
                <div className="flex flex-col ">
                    <div className="flex gap-3">
                        <p>12</p>
                        <p>:</p>
                    </div>
                    <p>Hour</p>
                </div>
                <div className="flex flex-col ">
                    <div className="flex gap-3">
                        <p>43</p>
                        <p>:</p>
                    </div>
                    <p>Min</p>
                </div>
                <div className="flex flex-col">
                    <p>20</p>
                    <p>sec</p>
                </div>
            </div>
        </div>
        {/* TIME - END */}

        {/* IMAGE */}
        <div>
            <img src="/images/bag_1.png" alt="" className="w-40 h-40" />
        </div>
        {/* IMAGE -END */}
 
        {/* Title - Desc */}
        <div>
            <p className="font-bold">Bag</p>
            <p>Lorem, ipsum dolor.</p>
        </div>
        {/* STARS */}
        <div className="flex items-center justify-center gap-1">
            <div className="flex">
                <Star color="yellow" fill="yellow"/>
                <Star color="yellow" fill="yellow" />
                <Star color="yellow" fill="yellow" />
                <Star color="yellow" fill="yellow" />
                <Star color="yellow"  />
            </div>
            <p>(20)</p>
        </div>
        {/* STARS - END */}

        {/*  */}
        <div className="flex gap-3 justify-center items-center">
            <p className="text-error" >69.99$</p>
            <p className="text-grey line-through" >129.99$</p>
            <p className="bg-error rounded text-white px-1">46%</p>
        </div>
        {/*  */}
    </div>)
}