import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'SepetGo | Contact',
  description: '...',
}

export default function Page(){
    return(<div className="max-w-7xl min-h-[70vh] mx-auto my-10">
        <div className="flex ">
            <div className="w-full lg:w-1/2">
                <h2 className="text-2xl text-secondary font-bold text-center">Tell Us About Your</h2>
                <div className="flex flex-col gap-3 p-5">

                    <div className="flex flex-col gap-1">
                        <Label className="ms-1">Name</Label>
                        <Input placeholder="Name"/>
                    </div>

                    <div className="flex flex-col gap-1">
                        <Label className="ms-1">Email</Label>
                        <Input placeholder="Email"/>
                    </div>

                    <div className="flex flex-col gap-1">
                        <Label className="ms-1">Message</Label>
                        <Textarea placeholder="Message" className="min-h-32"/>
                    </div>

                    <div className="flex flex-col">
                        <Button className="text-white">Send</Button>
                    </div>

                </div>
            </div>

            <div className="hidden lg:flex lg:w-1/2 h-full">
                <img src="/images/contact.png" alt="" className="w-full h-full" />
            </div>
        </div>

    </div>)
}