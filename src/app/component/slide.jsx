import { motion ,AnimatePresence } from "framer-motion";
const Slide = ({ text, parag, imgSrc , isActive}) => {
    const backgroundStyle = {
      backgroundImage: `url(${imgSrc})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    };
  
    const textContainerStyle = {
      backdropFilter: 'blur(5px)',
      backgroundColor: 'rgba(255, 255, 255, 20%)',
      padding: '20px',
    };
  
    return (
      <div className="slide-item relative w-full h-[60vh] md:h-[80vh] sm:h-[60vh]" style={backgroundStyle}>
        <div className="absolute inset-0 mx-auto flex flex-col items-center justify-center w-4/5">
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{y:10, opacity: 0 }}
              animate={{y:0, opacity: 1 }}
              exit={{y:10, opacity: 0 }}
              transition= {{duration: .7}}
              className="rounded text-white"
            >
              <div style={{textShadow: '1px 3px #423838'}} className="text-shadow leading-8 text-xl sm:text-3xl sm:text-4xl font-bold py-5">{text}</div>
              <p className="sm:text-xl text-shadow leading-8 text-white font-semibold">{parag}</p>
            </motion.div>
          )}
        </AnimatePresence>
        </div>
      </div>
    );
  };
  const PageSlide = ({ text, parag, imgSrc}) => {
    const backgroundStyle = {
      backgroundImage: `url(${imgSrc})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    };
  
    const textContainerStyle = {
      backdropFilter: 'blur(5px)',
      backgroundColor: 'rgba(255, 255, 255, 20%)',
      padding: '20px',
    };
  
    return (
      <div className="slide-item relative w-full md:h-[50vh] lg:h-[60vh] h-[40vh]" style={backgroundStyle}>
        <div className="absolute inset-0 mx-auto flex flex-col items-center justify-center w-4/5">
        <AnimatePresence>
            <motion.div
              initial={{y:10, opacity: 0 }}
              animate={{y:0, opacity: 1 }}
              exit={{y:10, opacity: 0 }}
              transition= {{duration: .7}}
              className="rounded text-white"
            >
              <div style={{textShadow: '1px 3px #423838'}} className="text-shadow leading-8 text-xl sm:text-3xl sm:text-4xl font-bold py-5">{text}</div>
              <p className="sm:text-xl text-shadow leading-8 text-white font-semibold">{parag}</p>
            </motion.div>
        </AnimatePresence>
        </div>
      </div>
    );
  };
  export {Slide ,PageSlide};
  