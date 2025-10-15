import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Bot, Phone } from 'lucide-react'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const location = useLocation()

    const navigation = [
        { name: 'Accueil', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'À propos', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ]

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center space-x-2">
                            <div className="bg-primary-600 p-2 rounded-lg">
                                <Bot className="h-6 w-6 text-white" />
                            </div>
                            <span className="text-xl font-bold text-gray-900">Gadewin</span>
                        </Link>
                    </div>

                    {/* Navigation Desktop */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navigation.map((item) => {
                                const isActive = location.pathname === item.href
                                return (
                                    <Link
                                        key={item.name}
                                        to={item.href}
                                        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive
                                                ? 'bg-primary-100 text-primary-700'
                                                : 'text-gray-600 hover:text-primary-600 hover:bg-gray-100'
                                            }`}
                                    >
                                        {item.name}
                                    </Link>
                                )
                            })}
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <Link
                            to="/contact"
                            className="btn-primary flex items-center space-x-2"
                        >
                            <Phone className="h-4 w-4" />
                            <span>Nous contacter</span>
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-primary-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
                        >
                            {isMenuOpen ? (
                                <X className="block h-6 w-6" />
                            ) : (
                                <Menu className="block h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                            {navigation.map((item) => {
                                const isActive = location.pathname === item.href
                                return (
                                    <Link
                                        key={item.name}
                                        to={item.href}
                                        className={`block px-3 py-2 rounded-md text-base font-medium ${isActive
                                                ? 'bg-primary-100 text-primary-700'
                                                : 'text-gray-600 hover:text-primary-600 hover:bg-gray-100'
                                            }`}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                )
                            })}
                            <Link
                                to="/contact"
                                className="block px-3 py-2 rounded-md text-base font-medium text-white bg-primary-600 hover:bg-primary-700 mt-4"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Nous contacter
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    )
}

export default Header
