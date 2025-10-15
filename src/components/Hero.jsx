import { Link } from 'react-router-dom'
import { Bot, MessageCircle, Mic, Zap, ArrowRight } from 'lucide-react'

const Hero = () => {
    return (
        <section className="bg-gradient-to-br from-primary-50 to-blue-50 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                        Transformez votre entreprise avec{' '}
                        <span className="text-primary-600">l'intelligence artificielle</span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                        Gadewin vous accompagne dans la création de solutions IA innovantes :
                        chatbots intelligents, assistants vocaux avec Retell, agents IA et automatisation
                        pour révolutionner votre expérience client.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/services" className="btn-primary inline-flex items-center space-x-2">
                            <span>Découvrir nos services</span>
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                        <Link to="/contact" className="btn-secondary inline-flex items-center space-x-2">
                            <span>Demander un devis</span>
                        </Link>
                    </div>
                </div>

                {/* Services Preview */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="card text-center">
                        <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <MessageCircle className="h-8 w-8 text-primary-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Chatbots IA</h3>
                        <p className="text-gray-600">
                            Des assistants conversationnels intelligents qui comprennent et répondent à vos clients 24/7
                        </p>
                    </div>

                    <div className="card text-center">
                        <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Mic className="h-8 w-8 text-primary-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Voice AI avec Retell</h3>
                        <p className="text-gray-600">
                            Des assistants vocaux naturels et expressifs pour une interaction humaine authentique
                        </p>
                    </div>

                    <div className="card text-center">
                        <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Zap className="h-8 w-8 text-primary-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Automatisation IA</h3>
                        <p className="text-gray-600">
                            Automatisez vos processus métier avec des agents IA intelligents et efficaces
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
