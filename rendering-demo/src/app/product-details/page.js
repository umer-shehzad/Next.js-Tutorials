import { Suspense } from "react";

import Products from "@/components/products";
import Reviews from "@/components/reviews";

export default function ProductDetails() {
    return (
        <>
            <h1>Product Details page</h1>
            <Suspense fallback={<p>loading products...</p>}>
                <Products />
            </Suspense>
            <Suspense fallback={<p>loading reviews...</p>}>
                <Reviews />
            </Suspense>
        </>
    )
}