import { motion } from 'framer-motion'

const Enter = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{repeat: Infinity, repeatDelay: 1}} >
        <div className="w-[100px] h-[100px] border border-solid bg-orange-50 rounded-full"></div>
    </motion.div>
  )
}

export default Enter;
