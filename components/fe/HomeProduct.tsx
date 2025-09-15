import Link from "next/link";
import { Button } from "../ui/button";

export default function HomeProduct(){
    return(<div className="w-full h-[60vh] relative">
        <img src="/images/home_product.png" alt="" className="w-full h-full absolute"  />
        <Button variant={`outline`} asChild>
            <Link href={`/product/electronic`} className="absolute right-1/4 bottom-9">
                Shop Now
            </Link>
        </Button>
    </div>)
}