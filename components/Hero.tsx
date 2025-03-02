"use client"

import React, { useEffect } from 'react'
import { motion, useMotionValue, useMotionTemplate, animate } from 'framer-motion'
import Image from 'next/image'
import profilepic from '../public/profilepic.png'
import { FiArrowRight } from 'react-icons/fi'

const COLORS_TOP = [
    "#6A1B9A",
    "#0D47A1",


    // "#1E67C6", 
    // "#13FFAA", 

    // "#CE84CF", 
    // "#DD335C"
]

function Hero() {
    const color = useMotionValue(COLORS_TOP[0])

    useEffect(() => {
        animate(color, COLORS_TOP, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror"
        })
    }, [])

    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`

    const border = useMotionTemplate`1px solid ${color}`
    const boxShadow = useMotionTemplate`0px 4px 24px ${color}`

  return (
    <motion.section
    style={{
        backgroundImage
    }}
    className='relative grid min-h-screen plate-content-center overflow-hidden px-4 py-24 text-gray-200'
    
    >

        <div className='z-10 flex flex-col items-center'>
            <br />
            <span className='mb-1.5 inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm'>Open for work</span>
            <br />
            <br />
            <h1 className='text-white/40 text-5xl font-black'>Hi, I am</h1>
            <h1 className='max-w-3xl text-5xl bg-graident-to-br from-white to-gray-400 bg-clip-text font-black leading-tight 
             md:text-5xl '>Hafeez Baig</h1>
             <br />

                <Image 
                src={profilepic}
                alt="profilepic"
                width={200}
                />

                {/* <div className='flex bg-white/10 shadow-xl p-3 rounded-3xl justify-center space-x-2 mb-4'>
                <Image 
                src={obj}
                alt='object'
                width={30} 
                className='rounded-2xl mx-auto' />
                <p className='font-medium'>80+ clients</p>

                </div> */}

                <br />

        
        <p className='my-6 max-w-xl text-center'>Full Stack Web Developer</p>

        <motion.button
        style={{
            border,
            boxShadow
        }}
        whileHover={{
            scale: 1.015
        }}
        whileTap={{
            scale: 0.985
        }}
        className='flex w-fit items-center gap-2 rounded-full px-4 py-2 cursor-pointer'
        
        >
            Download Resume
            <FiArrowRight className='' />
        </motion.button>
        </div>

        <div className='bg-circle-container'>
            <div className='bg-circle-background'></div>
            <div className='bg-circle'></div>
        </div>

    </motion.section>
  )
}

export default Hero