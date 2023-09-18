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
  let logo = '';

  if (params.product === 'Siemens') {
    logo = '/images/partners/semins-removebg-preview.png';
  } else {
    logo = '/images/partners/allen-removebg-preview (1).png';
  }
  
  return (
    (productData ? (
        <div className='pt-20'>
        <div className="logo flex w-11/12 mx-auto my-5">
        <img src={logo} alt={params.product} className='w-[20rem]'/>
      </div>
      <div className="grid gap-8 w-11/12 mx-auto">
        {productData && (
            <Details key={productData.length} Data={productData} />
            )}
             </div>
      </div>
      ):(   
         <h1 className="text-center text-4xl pt-20">No information provided</h1>
      ))
  );
};

