import { motion } from 'framer-motion';

function AnimatedText({text}) {
    const letters = Array.from(text); // Splitting the text into individual letters

    const container = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1, 
            transition: {
                staggerChildren: 0.03, delayChildren: 0.1
            }
        }
    }

    const child = {
        hidden: {
            opacity: 0,
            y: 0,
            transition: {
                ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85
            }
        },
        visible: {
            opacity: 1,
            y: 200,
            transition: {
                ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75
            }
        }
    }

    return (
        <motion.div variants={container} initial="hidden" animate="visible">
            {letters.map((letter, index) => (
                <motion.span 
                    variants={child} 
                   
                    key={index}
                >
                    {letter}
                </motion.span>
            ))}
        </motion.div>
    )
}

export default AnimatedText;
