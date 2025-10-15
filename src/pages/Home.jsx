import Hero from '../components/Hero'
import ServicesPreview from '../components/ServicesPreview'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'

const Home = () => {
    return (
        <div>
            <Hero />
            <ServicesPreview />
            <Features />
            <Testimonials />
            <CTA />
        </div>
    )
}

export default Home
