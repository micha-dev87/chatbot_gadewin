import { MessageCircle, Mic, Bot, Zap, CheckCircle, ArrowRight, Star } from 'lucide-react'
import { Link } from 'react-router-dom'

const Services = () => {
    const services = [
        {
            icon: MessageCircle,
            title: 'Chatbots IA',
            description: 'Créez des assistants conversationnels intelligents qui comprennent le langage naturel et offrent une expérience client exceptionnelle.',
            features: [
                'Compréhension contextuelle avancée',
                'Intégration multi-plateforme (web, mobile, WhatsApp)',
                'Formation personnalisée sur vos données',
                'Analytics et reporting en temps réel',
                'Support multilingue',
                'Intégration CRM et systèmes existants'
            ],
            pricing: 'À partir de 299€/mois',
            popular: false
        },
        {
            icon: Mic,
            title: 'Voice AI avec Retell',
            description: 'Des assistants vocaux naturels et expressifs qui communiquent avec vos clients comme de vrais humains.',
            features: [
                'Voix naturelle et expressive',
                'Reconnaissance vocale avancée',
                'Intégration téléphonique complète',
                'Personnalisation émotionnelle',
                'Support des accents et dialectes',
                'Enregistrement et analyse des appels'
            ],
            pricing: 'À partir de 499€/mois',
            popular: true
        },
        {
            icon: Bot,
            title: 'Agents IA',
            description: 'Déployez des agents IA autonomes capables de gérer des tâches complexes et d\'interagir avec vos systèmes.',
            features: [
                'Autonomie décisionnelle avancée',
                'Intégration API et systèmes tiers',
                'Apprentissage continu et amélioration',
                'Monitoring et supervision en temps réel',
                'Gestion des workflows complexes',
                'Scalabilité automatique'
            ],
            pricing: 'À partir de 799€/mois',
            popular: false
        },
        {
            icon: Zap,
            title: 'Automatisation IA',
            description: 'Automatisez vos processus métier avec des solutions IA qui s\'adaptent et s\'améliorent continuellement.',
            features: [
                'Optimisation des processus existants',
                'Réduction drastique des erreurs',
                'Gains de productivité mesurables',
                'ROI rapide et mesurable',
                'Intégration transparente',
                'Formation et accompagnement inclus'
            ],
            pricing: 'Sur mesure',
            popular: false
        }
    ]

    const process = [
        {
            step: '01',
            title: 'Analyse et audit',
            description: 'Nous analysons vos besoins et vos processus existants pour identifier les opportunités d\'amélioration.'
        },
        {
            step: '02',
            title: 'Conception sur mesure',
            description: 'Nous concevons une solution personnalisée adaptée à votre entreprise et à vos objectifs.'
        },
        {
            step: '03',
            title: 'Développement et test',
            description: 'Notre équipe développe et teste rigoureusement votre solution IA avant le déploiement.'
        },
        {
            step: '04',
            title: 'Déploiement et formation',
            description: 'Nous déployons votre solution et formons vos équipes pour une adoption réussie.'
        },
        {
            step: '05',
            title: 'Support et optimisation',
            description: 'Nous assurons un support continu et optimisons régulièrement les performances.'
        }
    ]

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-primary-50 to-blue-50 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Nos services IA
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                            Découvrez notre gamme complète de solutions d'intelligence artificielle
                            conçues pour transformer votre entreprise et améliorer l'expérience client.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {services.map((service, index) => {
                            const IconComponent = service.icon
                            return (
                                <div key={index} className={`card relative ${service.popular ? 'ring-2 ring-primary-500' : ''}`}>
                                    {service.popular && (
                                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                            <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                                                Populaire
                                            </span>
                                        </div>
                                    )}

                                    <div className="flex items-start space-x-4 mb-6">
                                        <div className="bg-primary-100 p-3 rounded-lg flex-shrink-0">
                                            <IconComponent className="h-8 w-8 text-primary-600" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                                {service.title}
                                            </h3>
                                            <p className="text-gray-600 mb-4">
                                                {service.description}
                                            </p>
                                            <div className="text-xl font-semibold text-primary-600">
                                                {service.pricing}
                                            </div>
                                        </div>
                                    </div>

                                    <ul className="space-y-3 mb-6">
                                        {service.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-start space-x-3">
                                                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                                <span className="text-gray-600">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <Link
                                        to="/contact"
                                        className="btn-primary w-full inline-flex items-center justify-center space-x-2"
                                    >
                                        <span>Demander un devis</span>
                                        <ArrowRight className="h-4 w-4" />
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Notre processus de travail
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Nous suivons une méthodologie éprouvée pour garantir le succès de votre projet IA.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                        {process.map((step, index) => (
                            <div key={index} className="text-center">
                                <div className="bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                                    {step.step}
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    {step.title}
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    {step.description}
                                </p>
                                {index < process.length - 1 && (
                                    <div className="hidden md:block absolute top-6 left-full w-full h-0.5 bg-gray-200 transform translate-x-4"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Prêt à commencer votre projet IA ?
                    </h2>
                    <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
                        Contactez-nous pour une consultation gratuite et découvrez comment nos solutions
                        peuvent transformer votre entreprise.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/contact"
                            className="bg-white text-primary-600 hover:bg-gray-50 font-medium py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center justify-center space-x-2"
                        >
                            <span>Consultation gratuite</span>
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                        <a
                            href="tel:+33123456789"
                            className="bg-primary-500 text-white hover:bg-primary-400 font-medium py-3 px-8 rounded-lg border border-primary-400 transition-colors duration-200 inline-flex items-center justify-center space-x-2"
                        >
                            <span>Appeler maintenant</span>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services
