const { useInView , motion} = require("framer-motion")
const { useRef } = require("react")

const Lable = ({text}) =>{
    const ref = useRef(null) 
    const isAgreeInview = useInView(ref , {once:true})
    console.log(isAgreeInview);
    return(
         <div ref={ref} className="w-full">
        <motion.div
        initial={{ x:-300 }}
        animate={{ x: isAgreeInview ? 0 : -300 }}
        className="redBg sm:w-[25%] mt-10">
        <h1 className="text-3xl font-semibold text-center text-white p-4">
        {text}
        </h1>
        </motion.div>
         </div>
    )
}
export default Lable ;