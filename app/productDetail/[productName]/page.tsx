'use client'
import CommentCard from "@/components/fe/CommentCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Circle, Heart, ShoppingBasket } from "lucide-react";
import { useState } from "react";

export default function Page(){

    const [productDetail,setProductDetail] = useState(false)
    const [counter,setCounter] = useState(1)

    return(<div className="max-w-7xl mx-auto min-h-[80vh]">
        <div className="flex flex-col md:flex-row gap-10">
            
            <div className="w-full px-3 md:w-1/2">
                <img src="/images/woman_dress.png" alt="" className="w-full h-[70vh]" />
            </div>

            <div className="w-full px-3 md:w-1/2 flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                    <p className="font-bold text-xl ">Product 1</p>
                    <p className="text-error text-lg font-medium">$120.99</p>
                </div>

                <div className="flex flex-col gap-10">
                    <div className="flex gap-3 items-center">
                        <p className="font-bold text-lg" >Sizes:</p>
                        <ul className="flex gap-3">
                            <li><Button variant={`outline`} >XS</Button></li>
                            <li><Button variant={`outline`} >S</Button></li>
                            <li><Button variant={`outline`} >ML</Button></li>
                            <li><Button variant={`outline`} >L</Button></li>
                            <li><Button variant={`outline`} >XL</Button></li>
                        </ul>
                    </div>

                    <div className="flex gap-3 items-center">
                        <p className="font-bold text-lg" >Colors:</p>
                        <ul className="flex gap-3">
                            <li><button className="border border-black rounded-full"><Circle color="blue" fill="blue" size={16}/></button></li>
                            <li><button><Circle color="red" fill="red" size={16}/></button></li>
                            <li><button><Circle color="yellow" fill="yellow" size={16}/></button></li>
                        </ul>
                    </div>

                    <div className="flex gap-3 items-center">
                        <p className="font-bold text-lg" >Quantity:</p>
                        <div className="flex gap-1">
                            <Button onClick={() => {counter > 1 && setCounter(counter - 1)}}  variant={`outline`}>-</Button>
                            <Input value={counter} disabled className="w-10 text-center" />
                            <Button onClick={() => setCounter(counter + 1)} variant={`outline`}>+</Button>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <Button className="text-white w-1/2"><ShoppingBasket/>Shop Now</Button>
                        <Button className="text-white w-1/2"><Heart/>Follow</Button>
                    </div>

                </div>

            </div>

        </div>

        {/* Product Details - START */}
        <div className="w-full mt-10">
            <div className="flex justify-center gap-10 border-b border-grey pb-3">
                <button onClick={() => setProductDetail(true)} className={`${productDetail && "border border-black rounded "} p-1   `} >PRODUCT DETAILS</button>
                <button onClick={() => setProductDetail(false)}  className={`${!productDetail && "border border-black rounded"} p-1   `}>REVIEWS</button>
            </div>

            {/* Product Details - Start */}
            {productDetail && <div className="flex gap-3 mt-3">
                <div className="md:w-1/2">
                    <div>
                        <p className="font-bold">Product Description</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores id sint quaerat assumenda sapiente, dicta quisquam illo minus mollitia similique!</p>
                    </div>
                    
                    <div>
                        <p className="font-bold">Product Detail</p>
                        <p><span className="font-medium ">Brand: </span><span>Brand 8</span></p>
                        <p><span className="font-medium ">Material: </span><span>Polyester</span></p>
                        <p><span className="font-medium ">Color: </span><span>Red</span></p>
                        <p><span className="font-medium ">Size: </span><span>One Size</span></p>
                        <p><span className="font-medium ">Weight: </span><span>3.08 kg</span></p>
                    </div>


                </div>

                <div className="md:w-1/2">
                    <div>
                        <p className="font-bold">Composition</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, sed repellat quaerat doloremque dicta ut pariatur, enim cum ipsum et asperiores voluptate qui unde officia dolorem consequatur rem fugit! Dolore.</p>
                    </div>
                </div>
            </div>}
            {/* Product Details - End */}

            {/* Review - Start  */}
            {!productDetail && <div className=" flex flex-col gap-3 mt-3">
                <CommentCard/>
            </div>}
            {/* Review - End  */}


        </div>
        {/* Product Details - END */}


    </div>)
}