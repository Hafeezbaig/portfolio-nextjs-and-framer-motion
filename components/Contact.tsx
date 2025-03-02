"use client"

import React from 'react'
import { motion } from 'framer-motion'

function Contact() {
  return (
    <section id='contact' className='py-32 text-white max-w-[1200px] mx-auto px-4'>
        <motion.div
        initial={{ opacity: 0,y: 20 }}
        whileInView={{ opacity: 1,y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className='grid lg:grid-cols-2 gap-16'
        >
            <div className='space-y-12'>
                <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className='text-7xl font-bold text-gray-300'
                >
                    Get in <span className='text-gray-500'>touch</span>

                </motion.h2>

                <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className='glass p-8 rounded-2xl space-y-8'
                >
                    <div className='space-y-2'>
                        <p className='text-lg text-gray-300'>Email</p>
                        <a href="mailto:hafeezbaig3138@gmail.com"
                        className='text-2xl font-semibold hover:text-gray-400 transition duration-300 flex items-center gap-2'
                        >
                            hafeezbaig3138@gmail.com
                            <span className='text-gray-500'>↗</span>
                        </a>

                    </div>

                    <div className='space-y-2'>
                        <p className='text-lg text-gray-300'>Talk Support</p>
                        <a href="https://talk.hafeezbaig.in"
                        className='text-2xl font-semibold hover:text-gray-400 transition duration-300 flex items-center gap-2'
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

                    {/* <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className='w-full h-full min-h-[400px] rounded-2xl overflow-hidden'
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.199033187631!2d77.3086116144065!3d28.5820579824378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5f4a4e2c3e3%3A0x9e6b7e4b0c8b1f5a!2sHafeez%20Baig!5e0!3m2!1sen!2sin!4v1632922875375!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            >
                        </iframe>

                    </motion.div> */}

                </motion.div>

            </div>

        </motion.div>
    </section>
  )
}

export default Contact