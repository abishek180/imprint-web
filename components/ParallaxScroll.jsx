'use client';
import { useRef } from "react";
import styles from './para.module.scss';
import Picture1 from '/public/images/pad.png';
import Picture2 from '/public/images/freeflyer.png';
import Picture3 from '/public/images/card.png';
import Image from "next/image";
import { motion, useScroll, useTransform } from 'framer-motion';



export default function ParallaxScroll() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start']
    })
    const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const md = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const lg = useTransform(scrollYProgress, [0, 1], [0, -250]);

    const images = [
        {
            src: Picture1,
            y: 0
        },
        {
            src: Picture2,
            y: lg
        },
        {
            src: Picture3,
            y: md
        }
    ];

    return (
        <div ref={container} className={styles.container}>
            <div className={styles.body}>
                <motion.h1 style={{y: sm}}>Imprint's Print Quality</motion.h1>
            </div>
            <div className={styles.images}>
                {
                    images.map( ({src, y}, i) => {
                        return <motion.div style={{y}} key={`i_${i}`} className={styles.imageContainer}>
                            <Image 
                                src={src}
                                placeholder="blur"
                                alt="image"
                                fill
                            />
                        </motion.div>
                    })
                }
            </div>
        </div>
    )
}