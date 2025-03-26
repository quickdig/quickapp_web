"use client"

import React from 'react'
import CommonHeader from '../CommonHeader'
import Banner from './Banner'
import { ExperienceCard } from './ExperienceCard'
import ProjectsCard from './ProjectsCard'
import Contact from '../Home/Contact'
import LowerCard from './LowerCard'

const AboutusPage = () => {
    return (
        <>
            <CommonHeader />
            <Banner />
            <ExperienceCard />
            <ProjectsCard />
            <LowerCard />
            <Contact />
        </>
    )
}

export default AboutusPage