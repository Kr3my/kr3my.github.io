import { motion } from 'framer-motion'

export default function Intro() {
    return (
        <motion.section 
        initial={{opacity: 0, y: 5}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.7}}
        className="relative w-full h-[22rem]">
            <img
            src="Background.webp"
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover z-0"
            />
            <div
            className="absolute inset-0 bg-gradient-to-t from-[#1b1a1b] via-[#1b1a1b88] to-transparent z-10"
            >
            </div>

            <div
            className="relative z-20 flex flex-col items-center justify-center h-full space-y-2 text-center"
            >
                <img
                    src="Reimu.webp"
                    alt="Profile"
                    className="w-32 h-32 rounded-full shadow-lg my-[-0.4rem]"
                />

                <h1 className="text-4xl font-bold text-[#964054] drop-shadow-md font-mono my-[0.35rem] cursor-default">Kr3_my</h1>

                <hr className="w-[16rem] border-[#964054]" />

                <p className="text-[#a7445b] font-mono text-sm my-[-0.2rem] cursor-default">
                    Full-stack software and video game developer
                </p>
            </div>
        </motion.section>
    )
}