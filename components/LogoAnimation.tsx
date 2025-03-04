"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

import udemy from '../public/images/assets/logoanimation/udemy.png'
import fiverr from '../public/images/assets/logoanimation/fiverr.png'
import elementor from '../public/images/assets/logoanimation/elementor.png'
import logitech from '../public/images/assets/logoanimation/logitech.png'
import oracle from '../public/images/assets/logoanimation/oracle.png'

const images = [
    { src: udemy, alt: 'udemy' },
    { src: fiverr, alt: 'fiverr' },
    { src: elementor, alt: 'elementor' },
    { src: logitech, alt: 'logitech' },
    { src: oracle, alt: 'oracle' },
    { src: udemy, alt: 'udemy' },
    { src: fiverr, alt: 'fiverr' },
    { src: elementor, alt: 'elementor' },
    { src: logitech, alt: 'logitech' },
    { src: oracle, alt: 'oracle' },
    { src: udemy, alt: 'udemy' },
    { src: fiverr, alt: 'fiverr' },
    { src: elementor, alt: 'elementor' },
    { src: logitech, alt: 'logitech' },
    { src: oracle, alt: 'oracle' },
    { src: udemy, alt: 'udemy' },
    { src: fiverr, alt: 'fiverr' },
    { src: elementor, alt: 'elementor' },
    { src: logitech, alt: 'logitech' },
    { src: oracle, alt: 'oracle' },

]

function LogoAnimation() {
  return (
    <div className='py-8 bg-purple-200/10 opacity-80'>
        <div className='container mx-auto'>
            <div className='overflow-hidden 
            [mask-image:linear-gradient(to_right,_transparent,_black_25%,_black_75%,_transparent)]'>
                <motion.div className='flex gap-14 flex-none pr-14' 
                animate={{
                    translateX: '-50%',
                }}
                transition={{
                    duration: 35,
                    repeat: Infinity,
                    ease: 'linear',
                    repeatType: 'loop'
                }}
                >
                      {images.map((image, index) => (

                          <Image
                              key={index}
                              src={image.src}
                              alt={image.alt}
                              height={30}
                          />

                      ))}

                </motion.div>

            </div>

        </div>

    </div>
  )
}

export default LogoAnimation