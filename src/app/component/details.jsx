const Details = ({ Data }) => {
    return (
      <>
        {Data ? (Data.map((item, index) => (
          <div id={item.link} key={index} className='lg:flex space-y-8 my-5 pt-10 text-justify sm:justify-between'>
            <div className="flex flex-col justify-center lg:w-[40%]">
            <h2 className='text-2xl sm:text-4xl pb-5 w-[80%]'>{item.title}</h2>
            <p className='lg:w-5/6 text-lg'>{item.content}</p>
            </div>
              {item.imageUrl.length !== 0 ? (
                <div className={`grid ${item.imageUrl.length == 4 ? "grid-cols-2 grid-rows-2 sm:w-1/2":"grid-cols-2"} gap-4 sm:gap-6 lg:gap-8`}>
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
        ))):(<h1 className="text-center text-4xl pt-20">no information provided</h1>)}
      </>
    );
  };

export {Details}