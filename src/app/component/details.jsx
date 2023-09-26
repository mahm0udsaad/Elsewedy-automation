const Details = ({ item }) => {
    return (
      <>
          <div id={item.link} className=" pt-8">
            <h2 className='text-start text-2xl px-8 sm:text-4xl pb-5'>{item.title}</h2>
            <div  className='lg:flex-row flex flex-col flex-col-reverse text-justify sm:justify-between'>
            <div className="flex flex-col lg:w-[60%] lg:px-8 lg:pt-0 pt-4">
            <p className='text-lg'>{item.content}</p>
            </div>
              {item.imageUrl.length !== 0 ? (
                <div className={`grid ${item.imageUrl.length == 4 ? "grid-cols-2 grid-rows-2":"grid-cols-2"} lg:w-[35%] gap-4 sm:gap-6 lg:gap-8`}>
                {Array.isArray(item.imageUrl) ? (
                  item.imageUrl.map((e, index) => 
                 <div className="inner-wrapper h-[10rem]">
                   <img
                  key={index} 
                  src={e} 
                  alt="details" 
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