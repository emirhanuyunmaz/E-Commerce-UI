import FlashProductCard from "@/components/fe/FlashProductCard";
import { HomeCarousel } from "@/components/fe/HomeCarousel";
import HomeProduct from "@/components/fe/HomeProduct";
import { MiniCarousel } from "@/components/fe/MiniCarousel";
import ProductCard from "@/components/fe/ProductCard";
import data from "../dummy_data.json"
export default function Home() {
  const product_10 = data.slice(0,20)
  const product_4 = data.slice(10,14)
  return (
    <div className="min-h-[80vh] ">
      <div className="w-full h-[60vh]">
        <HomeCarousel/>
      </div>

    <div className="max-w-7xl mx-auto mt-10">
      <h3 className="font-bold text-xl " >Flash Sales</h3>
      <div className="flex justify-center gap-5 flex-wrap">
        <FlashProductCard/>
        <FlashProductCard/>
        <FlashProductCard/>
        <FlashProductCard/>
      </div>
    </div>

    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between py-3 border-b mb-3 border-grey" >
        <h3 className="font-bold text-xl">TOP 100</h3>
        
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {
          product_10.map((item) => <ProductCard key={item.id} explanation={item.explanation} images={item.image} name={item.name} price={item.price} rating={item.rating} reviws={item.reviews.length} slug={item.slug} />)
        }
      </div>
    </div>

    <div>
      {/* <MiniCarousel/> */}
    </div>

    </div>
  );
}
