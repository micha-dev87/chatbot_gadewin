import { Users, Target, Award, Lightbulb, CheckCircle, Star } from 'lucide-react'
import { Link } from 'react-router-dom'

const About = () => {
    const values = [
        {
            icon: Lightbulb,
            title: 'Innovation',
            description: 'Nous restons à la pointe de la technologie pour vous offrir les solutions IA les plus avancées.'
        },
        {
            icon: Target,
            title: 'Excellence',
            description: 'Nous nous engageons à livrer des solutions de qualité supérieure qui dépassent vos attentes.'
        },
        {
            icon: Users,
            title: 'Collaboration',
            description: 'Nous travaillons en étroite collaboration avec nos clients pour comprendre leurs besoins uniques.'
        },
        {
            icon: Award,
            title: 'Fiabilité',
            description: 'Nos solutions sont robustes, sécurisées et conçues pour durer dans le temps.'
        }
    ]

    const team = [
        {
            name: 'Alexandre Dubois',
            role: 'CEO & Fondateur',
            description: 'Expert en IA avec 10 ans d\'expérience dans l\'intelligence artificielle et l\'automatisation.',
            avatar: 'AD'
        },
        {
            name: 'Marie Laurent',
            role: 'CTO',
            description: 'Spécialiste des technologies vocales et de l\'intégration Retell pour des expériences naturelles.',
            avatar: 'ML'
        },
        {
            name: 'Pierre Martin',
            role: 'Lead Developer IA',
            description: 'Développeur passionné par les chatbots intelligents et les agents conversationnels.',
            avatar: 'PM'
        },
        {
            name: 'Sophie Chen',
            role: 'Responsable Client Success',
            description: 'Garantit la réussite de vos projets avec un accompagnement personnalisé et un support exceptionnel.',
            avatar: 'SC'
        }
    ]

    const milestones = [
        { year: '2020', title: 'Fondation de Gadewin', description: 'Création de l\'entreprise avec une vision claire : démocratiser l\'IA pour les entreprises.' },
        { year: '2021', title: 'Premiers projets IA', description: 'Déploiement de nos premiers chatbots pour des clients pionniers.' },
        { year: '2022', title: 'Intégration Retell', description: 'Partnership avec Retell pour offrir des solutions vocales naturelles.' },
        { year: '2023', title: '100+ clients', description: 'Atteinte du cap des 100 clients satisfaits avec un taux de satisfaction de 98%.' },
        { year: '2024', title: 'Expansion internationale', description: 'Ouverture de nos services à l\'international avec des équipes dédiées.' }
    ]

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-primary-50 to-blue-50 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            À propos de Gadewin
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                            Nous sommes une équipe passionnée d'experts en intelligence artificielle,
                            dédiée à transformer votre entreprise avec des solutions IA innovantes et efficaces.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Notre mission
                            </h2>
                            <p className="text-lg text-gray-600 mb-6">
                                Chez Gadewin, nous croyons que l'intelligence artificielle peut révolutionner
                                la façon dont les entreprises interagissent avec leurs clients. Notre mission
                                est de rendre l'IA accessible et efficace pour tous.
                            </p>
                            <p className="text-lg text-gray-600 mb-8">
                                Nous nous spécialisons dans la création de solutions sur mesure qui s'intègrent
                                parfaitement dans vos processus existants, vous permettant de vous concentrer
                                sur ce qui compte le plus : votre croissance.
                            </p>
                            <div className="flex items-center space-x-4">
                                <div className="flex items-center space-x-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                                    ))}
                                </div>
                                <span className="text-gray-600 font-medium">4.9/5 sur 200+ avis clients</span>
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-primary-100 to-blue-100 rounded-2xl p-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Nos chiffres clés</h3>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-primary-600 mb-1">500+</div>
                                    <div className="text-gray-600">Projets réalisés</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-primary-600 mb-1">98%</div>
                                    <div className="text-gray-600">Satisfaction client</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-primary-600 mb-1">24/7</div>
                                    <div className="text-gray-600">Support disponible</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-primary-600 mb-1">3x</div>
                                    <div className="text-gray-600">ROI moyen</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Nos valeurs
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Ces valeurs guident chaque décision que nous prenons et chaque solution que nous créons.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => {
                            const IconComponent = value.icon
                            return (
                                <div key={index} className="card text-center">
                                    <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <IconComponent className="h-8 w-8 text-primary-600" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                        {value.title}
                                    </h3>
                                    <p className="text-gray-600">
                                        {value.description}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Notre équipe
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Des experts passionnés qui mettent leur expertise au service de votre succès.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member, index) => (
                            <div key={index} className="card text-center">
                                <div className="bg-primary-600 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                                    {member.avatar}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                                    {member.name}
                                </h3>
                                <p className="text-primary-600 font-medium mb-3">
                                    {member.role}
                                </p>
                                <p className="text-gray-600 text-sm">
                                    {member.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Notre parcours
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Découvrez les étapes clés qui ont façonné Gadewin et notre expertise.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {milestones.map((milestone, index) => (
                            <div key={index} className="flex items-start space-x-6">
                                <div className="bg-primary-600 text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                                    {milestone.year}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                        {milestone.title}
                                    </h3>
                                    <p className="text-gray-600">
                                        {milestone.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Rejoignez nos clients satisfaits
                    </h2>
                    <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
                        Découvrez pourquoi plus de 500 entreprises nous font confiance pour leur transformation IA.
                    </p>

                    <Link
                        to="/contact"
                        className="bg-white text-primary-600 hover:bg-gray-50 font-medium py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center justify-center space-x-2"
                    >
                        <span>Commencer votre projet</span>
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default About
