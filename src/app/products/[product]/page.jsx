import { ProductsDetails } from '@/app/data/productsDetails';

const Details = ({ item }) => {
  return (
    <div className='lg:flex space-y-8 my-5'>
      <div className="flex flex-col lg:w-1/2">
        <h2 className='text-2xl sm:text-4xl pb-5'>{item.title}</h2>
        <p className='lg:w-5/6 text-lg'>{item.content}</p>
      </div>
      {item.imageUrl.length !== 0 ? (
        <div className={`grid ${item.imageUrl.length === 4 ? "grid-cols-2 grid-rows-2" : "grid-cols-2"} gap-4 sm:gap-6 lg:gap-8`}>
          {item.imageUrl.map((imageUrl, index) => (
            <div className="inner-wrapper h-[13rem]" key={index}>
              <img
                src={imageUrl}
                alt="details"
                width={350}
                height={350}
                className="h-full rounded-xl"
              />
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};


export async function getStaticPaths() {
  const paths = Object.keys(ProductsDetails).map((product) => ({
    params: { product },
  }));

  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  let logo = '';
  const { product } = params;
  
  if (product === 'Rockwell') {
    logo = '/images/partners/allen-removebg-preview (1).png';
  } else if (product === 'Siemens') {
    logo = '/images/partners/semins-removebg-preview.png';
  }

  const productDetails = ProductsDetails[product];

  return {
    props: {
      logo,
      productDetails,
    },
  };
}
const ProductDetails = ({ logo, productDetails }) => {
  console.log(productDetails);
  return (
    <div>
      <div className="logo flex my-20 w-[95%] mx-auto">
        <img src={logo} width={400} height={300} alt="logo" />
      </div>
      <div className="grid gap-8 w-11/12 mx-auto">
        {productDetails ? (
          productDetails.map((item, index) => (
            <Details key={index} item={item} />
          ))
        ) : (
          <h1 className="text-center text-4xl pt-20">No information provided</h1>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
