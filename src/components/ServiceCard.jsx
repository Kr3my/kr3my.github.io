import { AnimatePresence, motion } from 'framer-motion'

export default function ServiceCard({title, description}) {
    return (
        <motion.article 
        initial={{opacity: 0, y: 16}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.8}}
        class="w-[17rem] h-[20rem] bg-[#17161af1] shadow-xl rounded-2xl p-4 flex flex-col items-center">
            <h3 class="text-xl font-light text-[#64b4fff1] mb-1">{title}</h3>
            <hr class="w-full border-[#5eb6ff] mb-2" />
            <p class="text-sm text-center text-[#5998d3] font-light">{description}</p>
        </motion.article>
    )
}