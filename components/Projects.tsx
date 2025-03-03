"use client"

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { useMotionTemplate, useMotionValue, motion, animate } from 'framer-motion'

import project1 from '../public/images/projects/project1.png'
import project2 from '../public/images/projects/project2.png'
import project3 from '../public/images/projects/project3.png'
// import project4 from '../public/project4.png'
// import project5 from '../public/project5.png'

const projects = [
    { id: 1, year: 2024, title: 'Project 1', description: 'This is a project description', image: project1 },
    { id: 2, year: 2023, title: 'Project 2', description: 'This is a project description', image: project2 },
    { id: 3, year: 2022, title: 'Project 3', description: 'This is a project description', image: project3 },
    // {id: 4, year: 2021, title: 'Project 4', description: 'This is a project description', image: project4},
    // {id: 5, year: 2020, title: 'Project 5', description: 'This is a project description', image: project5},
]

const COLORS_TOP = [
    "#6A1B9A",
    "#0D47A1",


    // "#1E67C6", 
    // "#13FFAA", 

    // "#CE84CF", 
    // "#DD335C"
]

function Projects() {
    const [selectedProject, setSelectedProject] = useState(projects[0])

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


    return (
        <motion.section 
        style={{ backgroundImage }}
         id='portfolio' className='py-32 text-white'>
            <div className='max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12'>

                <div>

                    <h2 className='text-6xl font-bold mb-10'>Selected <span className='text-gray-400'>Projects</span></h2>
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            onClick={() => setSelectedProject(project)}
                            className='cursor-pointer mb-8 group'
                        >
                            <p className='text-gray-400 text-lg mb-2'>{project.year}</p>
                            <h3 className={`text-3xl font-semibold group-hover:text-gray-400 transition-colors
                    ${selectedProject.id === project.id ? 'text-gray-200' : ''} duration-300`}>
                                {project.title}
                            </h3>
                            {selectedProject.id === project.id && (
                                <div className='border-b-2 border-gray-200 my-4'></div>
                            )}
                            {selectedProject.id === project.id && (
                                <p className='text-gray-400 transition-all duration-500 ease-in-out'>
                                    {project.description}
                                </p>
                            )}
                        </div>
                    ))}
                </div>



                <Image
                    src={selectedProject.image.src}
                    alt={selectedProject.title}
                    className='rounded-xl shadow-lg transition-opacity duration-500 ease-in-out'
                    width={800}
                    height={450}

                />
            </div>
        </motion.section>
    )
}

export default Projects