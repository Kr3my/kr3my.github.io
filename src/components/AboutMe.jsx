import { AnimatePresence, motion } from 'framer-motion'

export default function AboutMe() {
    return (
        <AnimatePresence>
            <motion.section
            initial={{opacity: 0, y: 16}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8}}
            className="px-8 py-10 max-w-screen-lg mx-auto">
                <h2
                className="text-3xl font-bold text-[#d8d8d8] mb-1">
                    About Me ₊⊹
                </h2>

                <hr className="border-[#cecece] w-64 mb-2" />
                <p className="text-[#c5c5c5] font-light leading-relaxed">
                I'm an engineering student who began studying programming at the age of
                11. I studied hardware extensively for a time, started developing Discord
                bots, and have remained persistent in my studies ever since. I currently
                have extensive experience and have worked for several game studios and
                software companies, along with other contributions to open source. I'm a
                freelancer who works on a commission basis; <span className="font-bold"
                    >I don't work as a long-term developer.</span
                >

                <br />
                <br />

                I can speak English and Spanish and have some experience in <span
                    className="font-bold"
                >
                    maths, UI design, 2D and 3D animation, 3D modeling, sprite design, VFX
                    and GFX design
                </span> which I use to complement the projects I work on.

                <br />
                <br />

                <span className="font-bold"
                    >My commissions can take anywhere from a day to a few weeks
                </span> depending on the complexity of the task and the assets provided to
                me. While I prefer to work solely on code, <span className="font-bold"
                    >I can also create my own assets if necessary to continue the commission</span
                > (of course, adding an extra to the total payment).
                </p>
            </motion.section>
        </AnimatePresence>
    )
}