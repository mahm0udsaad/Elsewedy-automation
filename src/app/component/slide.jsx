import { motion ,AnimatePresence } from "framer-motion";
const Slide = ({ text, parag, imgSrc , isActive}) => {
    const backgroundStyle = {
      backgroundImage: `url(${imgSrc})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    };
  
    const textContainerStyle = {
      backdropFilter: 'blur(3px)',
      backgroundColor: 'rgba(255, 255, 255, 20%)',
      padding: '20px',
    };
  
    return (
      <div className="relative w-full h-[60vh] bg-blue-500" style={backgroundStyle}>
        <div className="absolute inset-0 mx-auto flex flex-col items-center justify-center w-4/5">
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{y:10, opacity: 0 }}
              animate={{y:0, opacity: 1 }}
              exit={{y:10, opacity: 0 }}
              transition= {{duration: .7}}
              className="rounded"
              style={textContainerStyle}
            >
              <div className="text-shadow text-[#9c1c27] text-3xl sm:text-4xl font-bold py-5">{text}</div>
              <p className="text-xl text-shadow text-white font-semibold">{parag}</p>
            </motion.div>
          )}
        </AnimatePresence>
        </div>
      </div>
    );
  };
  
  export default Slide;
  