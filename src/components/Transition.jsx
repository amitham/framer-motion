import { motion } from "framer-motion"

const Transition = () => {
  return (
    <motion.div animate={{x:100}} transition={{delay:1}}>
        <div className="w-[100px] h-[100px] border border-solid bg-orange-300 border-orange-300 rounded-full"></div>
    </motion.div>
  )
}

export default Transition;
