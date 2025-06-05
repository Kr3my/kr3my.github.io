import {AnimatePresence, motion } from 'framer-motion'

export default function Pricing() {
    return (
        <AnimatePresence>
            <motion.section 
            initial={{opacity: 0, y: 16}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8}}
            className="px-8 py-10 max-w-screen-lg mx-auto">
                <h2 className="text-3xl font-bold text-[#d8b37b] mb-2">○ Pricing</h2>

                <hr className="border-[#b49669] w-64 mb-2" />

                <p className="text-[#b49669] font-light mb-4">
                The price of a commission depends on the work that is requested of me,
                ranging from 10 USD to 500 USD based on:
                </p>

                <ul className="list-disc pl-6 text-[#caa875] font-light space-y-1">
                    <li>The number of assets required</li>
                    <li>The complexity and quantity of systems involved</li>
                    <li>Current workload (if slots are full, additional fees may apply)</li>
                </ul>

                <p className="text-[#b49669] font-light mt-4">
                (I offer 4 commission slots, with the option of adding 2 more for an
                additional 50 USD)
                </p>
            </motion.section>
        </AnimatePresence>
    )
}