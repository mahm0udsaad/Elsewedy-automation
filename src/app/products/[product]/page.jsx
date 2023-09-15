"use client"

import { ProductsDetails } from '@/app/data/productsDetails';
import { Details } from '@/app/component/details';

export async function generateStaticParams() {
  return Object.keys(ProductsDetails).map((product) => ({
    params: { product },
  }));
}

async function ProductDetails({ params })  {
  const productDetails = ProductsDetails[params.product]
  console.log(params.product);
  return (
    <div>
      <div className="logo flex my-20 w-[95%] mx-auto">
        {/* <img src={logo} width={400} height={300} alt="logo" /> */}
      </div>
      <div className="grid gap-8 w-11/12 mx-auto">
        {productDetails ? (
            <Details key={productDetails.length} Data={productDetails} />
        ) : (
          <h1 className="text-center text-4xl pt-20">No information provided</h1>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;

