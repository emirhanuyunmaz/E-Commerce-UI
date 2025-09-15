import Link from "next/link";

export default function Navbar(){
    return(<nav className="max-w-7xl mx-auto ">
            <ul className="flex justify-around py-5">
                <Link className="hover:opacity-70" href={`/products/woman`} >Woman</Link>
                <Link className="hover:opacity-70" href={`/products/male`} >Male</Link>
                <Link className="hover:opacity-70" href={`/products/mother-child`} >Mother-Child</Link>
                <Link className="hover:opacity-70" href={`/products/home-furniture`} >Home & Furniture</Link>
                <Link className="hover:opacity-70" href={`/products/super-market`} >Super Market</Link>
                <Link className="hover:opacity-70" href={`/products/cosmetics`} >Cosmetics</Link>
                <Link className="hover:opacity-70" href={`/products/shoe-bag`} >Shoe & Bag</Link>
                <Link className="hover:opacity-70" href={`/products/sport-outdoor`} >Sport & Outdoor</Link>
                <Link className="hover:opacity-70" href={`/products/best-seller`} >Best Seller</Link>
            </ul>
        
    </nav>)
}