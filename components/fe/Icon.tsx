import Link from "next/link";

export default function Icon(){
    return(
        <Link href={`/`} className="text-xl font-bold">
            SepetGo <span className="text-primary">Store</span>
        </Link>
        
    )
}