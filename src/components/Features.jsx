import { Shield, Clock, TrendingUp, Users, CheckCircle, Star } from 'lucide-react'

const Features = () => {
    const features = [
        {
            icon: Shield,
            title: 'Sécurité garantie',
            description: 'Vos données sont protégées avec les plus hauts standards de sécurité et conformité RGPD.'
        },
        {
            icon: Clock,
            title: 'Déploiement rapide',
            description: 'Mise en production en quelques semaines grâce à nos solutions pré-configurées et éprouvées.'
        },
        {
            icon: TrendingUp,
            title: 'ROI mesurable',
            description: 'Suivez en temps réel l\'impact de nos solutions IA sur vos performances et votre rentabilité.'
        },
        {
            icon: Users,
            title: 'Support expert',
            description: 'Notre équipe d\'experts vous accompagne tout au long de votre transformation digitale.'
        }
    ]

    const stats = [
        { number: '500+', label: 'Projets réalisés' },
        { number: '98%', label: 'Satisfaction client' },
        { number: '24/7', label: 'Support disponible' },
        { number: '3x', label: 'ROI moyen' }
    ]

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                                {stat.number}
                            </div>
                            <div className="text-gray-600 font-medium">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Features */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Pourquoi choisir Gadewin ?
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Notre expertise et notre approche personnalisée font de nous le partenaire idéal
                        pour votre transformation digitale avec l'IA.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => {
                        const IconComponent = feature.icon
                        return (
                            <div key={index} className="text-center">
                                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                                    <IconComponent className="h-8 w-8 text-primary-600" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600">
                                    {feature.description}
                                </p>
                            </div>
                        )
                    })}
                </div>

                {/* Trust indicators */}
                <div className="mt-16 text-center">
                    <div className="flex items-center justify-center space-x-8 mb-4">
                        <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                            ))}
                        </div>
                        <span className="text-gray-600 font-medium">4.9/5 sur plus de 200 avis clients</span>
                    </div>
                    <div className="flex items-center justify-center space-x-4 text-gray-500">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>Certifié ISO 27001</span>
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>Conforme RGPD</span>
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>Support 24/7</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features
