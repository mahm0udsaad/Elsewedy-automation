import { ProductsDetails } from '@/app/data/productsDetails';
import { Details } from '@/app/component/details';

export const dynamicParams = 'false'
export async function generateStaticParams() {
  const productKeys = Object.keys(ProductsDetails);
  const productsArray = productKeys.map((key) => ({
    product: key,
  }));

  return productsArray;
}
export default async function ProductDetails({params})  {
  const productData = ProductsDetails[params.product]
  return (
    <div>
      <div className="grid gap-8 w-11/12 mx-auto">
        {productData ? (
            <Details key={productData.length} Data={productData} />
        ) : (
          <h1 className="text-center text-4xl pt-20">No information provided</h1>
        )}
      </div>
    </div>
  );
};

