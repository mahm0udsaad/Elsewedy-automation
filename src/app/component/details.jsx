const Details = ({ item }) => {
    return (
      <>
          <div id={item.link} className="">
            <div  className='lg:flex space-y-8 text-justify sm:justify-between'>
            <div className="flex flex-col lg:w-[60%] px-8">
            <h2 className='text-start text-2xl sm:text-4xl pb-5'>{item.title}</h2>
            <p className='text-lg'>{item.content}</p>
            </div>
              {item.imageUrl.length !== 0 ? (
                <div className={`grid ${item.imageUrl.length == 4 ? "grid-cols-2 grid-rows-2 lg:w-[40%]":"grid-cols-2"} gap-4 sm:gap-6 lg:gap-8`}>
                {Array.isArray(item.imageUrl) ? (
                  item.imageUrl.map((e, index) => 
                 <div className="inner-wrapper h-[13rem]">
                   <img
                  key={index} 
                  src={e} 
                  alt="details" 
                  width={350}
                  height={350}
                  className="h-full rounded-xl"/></div>)
               ) : (
                 null
               )}
                 </div>
              ):(null)}
             </div>
          </div>
      </>
    );
  };

export {Details}