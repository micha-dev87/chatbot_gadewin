import { Link } from 'react-router-dom'
import { MessageCircle, Mic, Bot, Zap, ArrowRight } from 'lucide-react'

const ServicesPreview = () => {
    const services = [
        {
            icon: MessageCircle,
            title: 'Chatbots IA',
            description: 'Créez des assistants conversationnels intelligents qui comprennent le langage naturel et offrent une expérience client exceptionnelle.',
            features: ['Compréhension contextuelle', 'Intégration multi-plateforme', 'Formation personnalisée', 'Analytics avancés']
        },
        {
            icon: Mic,
            title: 'Voice AI avec Retell',
            description: 'Des assistants vocaux naturels et expressifs qui communiquent avec vos clients comme de vrais humains.',
            features: ['Voix naturelle et expressive', 'Reconnaissance vocale avancée', 'Intégration téléphonique', 'Personnalisation émotionnelle']
        },
        {
            icon: Bot,
            title: 'Agents IA',
            description: 'Déployez des agents IA autonomes capables de gérer des tâches complexes et d\'interagir avec vos systèmes.',
            features: ['Autonomie décisionnelle', 'Intégration API', 'Apprentissage continu', 'Monitoring en temps réel']
        },
        {
            icon: Zap,
            title: 'Automatisation IA',
            description: 'Automatisez vos processus métier avec des solutions IA qui s\'adaptent et s\'améliorent continuellement.',
            features: ['Processus optimisés', 'Réduction des erreurs', 'Gains de productivité', 'ROI mesurable']
        }
    ]

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Nos solutions IA
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Découvrez notre gamme complète de services d'intelligence artificielle
                        conçus pour transformer votre entreprise et améliorer l'expérience client.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {services.map((service, index) => {
                        const IconComponent = service.icon
                        return (
                            <div key={index} className="card hover:scale-105 transition-transform duration-300">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-primary-100 p-3 rounded-lg flex-shrink-0">
                                        <IconComponent className="h-8 w-8 text-primary-600" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-600 mb-4">
                                            {service.description}
                                        </p>
                                        <ul className="space-y-1">
                                            {service.features.map((feature, featureIndex) => (
                                                <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                                                    <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2"></div>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className="text-center">
                    <Link to="/services" className="btn-primary inline-flex items-center space-x-2">
                        <span>Voir tous nos services</span>
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default ServicesPreview
