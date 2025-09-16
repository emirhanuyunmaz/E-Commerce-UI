import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound(){
    return(<div className="min-h-[80vh] max-w-7xl mx-auto ">
            <div className=" h-full w-full relative">
                <img src="/images/not_found.png" alt="" className=" max-h-[70vh] w-full" />
                <div className="absolute left-1/2 bottom-10">
                        <Button asChild className="text-white bottom-5 left-1/2" >
                            <Link href={`/`}>
                                Go To Home
                            </Link>
                        </Button>
                    </div>    
            </div>
            
        </div>)
}