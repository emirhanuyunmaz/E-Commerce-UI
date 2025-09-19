import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

const womanComponents : { title: string; href: string; description: string }[] =[
    {
        title:"Dresses",
        href:"/products/woman/dresses",
        description:""
    },
    {
        title:"Tops",
        href:"/products/woman/tops",
        description:""
    },
    {
        title:"Jeans",
        href:"/products/woman/jeans",
        description:""
    },
    {
        title:"Skirts",
        href:"/products/woman/skirts",
        description:""
    },
    {
        title:"Jackets",
        href:"/products/woman/jackets",
        description:""
    },

]

const manComponents : { title: string; href: string; description: string }[] =[
    {
        title:"Shirts",
        href:"/products/male/shirts",
        description:""
    },
    {
        title:"T-Shirts",
        href:"/products/male/t-shirts",
        description:""
    },
    {
        title:"Jeans",
        href:"/products/male/jeans",
        description:""
    },
    {
        title:"Suits",
        href:"/products/male/suits",
        description:""
    },
    {
        title:"Jackets",
        href:"/products/male/jackets",
        description:""
    },

]

const mother_childComponents : { title: string; href: string; description: string }[] =[
    {
        title:"Baby Clothes",
        href:"/products/mother-child/baby-clothes",
        description:""
    },
    {
        title:"Toys",
        href:"/products/mother-child/toys",
        description:""
    },
    {
        title:"Maternity Wear",
        href:"/products/mother-child/maternity-wear",
        description:""
    },
    {
        title:"Kids Shoes",
        href:"/products/mother-child/kids-shoes",
        description:""
    },
    {
        title:"Strollers",
        href:"/products/mother-child/strollers",
        description:""
    },

]

const HomeFurnitureComponents : { title: string; href: string; description: string }[] =[
    {
        title:"Baby Clothes",
        href:"/products/home-furniture/baby-clothes",
        description:""
    },
    {
        title:"Sofas",
        href:"/products/home-furniture/sofas",
        description:""
    },
    {
        title:"Beds",
        href:"/products/home-furniture/beds",
        description:""
    },
    {
        title:"Chairs",
        href:"/products/home-furniture/chairs",
        description:""
    },
    {
        title:"Wardrobes",
        href:"/products/home-furniture/wardrobes",
        description:""
    },

]

const SuperMarketComponents : { title: string; href: string; description: string }[] =[
    {
        title:"Snacks",
        href:"/products/super-market/snacks",
        description:""
    },
    {
        title:"Beverages",
        href:"/products/super-market/beverages",
        description:""
    },
    {
        title:"Fruits",
        href:"/products/super-market/fruits",
        description:""
    },
    {
        title:"Vegetables",
        href:"/products/super-market/vegetables",
        description:""
    },
    {
        title:"Dairy",
        href:"/products/super-market/dairy",
        description:""
    },

]

const CosmeticsComponents : { title: string; href: string; description: string }[] =[
    {
        title:"Lipsticks",
        href:"/products/cosmetics/lipsticks",
        description:""
    },
    {
        title:"Foundations",
        href:"/products/cosmetics/foundations",
        description:""
    },
    {
        title:"Perfumes",
        href:"/products/cosmetics/perfumes",
        description:""
    },
    {
        title:"Moisturizers",
        href:"/products/cosmetics/moisturizers",
        description:""
    },
    {
        title:"Shampoos",
        href:"/products/cosmetics/shampoos",
        description:""
    },

]

const ShoeBagComponents : { title: string; href: string; description: string }[] =[
    {
        title:"Sneakers",
        href:"/products/shoe-bag/sneakers",
        description:""
    },
    {
        title:"Heels",
        href:"/products/shoe-bag/heels",
        description:""
    },
    {
        title:"Sandals",
        href:"/products/shoe-bag/sandals",
        description:""
    },
    {
        title:"Backpacks",
        href:"/products/shoe-bag/backpacks",
        description:""
    },
    {
        title:"Handbags",
        href:"/products/shoe-bag/handbags",
        description:""
    },

]

const SportOutdoorComponents : { title: string; href: string; description: string }[] =[
    {
        title:"Fitness Equipment",
        href:"/products/sport-outdoor/fitness-equipment",
        description:""
    },
    {
        title:"Camping Gear",
        href:"/products/sport-outdoor/camping-gear",
        description:""
    },
    {
        title:"Sportswear",
        href:"/products/sport-outdoor/sportswear",
        description:""
    },
    {
        title:"Bicycles",
        href:"/products/sport-outdoor/bicycles",
        description:""
    },
    {
        title:"Footwear",
        href:"/products/sport-outdoor/footwear",
        description:""
    },

]

const BestSellerComponents : { title: string; href: string; description: string }[] =[
    {
        title:"Trending Clothes",
        href:"/products/best-seller/trending-clothes",
        description:""
    },
    {
        title:"Hot Gadgets",
        href:"/products/best-seller/hot-gadgets",
        description:""
    },
    {
        title:"Top Shoes",
        href:"/products/best-seller/top-shoes",
        description:""
    },
    {
        title:"Bestselling Books",
        href:"/products/best-seller/bestselling-books",
        description:""
    },
    {
        title:"Popular Cosmetics",
        href:"/products/best-seller/popular-cosmetics",
        description:""
    },

]



export function RightBarNavigation({setOpen}:{setOpen:React.Dispatch<SetStateAction<boolean>>}) {

    function leftBarClose(){
        setOpen(false)
    }

  return (
    <Accordion
      type="single"
      collapsible
      className="w-full overflow-scroll"

    //   defaultValue="item-1"
    >
    
      <AccordionItem value="item-1">
        <AccordionTrigger>Woman</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
            {
                womanComponents.map((item,idx) => <Link onClick={leftBarClose} key={idx} href={item.href} >{item.title}</Link>)
            }
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>Male</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
            {
                manComponents.map((item,idx) => <Link onClick={leftBarClose} key={idx} href={item.href} >{item.title}</Link>)
            }
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger>Mother & Child</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
            {
                mother_childComponents.map((item,idx) => <Link onClick={leftBarClose} key={idx} href={item.href} >{item.title}</Link>)
            }
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4">
        <AccordionTrigger>Home & Furniture</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
            {
                HomeFurnitureComponents.map((item,idx) => <Link onClick={leftBarClose} key={idx} href={item.href} >{item.title}</Link>)
            }
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-5">
        <AccordionTrigger>Super Market</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
            {
                SuperMarketComponents.map((item,idx) => <Link onClick={leftBarClose} key={idx} href={item.href} >{item.title}</Link>)
            }
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-6">
        <AccordionTrigger>Cosmetics</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
            {
                CosmeticsComponents.map((item,idx) => <Link onClick={leftBarClose} key={idx} href={item.href} >{item.title}</Link>)
            }
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-7">
        <AccordionTrigger>Shoe & Bag</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
            {
                ShoeBagComponents.map((item,idx) => <Link onClick={leftBarClose} key={idx} href={item.href} >{item.title}</Link>)
            }
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-8">
        <AccordionTrigger>Sport & Outdoor</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
            {
                SportOutdoorComponents.map((item,idx) => <Link onClick={leftBarClose} key={idx} href={item.href} >{item.title}</Link>)
            }
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-9" >
        <AccordionTrigger>Best Seller</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance ">
            {
                BestSellerComponents.map((item,idx) => <Link onClick={leftBarClose} key={idx} href={item.href} >{item.title}</Link>)
            }
        </AccordionContent>
      </AccordionItem>


    </Accordion>
  )
}
