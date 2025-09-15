'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"


export default function Page(){
    const [select,setSelect] = useState(0)
    
    function incSelect(){
        setSelect(select + 1)
    }

    return(<div className="flex justify-center items-center min-h-[80vh] max-w-7xl mx-auto">

        {select == 0 && <div className="md:w-1/3 flex flex-col gap-3">
            <h3 className="text-xl font-bold text-center">Reset Password</h3>
            <p className="text-center text-gray-500">To reset your password, click the link in the email we sent, create a new secure password, and log in.</p>
            <Input placeholder="Email"/>
            <div className="flex flex-col ">
                <Button onClick={incSelect} className="text-white">Send Code</Button>
            </div>
        </div>}
        
        {select == 1 && <div className="md:w-1/3 flex flex-col gap-3">
            <h3 className="text-xl font-bold text-center">Enter Code</h3>
            <p className="text-center text-gray-500">Enter the verification code sent to your email, securely confirm your account, and safely reset your password today.</p>
            <Input placeholder="Code"/>
            <div className="flex flex-col ">
                <Button onClick={incSelect} className="text-white">Verify Code</Button>
            </div>
        </div>}

        {select == 2 && <div className="md:w-1/3 flex flex-col gap-3">
            <h3 className="text-xl font-bold text-center">Enter New Password</h3>
            <p className="text-center text-gray-500">Fill in the fields to create your new password, choose securely, confirm changes, and access your account safely.</p>
            <Input placeholder="Password"/>
            <Input placeholder="Confirm Password"/>
            <div className="flex flex-col ">
                <Button  className="text-white">Reset Password</Button>
            </div>
        </div>}

    </div>)
}