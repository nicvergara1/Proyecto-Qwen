import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Calendar, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { contactoData } from '../data/mockData';

const Contacto = () => {
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
          <h1 className="text-5xl font-bold text-colegio-rojo mb-4">Contacto</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Contáctanos a través de cualquiera de nuestros canales.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Información de Contacto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-colegio-rojo to-colegio-rojoOscuro p-6">
                <h2 className="text-2xl font-bold text-white">Información de Contacto</h2>
              </div>
              
              <div className="p-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-colegio-amarillo rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-colegio-rojo" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Dirección</h3>
                    <p className="text-gray-600">{contactoData.direccion}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-colegio-amarillo rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-colegio-rojo" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Teléfono</h3>
                    <p className="text-gray-600">{contactoData.telefono}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-colegio-amarillo rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-colegio-rojo" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                    <p className="text-gray-600">{contactoData.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-colegio-amarillo rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-colegio-rojo" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Horario de Atención</h3>
                    <p className="text-gray-600">{contactoData.horario}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mapa (placeholder) */}
            <div className="mt-8 bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="w-12 h-12 mx-auto mb-2" />
                  <p>Mapa de ubicación</p>
                  <p className="text-sm">Av. Bernardo O'Higgins 1234, Santiago</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Formulario de Contacto */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-colegio-rojo to-colegio-rojoOscuro p-6">
                <h2 className="text-2xl font-bold text-white">Envíanos un Mensaje</h2>
              </div>
              
              <div className="p-8">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre Completo
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-colegio-rojo focus:border-transparent transition-all"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-colegio-rojo focus:border-transparent transition-all"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Asunto
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-colegio-rojo focus:border-transparent transition-all">
                      <option>Selecciona un asunto</option>
                      <option>Información General</option>
                      <option>Matrícula</option>
                      <option>Apoderados</option>
                      <option>Otros</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mensaje
                    </label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-colegio-rojo focus:border-transparent transition-all resize-none"
                      placeholder="Escribe tu mensaje aquí..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-colegio-rojo to-colegio-rojoOscuro text-white py-3 rounded-lg font-semibold hover:from-colegio-rojoOscuro hover:to-colegio-rojo transition-all transform hover:scale-105"
                  >
                    Enviar Mensaje
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Departamentos */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-colegio-rojo text-center mb-8">
            Departamentos
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { nombre: 'Inspectoría', email: 'inspector@liceo.cl', telefono: '+56 2 2345 6790' },
              { nombre: 'Unidad Técnico Pedagógica', email: 'utp@liceo.cl', telefono: '+56 2 2345 6791' },
              { nombre: 'Orientación', email: 'orientacion@liceo.cl', telefono: '+56 2 2345 6792' },
            ].map((depto, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold text-colegio-rojo mb-4">{depto.nombre}</h3>
                <div className="space-y-2 text-gray-600">
                  <p className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    {depto.email}
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    {depto.telefono}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
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

export default Contacto;
