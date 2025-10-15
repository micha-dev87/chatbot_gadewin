import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, MessageCircle } from 'lucide-react'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
    })

    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Ici vous pourriez intégrer un service comme Formspree ou EmailJS
        console.log('Form submitted:', formData)
        setIsSubmitted(true)

        // Reset form after 3 seconds
        setTimeout(() => {
            setIsSubmitted(false)
            setFormData({
                name: '',
                email: '',
                company: '',
                phone: '',
                service: '',
                message: ''
            })
        }, 3000)
    }

    const contactInfo = [
        {
            icon: Phone,
            title: 'Téléphone',
            details: '+33 1 23 45 67 89',
            description: 'Lun-Ven 9h-18h'
        },
        {
            icon: Mail,
            title: 'Email',
            details: 'contact@gadewin.com',
            description: 'Réponse sous 24h'
        },
        {
            icon: MapPin,
            title: 'Adresse',
            details: '123 Avenue des Champs-Élysées',
            description: '75008 Paris, France'
        }
    ]

    const services = [
        'Chatbots IA',
        'Voice AI avec Retell',
        'Agents IA',
        'Automatisation IA',
        'Consultation IA',
        'Autre'
    ]

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="max-w-md mx-auto px-4 text-center">
                    <div className="bg-white rounded-2xl shadow-lg p-8">
                        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">
                            Message envoyé !
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Merci pour votre message. Notre équipe vous contactera dans les plus brefs délais.
                        </p>
                        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                            <p className="text-green-800 text-sm">
                                <Clock className="h-4 w-4 inline mr-1" />
                                Temps de réponse moyen : 2 heures
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-primary-50 to-blue-50 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Contactez-nous
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                            Prêt à transformer votre entreprise avec l'IA ? Notre équipe d'experts est là
                            pour vous accompagner dans votre projet.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Form & Info */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="card">
                            <div className="flex items-center mb-6">
                                <MessageCircle className="h-6 w-6 text-primary-600 mr-2" />
                                <h2 className="text-2xl font-bold text-gray-900">
                                    Demandez un devis gratuit
                                </h2>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                            Nom complet *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                            placeholder="Votre nom"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                            placeholder="votre@email.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                                            Entreprise
                                        </label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                            placeholder="Nom de votre entreprise"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                            Téléphone
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                            placeholder="+33 1 23 45 67 89"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                                        Service d'intérêt
                                    </label>
                                    <select
                                        id="service"
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                    >
                                        <option value="">Sélectionnez un service</option>
                                        {services.map((service, index) => (
                                            <option key={index} value={service}>
                                                {service}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={5}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                        placeholder="Décrivez votre projet et vos besoins..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full btn-primary flex items-center justify-center space-x-2"
                                >
                                    <Send className="h-4 w-4" />
                                    <span>Envoyer le message</span>
                                </button>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-8">
                                Autres moyens de nous contacter
                            </h2>

                            <div className="space-y-6 mb-8">
                                {contactInfo.map((info, index) => {
                                    const IconComponent = info.icon
                                    return (
                                        <div key={index} className="flex items-start space-x-4">
                                            <div className="bg-primary-100 p-3 rounded-lg flex-shrink-0">
                                                <IconComponent className="h-6 w-6 text-primary-600" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                                                    {info.title}
                                                </h3>
                                                <p className="text-gray-900 font-medium mb-1">
                                                    {info.details}
                                                </p>
                                                <p className="text-gray-600 text-sm">
                                                    {info.description}
                                                </p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>

                            {/* FAQ */}
                            <div className="card">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    Questions fréquentes
                                </h3>
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">
                                            Combien de temps pour un projet ?
                                        </h4>
                                        <p className="text-gray-600 text-sm">
                                            Entre 2 et 8 semaines selon la complexité du projet.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">
                                            Proposez-vous un support ?
                                        </h4>
                                        <p className="text-gray-600 text-sm">
                                            Oui, support 24/7 inclus dans tous nos packages.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">
                                            Les consultations sont-elles gratuites ?
                                        </h4>
                                        <p className="text-gray-600 text-sm">
                                            Absolument ! Premier appel gratuit pour évaluer vos besoins.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact
