import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return context;
};

// Mock de usuarios para la demostración
const mockUsers = [
  { 
    rut: '12345678-9', 
    password: '1234', 
    nombre: 'Juan Pérez', 
    grado: '4° Medio A',
    email: 'juan.perez@colegio.cl'
  },
  { 
    rut: '98765432-1', 
    password: '1234', 
    nombre: 'María González', 
    grado: '3° Medio B',
    email: 'maria.gonzalez@colegio.cl'
  },
];

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const login = async (rut, password) => {
    setLoading(true);
    // Simular llamada a API
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const foundUser = mockUsers.find(u => u.rut === rut && u.password === password);
    
    if (foundUser) {
      const { password: _, ...userWithoutPassword } = foundUser;
      setUser(userWithoutPassword);
      localStorage.setItem('user', JSON.stringify(userWithoutPassword));
      setLoading(false);
      return { success: true };
    } else {
      setLoading(false);
      return { success: false, message: 'RUT o contraseña inválidos' };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  // Verificar si hay sesión al cargar
  useState(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  });

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
