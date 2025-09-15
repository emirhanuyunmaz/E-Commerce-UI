import FlashProductCard from "@/components/fe/FlashProductCard";
import HomeProduct from "@/components/fe/HomeProduct";

export default function Home() {
  return (
    <div className="min-h-[80vh] ">
      <div className="w-full h-[60vh]">
        <HomeProduct/>
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

    <div>
      <h3 className="font-bold text-xl ">TOP 100</h3>
    </div>

    </div>
  );
}
