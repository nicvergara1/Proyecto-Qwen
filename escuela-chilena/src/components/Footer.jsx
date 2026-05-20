import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-gradient-to-r from-colegio-rojoOscuro to-colegio-rojo text-white mt-auto"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Información del Colegio */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-colegio-amarillo rounded-full flex items-center justify-center">
                <span className="text-colegio-rojo font-bold text-xl">L</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">Liceo Bicentenario</h3>
                <p className="text-xs text-colegio-amarillo">Excelencia Académica</p>
              </div>
            </div>
            <p className="text-sm text-gray-200">
              Formando líderes con valores y excelencia académica desde 1950.
            </p>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-colegio-amarillo">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-colegio-amarillo transition-colors">Inicio</a></li>
              <li><a href="/nosotros" className="hover:text-colegio-amarillo transition-colors">Nosotros</a></li>
              <li><a href="/noticias" className="hover:text-colegio-amarillo transition-colors">Noticias</a></li>
              <li><a href="/contacto" className="hover:text-colegio-amarillo transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-colegio-amarillo">Contacto</h4>
            <ul className="space-y-2 text-sm text-gray-200">
              <li>Av. Bernardo O'Higgins 1234, Santiago</li>
              <li>+56 2 2345 6789</li>
              <li>contacto@liceobicanterario.cl</li>
              <li>Lunes a Viernes: 8:00 - 18:00 hrs</li>
            </ul>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-300">
              © 2024 Liceo Bicentenario. Todos los derechos reservados.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-300 hover:text-colegio-amarillo transition-colors">
                Facebook
              </a>
              <a href="#" className="text-gray-300 hover:text-colegio-amarillo transition-colors">
                Instagram
              </a>
              <a href="#" className="text-gray-300 hover:text-colegio-amarillo transition-colors">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
