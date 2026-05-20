import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { Navigate, Link } from 'react-router-dom';
import { FileText, Download, Calendar, BookOpen, Filter } from 'lucide-react';
import { materialesData } from '../data/mockData';
import { useState } from 'react';

const Materiales = () => {
  const { user } = useAuth();
  const [filtroMateria, setFiltroMateria] = useState('Todos');

  // Si no hay usuario logueado, redirigir al login
  if (!user) {
    return <Navigate to="/login" />;
  }

  const materias = ['Todos', ...new Set(materialesData.map(m => m.materia))];

  const materialesFiltrados = filtroMateria === 'Todos'
    ? materialesData
    : materialesData.filter(m => m.materia === filtroMateria);

  return (
    <div className="min-h-screen bg-colegio-gris py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="bg-gradient-to-r from-colegio-rojo to-colegio-rojoOscuro rounded-2xl p-8 text-white shadow-xl">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h1 className="text-3xl font-bold mb-2">Materiales de Estudio</h1>
                <p className="text-colegio-amarillo">
                  Bienvenido, {user.nombre} - {user.grado}
                </p>
              </div>
              <Link
                to="/"
                className="bg-colegio-amarillo text-colegio-rojo px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
              >
                Volver al Inicio
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Filtros */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-4 flex-wrap">
              <Filter className="w-5 h-5 text-colegio-rojo" />
              <span className="font-semibold text-gray-700">Filtrar por materia:</span>
              <div className="flex gap-2 flex-wrap">
                {materias.map((materia) => (
                  <button
                    key={materia}
                    onClick={() => setFiltroMateria(materia)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      filtroMateria === materia
                        ? 'bg-colegio-rojo text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {materia}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Lista de Materiales */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {materialesFiltrados.map((material, index) => (
            <motion.article
              key={material.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
            >
              {/* Card Header */}
              <div className="bg-gradient-to-r from-colegio-rojo to-colegio-rojoOscuro p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-colegio-amarillo rounded-lg flex items-center justify-center">
                      <FileText className="w-6 h-6 text-colegio-rojo" />
                    </div>
                    <div>
                      <span className="text-xs text-colegio-amarillo font-semibold uppercase">
                        {material.materia}
                      </span>
                      <p className="text-white text-sm">{material.grado}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-colegio-rojo transition-colors">
                  {material.titulo}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {material.descripcion}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(material.fecha).toLocaleDateString('es-ES')}
                  </div>
                  <button className="flex items-center gap-2 bg-colegio-rojo text-white px-4 py-2 rounded-lg hover:bg-colegio-rojoOscuro transition-colors text-sm font-medium">
                    <Download className="w-4 h-4" />
                    Descargar
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 bg-white rounded-xl shadow-lg p-8"
        >
          <div className="flex items-start gap-4">
            <BookOpen className="w-8 h-8 text-colegio-rojo flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                ¿Cómo usar los materiales?
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Selecciona la materia que necesitas estudiar</li>
                <li>• Haz clic en "Descargar" para obtener el archivo PDF</li>
                <li>• Revisa la fecha de publicación para asegurar que tienes la versión más reciente</li>
                <li>• Si tienes dudas, consulta con tu profesor en clases</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Materiales;
