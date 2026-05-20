import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Award, Target, Heart, Users } from 'lucide-react';
import { directivosData } from '../data/mockData';

const Nosotros = () => {
  const valores = [
    { icon: Award, titulo: 'Excelencia', descripcion: 'Buscamos la máxima calidad en todos nuestros procesos educativos.' },
    { icon: Target, titulo: 'Responsabilidad', descripcion: 'Fomentamos el compromiso con las tareas y obligaciones.' },
    { icon: Heart, titulo: 'Respeto', descripcion: 'Valoramos la diversidad y promovemos la convivencia armónica.' },
    { icon: Users, titulo: 'Solidaridad', descripcion: 'Desarrollamos la empatía y el apoyo mutuo en nuestra comunidad.' },
  ];

  return (
    <div className="min-h-screen bg-colegio-gris">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-colegio-rojo via-colegio-rojoOscuro to-red-900 text-white py-24">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1920')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Nosotros</h1>
            <p className="text-xl md:text-2xl text-colegio-amarillo max-w-3xl mx-auto">
              Conoce la historia, misión y visión de nuestro Liceo Bicentenario
            </p>
          </motion.div>
        </div>
      </section>

      {/* Historia */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-colegio-rojo mb-6">Nuestra Historia</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Fundado el 15 de marzo de 1950, el Liceo Bicentenario nació con el sueño 
                  de proporcionar educación de calidad a los jóvenes de Santiago.
                </p>
                <p>
                  A lo largo de más de 70 años, hemos formado generaciones de líderes que 
                  han contribuido al desarrollo de Chile en diversas áreas: ciencia, arte, 
                  deporte y servicio público.
                </p>
                <p>
                  En 2010, fuimos reconocidos como Liceo Bicentenario por el Ministerio de 
                  Educación, sello que certifica nuestra excelencia académica y compromiso 
                  con la equidad educativa.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-colegio-amarillo rounded-2xl transform rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=600"
                alt="Historia del Liceo"
                className="relative rounded-2xl shadow-xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-20 bg-colegio-gris">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-colegio-rojo to-colegio-rojoOscuro text-white rounded-2xl p-8 shadow-xl"
            >
              <div className="w-16 h-16 bg-colegio-amarillo rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-colegio-rojo" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Misión</h2>
              <p className="text-lg leading-relaxed">
                Formar personas íntegras, críticas y responsables, capaces de contribuir 
                activamente al desarrollo de la sociedad chilena, mediante una educación 
                de excelencia que promueva valores democráticos, el respeto por la diversidad 
                y el compromiso con el bien común.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-xl border-l-4 border-colegio-amarillo"
            >
              <div className="w-16 h-16 bg-colegio-rojo rounded-full flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-colegio-rojo mb-4">Visión</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ser reconocidos como una institución educativa líder en Chile, referente 
                en innovación pedagógica, formación valórica y excelencia académica, donde 
                todos los estudiantes desarrollen su máximo potencial y se conviertan en 
                agentes de cambio positivo para la sociedad.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-colegio-rojo mb-4">Nuestros Valores</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Los principios que guían nuestra acción educativa diaria
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valores.map((valor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-colegio-gris rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-colegio-rojo rounded-full flex items-center justify-center mx-auto mb-4">
                  <valor.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-colegio-rojo mb-3">{valor.titulo}</h3>
                <p className="text-gray-600">{valor.descripcion}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipo Directivo */}
      <section className="py-20 bg-colegio-gris">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-colegio-rojo mb-4">Equipo Directivo</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Conoce a quienes lideran nuestro proyecto educativo
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {directivosData.map((directivo, index) => (
              <motion.div
                key={directivo.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={directivo.imagen}
                    alt={directivo.nombre}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-colegio-rojo mb-2">{directivo.nombre}</h3>
                  <p className="text-colegio-amarillo font-semibold">{directivo.cargo}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-20 bg-gradient-to-r from-colegio-rojo to-colegio-rojoOscuro text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">¿Quieres ser parte de nuestra familia?</h2>
          <p className="text-xl mb-8 text-colegio-amarillo">
            Únete a la comunidad del Liceo Bicentenario y forma parte de nuestra historia de excelencia.
          </p>
          <Link
            to="/contacto"
            className="inline-block bg-colegio-amarillo text-colegio-rojo px-10 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-all transform hover:scale-105"
          >
            Contáctanos
          </Link>
        </div>
      </motion.section>

      {/* Back Link */}
      <div className="py-8 bg-white text-center">
        <Link
          to="/"
          className="inline-flex items-center text-colegio-rojo font-semibold text-lg hover:text-colegio-rojoOscuro transition-colors"
        >
          <ChevronRight className="w-5 h-5 mr-1 rotate-180" />
          Volver al inicio
        </Link>
      </div>
    </div>
  );
};

export default Nosotros;
