"use client"

import * as React from "react"
import Link from "next/link"
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"


{/* <ul className="flex justify-around py-5">
    <Link className="hover:opacity-70" href={`/products/woman`} >Woman</Link>
    <Link className="hover:opacity-70" href={`/products/male`} >Male</Link>
    <Link className="hover:opacity-70" href={`/products/mother-child`} >Mother-Child</Link>
    <Link className="hover:opacity-70" href={`/products/home-furniture`} >Home & Furniture</Link>
    <Link className="hover:opacity-70" href={`/products/super-market`} >Super Market</Link>
    <Link className="hover:opacity-70" href={`/products/cosmetics`} >Cosmetics</Link>
    <Link className="hover:opacity-70" href={`/products/shoe-bag`} >Shoe & Bag</Link>
    <Link className="hover:opacity-70" href={`/products/sport-outdoor`} >Sport & Outdoor</Link>
    <Link className="hover:opacity-70" href={`/products/best-seller`} >Best Seller</Link>
</ul> */}

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

export function Navigation() {
  return (
    <NavigationMenu viewport={false} className="z-20 w-full hidden lg:flex lg:justify-around mx-auto lg:py-6">
      <NavigationMenuList>
        
        <NavigationMenuItem>
          <NavigationMenuTrigger>Woman</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="">
              {womanComponents.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Male</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="">
              {manComponents.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Mother-Child</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="">
              {mother_childComponents.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Home & Furniture</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="">
              {HomeFurnitureComponents.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Super Market</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="">
              {SuperMarketComponents.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Cosmetics</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="">
              {CosmeticsComponents.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Shoe & Bag</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="">
              {ShoeBagComponents.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Sport & Outdoor</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="">
              {SportOutdoorComponents.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Best Seller</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="">
              {BestSellerComponents.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
