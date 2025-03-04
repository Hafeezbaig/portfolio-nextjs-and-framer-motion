"use client"

import React from 'react'
import { motion } from 'framer-motion'

function Contact() {
  return (
    <section id='contact' className='py-32 text-white max-w-[1200px] mx-auto px-4 sm:px-6 w-full overflow-hidden'>
        <motion.div
        initial={{ opacity: 0,y: 20 }}
        whileInView={{ opacity: 1,y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className='grid grid-cols-1 lg:grid-cols-2 gap-8 w-full'
        >
            <div className='space-y-10 w-full'>
                <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className='text-5xl sm:text-7xl font-bold text-gray-300 pl-5 sm:pl-4'
                >
                    Get in <span className='text-purple-500'>touch</span>
                </motion.h2>

                <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className='glass p-4 sm:p-6 rounded-2xl space-y-4 w-full max-w-[90%] mx-auto lg:mx-4'
                >
                    <div className='space-y-2'>
                        <p className='text-lg text-gray-300'>Email</p>
                        <a href="mailto:hafeezbaig3138@gmail.com"
                        className='text-xl sm:text-2xl font-semibold hover:text-purple-400 transition duration-300 flex items-baseline gap-1 w-fit break-words'
                        >
                            hafeezbaig3138@gmail.com
                            <span className='text-gray-500'>↗</span>
                        </a>
                    </div>

                    <div className='space-y-2'>
                        <p className='text-lg text-gray-300'>Talk Support</p>
                        <a href="https://talk.hafeezbaig.in"
                        className='text-xl sm:text-2xl font-semibold hover:text-purple-400 transition duration-300 flex items-baseline gap-1 w-fit break-words'
                        >
                            talk.hafeezbaig.in
                            <span className='text-gray-500'>↗</span>
                        </a>
                    </div>

                    <div className='space-y-2'>
                        <p className='text-lg text-gray-300'>Some text</p>
                        <p className='text-xl not-italic leading-relaxed'>
                            some more text <br />
                            more text <br />
                            more texts
                        </p>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    </section>
  )
}

export default Contact