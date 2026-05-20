import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, ChevronRight } from 'lucide-react';
import { noticiasData } from '../data/mockData';

const Noticias = () => {
  return (
    <div className="min-h-screen bg-colegio-gris py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-colegio-rojo mb-4">Noticias</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Mantente informado sobre todas las actividades y acontecimientos de nuestro liceo
          </p>
        </motion.div>

        {/* Lista de Noticias */}
        <div className="space-y-8">
          {noticiasData.map((noticia, index) => (
            <motion.article
              key={noticia.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="grid md:grid-cols-3 gap-0">
                {/* Imagen */}
                <div className="md:col-span-1 bg-gradient-to-br from-colegio-rojo to-colegio-rojoOscuro flex items-center justify-center p-8">
                  <Calendar className="w-24 h-24 text-colegio-amarillo/50" />
                </div>

                {/* Contenido */}
                <div className="md:col-span-2 p-8">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(noticia.fecha).toLocaleDateString('es-ES', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                  
                  <h2 className="text-3xl font-bold text-colegio-rojo mb-4">
                    {noticia.titulo}
                  </h2>
                  
                  <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                    {noticia.contenido}
                  </p>

                  <div className="flex items-center gap-4">
                    <button className="bg-colegio-rojo text-white px-6 py-3 rounded-lg font-semibold hover:bg-colegio-rojoOscuro transition-colors">
                      Compartir
                    </button>
                    <button className="border-2 border-colegio-rojo text-colegio-rojo px-6 py-3 rounded-lg font-semibold hover:bg-colegio-rojo hover:text-white transition-colors">
                      Descargar PDF
                    </button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-colegio-rojo to-colegio-rojoOscuro rounded-2xl p-8 md:p-12 text-white"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Suscríbete a Nuestro Boletín</h2>
            <p className="text-colegio-amarillo mb-8 max-w-2xl mx-auto">
              Recibe las últimas noticias y actualizaciones del liceo directamente en tu correo electrónico.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="flex-1 px-6 py-4 rounded-lg text-gray-800 focus:ring-2 focus:ring-colegio-amarillo focus:outline-none"
              />
              <button
                type="submit"
                className="bg-colegio-amarillo text-colegio-rojo px-8 py-4 rounded-lg font-bold hover:bg-yellow-400 transition-colors"
              >
                Suscribirse
              </button>
            </form>
          </div>
        </motion.section>

        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            to="/"
            className="inline-flex items-center text-colegio-rojo font-semibold text-lg hover:text-colegio-rojoOscuro transition-colors"
          >
            <ChevronRight className="w-5 h-5 mr-1 rotate-180" />
            Volver al inicio
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Noticias;
