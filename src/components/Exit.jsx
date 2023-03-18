import { motion } from "framer-motion"

const Exit = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity: 1}} exit={{opacity: 0}}>
        <div className="w-[100px] h-[100px] border border-solid bg-orange-50 rounded-full"></div>
    </motion.div>
  )
}

export default Exit
