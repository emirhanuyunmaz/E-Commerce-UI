import Link from "next/link";
import SendFooterEmail from "./SendFooterEmail";

export default function Footer(){
    return(<footer className="">
        <div className="relative flex justify-center">
            <div className="absolute -top-20">
                <SendFooterEmail/>
            </div>
        </div>
        <div className="bg-primary p-20">

        <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">

            <div>
                <h5 className="font-bold">Company</h5>
                <ul className="">
                    <li><Link href={`/about`} >About Us</Link></li>
                    <li><Link href={`/contact`}>Contact Us</Link></li>
                    <li><Link href={`/help`}>Help</Link></li>
                    
                </ul>
            </div>
            
            <div>
                <h5 className="font-bold">Account</h5>
                <ul>
                    <li><Link href={`/account`}>My Account</Link></li>
                    <li><Link href={`/login`}>Login - Register</Link></li>
                    <li><Link href={`/wishlist`}>Wishlist</Link></li>
                    
                </ul>                
            </div>
            
            <div>
                <h5 className="font-bold">Quick Link</h5>
                <ul>
                    <li>
                        <Link href={`/privacyPolicy`}>Privacy Policy</Link>
                    </li>
                    <li>
                        <Link href={`/termsOfUse`}>Terms of use</Link>
                    </li>
                    <li>
                        <Link href={`/fql`}>FQL</Link>
                    </li>
                    
                </ul>    
            </div>
            
            <div>
                <h5 className="font-bold">Career Opportunities</h5>
                <ul>
                    <li>
                        <Link href={`/sellingPrograms`}>Selling Programs</Link>
                    </li>
                    <li>
                        <Link href={`/adverdise`}>Adverdise</Link>
                    </li>
                    <li>
                        <Link href={`/cooperation`}>Cooperation</Link>
                    </li>
                    
                </ul>    
            </div>

        </div>

        </div>
        </div>
    </footer>)
}