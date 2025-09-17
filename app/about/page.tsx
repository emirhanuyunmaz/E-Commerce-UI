import { Heart } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'SepetGo | About',
  description: '...',
}

export default function Page(){
    return(<div className="max-w-7xl min-h-[80vh] mx-auto flex flex-col gap-5 ">

        <div>

        </div>
        {/* FIRS - START */}
        <div className="flex flex-col md:flex-row justify-center md:justify-around mx-3 md:mx-0">

            <div className="w-full md:w-2/3 flex ">
                <div className="flex flex-col gap-3">
                    <h2 className="text-secondary text-3xl font-bold">Providing the best experience to make your <span className="text-primary">Online Shopping</span></h2>
                    <p className="text-secondary text-lg">At SepetGo, we are more than just an online store – we are your ultimate destination for an unparalleled shopping experience. Our journey began with a simple yet powerful idea: to create a platform that not only offers a wide array of products but also fosters a sense of community and connection among our customers.</p>
                </div>
            </div>
            <div className="md:w-1/5 flex justify-center items-center">
                <div className="bg-primary px-5 py-3 rounded-xl flex flex-col justify-center items-center">
                    <div className="bg-secondary p-3 rounded-full">
                        <Heart color="white" />
                    </div>
                    <p className="text-white text-xl">We have made many people satisfied with our Platform</p>
                </div>
            </div>
        </div>
        {/* FIRS - END */}

        <div className="flex flex-col-reverse md:flex-row mx-3 md:mx-0 ">
            <div className="w-full md:w-1/2 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-secondary">We offer the best service that will make it easier</h3>
                <p className="text-primary text-lg">Discover unparalleled convenience with our top-tier service, designed to make your shopping experience smoother than ever.Experience shopping made effortless through our exceptional service that puts your needs at the forefront.
                Elevate your shopping journey with our unmatched service, redefining convenience and satisfaction.</p>
            </div>

            <div className="w-full md:flex md:w-1/2">
                <img src="/images/about.png" alt="" className="w-full h-full rounded-4xl" />
            </div>

        </div>


    </div>)
}