import { Search } from "lucide-react";
import Icon from "./Icon";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Header(){
    return(<header className="max-w-7xl mx-auto flex items-center justify-around gap-3 py-3 ">
        <div>
            <Icon/>
        </div>
        <div className="hidden md:flex border-2 border-grey rounded py-1 px-2">
            <input placeholder="Seach Products" className="outline-none border-none"/>

            <select className="outline-none border-none" defaultValue={"category"}>
                <option value="category" disabled >All Category</option>
                <option className="border-none " value={`woman`} >Woman</option>
                <option className="border-none" value={`male`} >Male</option>
                <option className="border-none" value={`mother-child`} >Mother-Child</option>
                <option className="border-none" value={`home-furniture`} >Home & Furniture</option>
                <option className="border-none" value={`super-market`} >Super Market</option>
                <option className="border-none" value={`cosmetics`} >Cosmetics</option>
                <option className="border-none" value={`shoe-bag`} >Shoe & Bag</option>
                <option className="border-none" value={`sport-outdoor`} >Sport & Outdoor</option>
            </select>
            <button className="border-l border-grey p-1"><Search/></button>
        </div>

        <div className="hidden md:flex ">
            <ul className="flex gap-5">
                <li><Link href={`/about`}>About Us</Link></li>
                <li><Link href={`/contact`}>Contact</Link></li>
                <li><Link href={`/help`}>Help & Support</Link></li>
            </ul>
        </div>

        <div>
            <Button variant={`outline`} asChild>
                <Link href={`/signin`}>
                    Sign In
                </Link>
            </Button>

        </div>

    </header>)
}