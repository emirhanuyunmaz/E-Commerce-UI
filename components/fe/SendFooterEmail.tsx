import { Send } from "lucide-react";
import { Input } from "../ui/input";
import Icon from "./Icon";

export default function SendFooterEmail(){
    return(<div className="bg-secondary text-white flex flex-col p-5 rounded-xl w-96">
        <div className="flex flex-col">
            <div className="flex justify-center">
                <Icon/>
            </div>
            <div className="flex flex-col">
                <p className="text-center">
                    Register your email not to miss the last minutes off+ Free delivery
                </p>
                <div className="flex border-2 border-grey rounded px-1">
                    <input className="p-1 flex-1" placeholder="Email"/>
                    <button className="hover:opacity-70  transition-all"><Send/></button>
                </div>
            </div>
        </div>
    </div>)
}