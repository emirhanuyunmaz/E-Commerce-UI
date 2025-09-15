import FlashProductCard from "@/components/fe/FlashProductCard";
import { HomeCarousel } from "@/components/fe/HomeCarousel";
import HomeProduct from "@/components/fe/HomeProduct";
import { MiniCarousel } from "@/components/fe/MiniCarousel";
import ProductCard from "@/components/fe/ProductCard";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-[80vh] ">
      <div className="w-full h-[60vh]">
        {/* <HomeProduct/> */}
        <HomeCarousel/>
      </div>

    <div className="max-w-7xl mx-auto mt-10">
      <h3 className="font-bold text-xl " >Flash Sales</h3>
      <div className="flex justify-center gap-5">
        <FlashProductCard/>
        <FlashProductCard/>
        <FlashProductCard/>
        <FlashProductCard/>
      </div>
    </div>

    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between py-3 border-b mb-3 border-grey" >
        <h3 className="font-bold text-xl">TOP 100</h3>
        <button className="flex justify-center items-center hover:opacity-70 cursor-pointer transition-all"><span className="font-medium text-lg">View All</span> <span><ArrowRight /></span></button>
      </div>
      <div className="flex gap-5 flex-wrap">
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </div>
    </div>

    <div>
      {/* <MiniCarousel/> */}
    </div>

    </div>
  );
}
