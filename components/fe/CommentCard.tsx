import { Star } from "lucide-react";

export default function CommentCard({rating,username,comment}:{username:string,rating:number,comment:string}){
    return(<div className="border border-grey rounded p-3">
        <div className="flex items-center gap-3">
            <img src="/images/default_user.png" alt=""  className="w-8 h-8 rounded-full"/>
            <p className="font-bold">{username}</p>
        </div>

        <div className="flex">
                <Star color="yellow" fill={`${rating >= 1 ? "yellow" : "white"}`} />
                <Star color="yellow" fill={`${rating >= 2 ? "yellow" : "white"}`}/>
                <Star color="yellow" fill={`${rating >= 3 ? "yellow" : "white"}`}/>
                <Star color="yellow" fill={`${rating >= 4 ? "yellow" : "white"}`}/>
                <Star color="yellow" fill={`${rating == 5 ? "yellow" : "white"}`}/>
        </div>
        <p>{comment}</p>
    </div>)
}