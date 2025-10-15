import { Link } from 'react-router-dom'
import { Bot, Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react'

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo et description */}
                    <div className="col-span-1 md:col-span-2">
                        <Link to="/" className="flex items-center space-x-2 mb-4">
                            <div className="bg-primary-600 p-2 rounded-lg">
                                <Bot className="h-6 w-6 text-white" />
                            </div>
                            <span className="text-xl font-bold">Gadewin</span>
                        </Link>
                        <p className="text-gray-300 mb-6 max-w-md">
                            Votre partenaire de confiance pour l'intégration de solutions d'intelligence artificielle
                            dans votre entreprise. Nous créons des expériences client exceptionnelles grâce à l'IA.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Github className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Liens rapides */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                                    Accueil
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                                    À propos
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center space-x-2 text-gray-300">
                                <Mail className="h-4 w-4" />
                                <span>contact@gadewin.com</span>
                            </li>
                            <li className="flex items-center space-x-2 text-gray-300">
                                <Phone className="h-4 w-4" />
                                <span>+33 1 23 45 67 89</span>
                            </li>
                            <li className="flex items-center space-x-2 text-gray-300">
                                <MapPin className="h-4 w-4" />
                                <span>Paris, France</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; 2024 Gadewin. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
