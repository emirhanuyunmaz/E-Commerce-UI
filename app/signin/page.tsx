import { SignInAndSignUp } from "@/components/fe/SignInAndSignUp";

export default function Page(){
    return(<div className="min-h-[80vh] max-w-7xl mx-auto my-10">
        <div className="flex gap-3">

            <div className="w-1/2">
                <img src="/images/login.png" alt=""  className="w-full h-[80vh]"/>
            </div>

            <div className="w-1/2">
                <SignInAndSignUp/>
            </div>
        </div>

    </div>)
}