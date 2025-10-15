import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
    const testimonials = [
        {
            name: 'Marie Dubois',
            role: 'Directrice Marketing',
            company: 'TechCorp',
            content: 'Gadewin a transformé notre service client avec leur chatbot IA. Nos clients sont ravis de l\'expérience et notre équipe peut se concentrer sur des tâches plus stratégiques.',
            rating: 5,
            avatar: 'MD'
        },
        {
            name: 'Pierre Martin',
            role: 'CEO',
            company: 'InnovateLab',
            content: 'L\'intégration de Retell pour nos assistants vocaux a été exceptionnelle. La qualité de la voix est si naturelle que nos clients pensent parler à de vrais conseillers.',
            rating: 5,
            avatar: 'PM'
        },
        {
            name: 'Sophie Laurent',
            role: 'Directrice des Opérations',
            company: 'E-commerce Plus',
            content: 'L\'automatisation IA mise en place par Gadewin nous a permis de réduire nos coûts opérationnels de 40% tout en améliorant la qualité de notre service.',
            rating: 5,
            avatar: 'SL'
        }
    ]

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Ce que disent nos clients
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Découvrez les témoignages de nos clients qui ont transformé leur entreprise
                        grâce à nos solutions d'intelligence artificielle.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="card relative">
                            <Quote className="h-8 w-8 text-primary-200 absolute top-4 right-4" />

                            <div className="flex items-center mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                                ))}
                            </div>

                            <p className="text-gray-600 mb-6 italic">
                                "{testimonial.content}"
                            </p>

                            <div className="flex items-center">
                                <div className="bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-semibold mr-4">
                                    {testimonial.avatar}
                                </div>
                                <div>
                                    <div className="font-semibold text-gray-900">
                                        {testimonial.name}
                                    </div>
                                    <div className="text-gray-500 text-sm">
                                        {testimonial.role} chez {testimonial.company}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials
