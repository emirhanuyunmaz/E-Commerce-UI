import { Star } from "lucide-react";

export default function CommentCard(){
    return(<div className="border border-grey rounded p-3">
        <div className="flex items-center gap-3">
            <img src="/images/default_user.png" alt=""  className="w-8 h-8 rounded-full"/>
            <p className="font-bold">User Name</p>
        </div>

        <div className="flex">
            <Star color="yellow" fill="yellow" size={16} />
            <Star color="yellow" fill="yellow" size={16} />
            <Star color="yellow" fill="yellow" size={16} />
            <Star color="yellow" fill="yellow" size={16} />
            <Star color="yellow" fill="yellow" size={16} />
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, neque.</p>
    </div>)
}