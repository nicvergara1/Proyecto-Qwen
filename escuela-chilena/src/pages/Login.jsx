import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { User, Lock, AlertCircle, Loader2 } from 'lucide-react';

const Login = () => {
  const [rut, setRut] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login, loading } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!rut || !password) {
      setError('Por favor completa todos los campos');
      return;
    }

    const result = await login(rut, password);

    if (result.success) {
      navigate('/materiales');
    } else {
      setError(result.message);
    }
  };

  // Formato de RUT chileno
  const handleRutChange = (e) => {
    let value = e.target.value.replace(/[^0-9kK]/g, '');
    
    if (value.length > 1) {
      value = value.slice(0, -1) + '-' + value.slice(-1);
    }
    
    setRut(value.toUpperCase());
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-colegio-rojo via-colegio-rojoOscuro to-red-900 flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-colegio-rojo to-colegio-rojoOscuro px-8 py-6 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="w-16 h-16 bg-colegio-amarillo rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <span className="text-colegio-rojo font-bold text-3xl">L</span>
            </motion.div>
            <h1 className="text-2xl font-bold text-white mb-2">Portal Estudiantes</h1>
            <p className="text-colegio-amarillo text-sm">Liceo Bicentenario</p>
          </div>

          {/* Form */}
          <div className="px-8 py-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* RUT Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  RUT
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    value={rut}
                    onChange={handleRutChange}
                    placeholder="12345678-9"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-colegio-rojo focus:border-transparent transition-all"
                    maxLength={12}
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Contraseña
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-colegio-rojo focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg"
                >
                  <AlertCircle className="w-5 h-5" />
                  <span className="text-sm">{error}</span>
                </motion.div>
              )}

              {/* Info Box */}
              <div className="bg-colegio-amarillo/20 border border-colegio-amarillo rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong className="text-colegio-rojo">Credenciales de prueba:</strong>
                </p>
                <p className="text-sm text-gray-600 mt-1">RUT: 12345678-9</p>
                <p className="text-sm text-gray-600">Contraseña: 1234</p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-colegio-rojo to-colegio-rojoOscuro text-white py-3 rounded-lg font-semibold hover:from-colegio-rojoOscuro hover:to-colegio-rojo transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Iniciando sesión...
                  </>
                ) : (
                  'Ingresar'
                )}
              </button>
            </form>

            {/* Links */}
            <div className="mt-6 text-center">
              <Link
                to="/"
                className="text-sm text-gray-600 hover:text-colegio-rojo transition-colors"
              >
                ← Volver al inicio
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Text */}
        <p className="text-center text-white/70 text-sm mt-6">
          ¿Problemas para ingresar? Contacta a inspectoría
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
