import { motion } from 'framer-motion';
import { BookOpen, Users, Trophy, Calendar, ChevronRight, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { noticiasData } from '../data/mockData';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const stats = [
    { icon: BookOpen, number: '1,200+', label: 'Estudiantes' },
    { icon: Users, number: '80+', label: 'Profesores' },
    { icon: Trophy, number: '50+', label: 'Premios Anuales' },
    { icon: GraduationCap, number: '98%', label: 'Titulación' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-colegio-rojo via-colegio-rojoOscuro to-red-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-colegio-rojoOscuro/50"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48"
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
              className="w-24 h-24 bg-colegio-amarillo rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <span className="text-colegio-rojo font-bold text-4xl">L</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Liceo Bicentenario
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-colegio-amarillo">
              Excelencia Académica desde 1950
            </p>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-gray-200">
              Formamos líderes con valores, preparándolos para los desafíos del futuro 
              con una educación de calidad y compromiso social.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/nosotros"
                className="bg-colegio-amarillo text-colegio-rojo px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-lg"
              >
                Conoce Más
              </Link>
              <Link
                to="/login"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-colegio-rojo transition-all transform hover:scale-105"
              >
                Portal Estudiantes
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#F5F5F5"/>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 bg-colegio-gris"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <stat.icon className="w-12 h-12 text-colegio-rojo mx-auto mb-4" />
                <p className="text-4xl font-bold text-colegio-rojo mb-2">{stat.number}</p>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* About Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl font-bold text-colegio-rojo mb-6">
                Nuestra Historia
              </h2>
              <p className="text-gray-700 text-lg mb-6">
                Fundado en 1950, el Liceo Bicentenario ha sido pionero en la educación 
                chilena, adaptándose a los nuevos tiempos sin perder sus valores fundamentales.
              </p>
              <p className="text-gray-700 text-lg mb-8">
                Nuestro compromiso es formar ciudadanos críticos, responsables y comprometidos 
                con el desarrollo de Chile.
              </p>
              <Link
                to="/nosotros"
                className="inline-flex items-center text-colegio-rojo font-semibold text-lg hover:text-colegio-rojoOscuro transition-colors"
              >
                Saber más <ChevronRight className="w-5 h-5 ml-1" />
              </Link>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-colegio-amarillo rounded-2xl transform rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600"
                alt="Estudiantes"
                className="relative rounded-2xl shadow-xl w-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Noticias Preview */}
      <section className="py-20 bg-colegio-gris">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-colegio-rojo mb-4">Últimas Noticias</h2>
            <p className="text-gray-600 text-lg">Mantente informado sobre lo que sucede en nuestro liceo</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {noticiasData.slice(0, 3).map((noticia, index) => (
              <motion.article
                key={noticia.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(noticia.fecha).toLocaleDateString('es-ES', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                  <h3 className="text-xl font-bold text-colegio-rojo mb-3">{noticia.titulo}</h3>
                  <p className="text-gray-600 mb-4">{noticia.resumen}</p>
                  <Link
                    to="/noticias"
                    className="text-colegio-rojo font-semibold hover:text-colegio-rojoOscuro inline-flex items-center"
                  >
                    Leer más <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/noticias"
              className="inline-block bg-colegio-rojo text-white px-8 py-3 rounded-lg font-semibold hover:bg-colegio-rojoOscuro transition-colors"
            >
              Ver todas las noticias
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-colegio-rojo to-colegio-rojoOscuro text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">¿Listo para ser parte de nuestra comunidad?</h2>
            <p className="text-xl mb-8 text-colegio-amarillo">
              Únete a la familia del Liceo Bicentenario y forma parte de nuestra historia de excelencia.
            </p>
            <Link
              to="/contacto"
              className="inline-block bg-colegio-amarillo text-colegio-rojo px-10 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-all transform hover:scale-105"
            >
              Contáctanos
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
