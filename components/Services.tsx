// import { desc, div } from 'framer-motion/client'
import React from 'react'

const services = [
    { id: '01', title: 'web design', description: 'I design websites that are visually appealing and easy to navigate.' },
    { id: '02', title: 'web development', description: 'I develop websites that are fast, secure, and responsive.' },
    { id: '03', title: 'e-commerce', description: 'I build e-commerce websites that are easy to manage and update.' },
    { id: '04', title: 'seo', description: 'I optimize websites for search engines to improve their visibility.' },
    { id: '05', title: 'web hosting', description: 'I provide'},
    { id: '06', title: 'maintenance', description: 'I provide'},
]

function Services() {

  return (
    <section className='text-white py-20'>
        <div className='container mx-auto flex flex-col md:flex-row'>
            <div className='md:w-1/4 pr-8 mb-12 md:mb-0'>
            <h2 className='text-6xl font-extrabold sticky top-20'>Services</h2>

            </div>

            <div className='md:w-3/4'>
            {services.map(service => (
                <div key={service.id} className='mb-16 flex items-start'>
                    <div className='text-gray-300 font-bold text-5xl mr-6'>
                        {service.id}
                    </div>

                    <div>
                        <h3 className='text-2xl font-bold mb-2'>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>

                </div>
            ))}

            </div>

        </div>
    </section>
  )
}

export default Services