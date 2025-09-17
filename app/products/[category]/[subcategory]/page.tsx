'use client'
import ProductCard from "@/components/fe/ProductCard";
import data from '../../../../dummy_data.json';
import { useParams } from "next/navigation";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: 'SepetGo | Products',
//   description: '...',
// }

export default function Page(){
    const params = useParams<{ category: string; subcategory: string }>()
    const productData = data.filter((products) => products.category == params.category && products.subcategory == params.subcategory )    
    console.log(params);
    
    return(<div className="max-w-7xl mx-auto ">


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 mx-3">
            {
                productData.map((product) => <ProductCard images={product.image} key={product.id} slug={product.slug} name={product.name} price={product.price} rating={product.rating} reviws={product.reviews.length} explanation={product.explanation} />)
            }
            
        </div>
    </div>)
}