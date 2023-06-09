import { motion } from "framer-motion"

const Transition = () => {
  return (
    <motion.div animate={{x:100}} transition={{ease: "easeInOut", duration: 2, repeat: Infinity}}>
        <div className="w-[100px] h-[100px] border border-solid bg-orange-50 rounded-full"></div>
    </motion.div>
  )
}

export default Transition;
