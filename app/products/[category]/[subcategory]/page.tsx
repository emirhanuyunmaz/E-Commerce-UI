'use client'
import ProductCard from "@/components/fe/ProductCard";
import data from '../../../../dummy_data.json';
import { useParams } from "next/navigation";

export default function Page(){
    const params = useParams<{ category: string; subcategory: string }>()
    const productData = data.filter((products) => products.category == params.category && products.subcategory == params.subcategory )    
    console.log(params);
    
    return(<div className="max-w-7xl mx-auto ">


        <div className="flex gap-3 flex-wrap mx-3 lg:mx-0">
            {
                productData.map((product) => <ProductCard images={product.image} key={product.id} slug={product.slug} name={product.name} price={product.price} rating={product.rating} reviws={product.reviews.length} explanation={product.explanation} />)
            }
            
        </div>
    </div>)
}