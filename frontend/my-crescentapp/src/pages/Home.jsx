import React from 'react'
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import Service from '../components/Service'
import Contact from '../components/Contact'
import Terms from '../components/Terms'
import PrivacyPolicy from '../components/PrivacyPolicy'
import Footer from '../components/Footer'
import FAQ from '../components/FAQ'
import { Element } from 'react-scroll';
const Home = () => {
    return (


        <>
            <Element>

                <HeroSection />
            </Element>
            <Element name="hero">
                <HeroSection />
            </Element>

            <Element name="about">
                <About />
            </Element>

            <Element name="service">
                <Service />
            </Element>

            <Element name="faq">
                <FAQ />
            </Element>

            <Element name="contact">
                <Contact />
            </Element>

            <Element name="terms">
                <Terms />
            </Element>

            <Element name="privacy">
                <PrivacyPolicy />
            </Element>
            <Footer />


        </>



    )
}

export default Home
