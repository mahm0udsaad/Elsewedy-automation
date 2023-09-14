"use client"
import { useRouter } from 'next/router';
import { ProductsDetails } from '@/app/data/productsDetails';
const Details = ({ Data , title}) => {
  return (
    <div>
      {Data ? (Data.map((item, index) => (
        <div key={index}>
          <h2>{item.title}</h2>
          <p>{item.content}</p>
          <img src={item.imageUrl} alt={item.title} />
        </div>
      ))):(<h1>no information provided</h1>)}
    </div>
  );
};
export default function ProductDetails({params}) {
  const { product } = params;
  
  return (
    <div>
      <h1>Product Details</h1>
      <p>{product}</p>
      {<Details Data={ProductsDetails[product]}/>} 
    </div>
  );
}
