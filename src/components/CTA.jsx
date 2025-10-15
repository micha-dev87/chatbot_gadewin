import { Link } from 'react-router-dom'
import { ArrowRight, Phone, Mail } from 'lucide-react'

const CTA = () => {
    return (
        <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Prêt à transformer votre entreprise avec l'IA ?
                </h2>
                <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
                    Contactez notre équipe d'experts pour discuter de votre projet et découvrir
                    comment nos solutions d'intelligence artificielle peuvent répondre à vos besoins.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                    <Link
                        to="/contact"
                        className="bg-white text-primary-600 hover:bg-gray-50 font-medium py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center justify-center space-x-2"
                    >
                        <Phone className="h-5 w-5" />
                        <span>Planifier un appel</span>
                    </Link>
                    <a
                        href="mailto:contact@gadewin.com"
                        className="bg-primary-500 text-white hover:bg-primary-400 font-medium py-3 px-8 rounded-lg border border-primary-400 transition-colors duration-200 inline-flex items-center justify-center space-x-2"
                    >
                        <Mail className="h-5 w-5" />
                        <span>Nous écrire</span>
                    </a>
                </div>

                <div className="text-primary-100 text-sm">
                    <p>Consultation gratuite • Devis personnalisé • Support dédié</p>
                </div>
            </div>
        </section>
    )
}

export default CTA
