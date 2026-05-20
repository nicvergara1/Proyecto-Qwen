import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Nosotros', path: '/nosotros' },
    { name: 'Noticias', path: '/noticias' },
    { name: 'Contacto', path: '/contacto' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-colegio-rojo to-colegio-rojoOscuro text-white shadow-lg sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-3"
            >
              <div className="w-10 h-10 bg-colegio-amarillo rounded-full flex items-center justify-center">
                <span className="text-colegio-rojo font-bold text-xl">L</span>
              </div>
              <div>
                <h1 className="text-xl font-bold">Liceo Bicentenario</h1>
                <p className="text-xs text-colegio-amarillo">Excelencia Académica</p>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="hover:text-colegio-amarillo transition-colors duration-300 font-medium"
              >
                {link.name}
              </Link>
            ))}
            
            {user ? (
              <div className="flex items-center space-x-4">
                <Link
                  to="/materiales"
                  className="bg-colegio-amarillo text-colegio-rojo px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
                >
                  Materiales
                </Link>
                <div className="flex items-center space-x-2">
                  <User className="w-5 h-5" />
                  <span className="text-sm">{user.nombre}</span>
                  <button
                    onClick={logout}
                    className="ml-2 text-sm hover:text-colegio-amarillo"
                  >
                    Salir
                  </button>
                </div>
              </div>
            ) : (
              <Link
                to="/login"
                className="bg-colegio-amarillo text-colegio-rojo px-6 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-all transform hover:scale-105"
              >
                Login Estudiantes
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-colegio-amarillo"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-colegio-rojoOscuro"
        >
          <div className="px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block hover:text-colegio-amarillo transition-colors"
              >
                {link.name}
              </Link>
            ))}
            {user ? (
              <>
                <Link
                  to="/materiales"
                  onClick={() => setIsOpen(false)}
                  className="block bg-colegio-amarillo text-colegio-rojo px-4 py-2 rounded-lg font-semibold"
                >
                  Materiales
                </Link>
                <div className="text-sm">
                  <p>{user.nombre}</p>
                  <button onClick={logout} className="text-colegio-amarillo mt-1">
                    Salir
                  </button>
                </div>
              </>
            ) : (
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="block bg-colegio-amarillo text-colegio-rojo px-4 py-2 rounded-lg font-semibold text-center"
              >
                Login Estudiantes
              </Link>
            )}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
