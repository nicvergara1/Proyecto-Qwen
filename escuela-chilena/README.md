# Liceo Bicentenario - Portal Escolar

Aplicación web moderna para un colegio chileno, desarrollada con **React**, **Tailwind CSS** y **Framer Motion** para animaciones fluidas.

## 🎨 Características

- **Diseño Moderno**: Interfaz atractiva con la paleta de colores del colegio (Rojo, Amarillo y Blanco)
- **Animaciones Fluidas**: Implementadas con Framer Motion
- **Responsive**: Adaptable a dispositivos móviles y desktop
- **Login de Estudiantes**: Sistema de autenticación mockup
- **Materiales de Estudio**: Sección protegida para estudiantes logueados
- **Páginas Informativas**: Inicio, Nosotros, Noticias y Contacto

## 🚀 Tecnologías Utilizadas

- **React 19** - Framework de UI
- **Vite** - Build tool y dev server
- **Tailwind CSS 4** - Estilos utilitarios
- **Framer Motion** - Animaciones
- **React Router DOM** - Navegación
- **Lucide React** - Iconos

## 📁 Estructura del Proyecto

```
escuela-chilena/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Barra de navegación
│   │   └── Footer.jsx       # Pie de página
│   ├── context/
│   │   └── AuthContext.jsx  # Contexto de autenticación
│   ├── data/
│   │   └── mockData.js      # Datos mock para demostración
│   ├── pages/
│   │   ├── Home.jsx         # Página principal
│   │   ├── Login.jsx        # Login de estudiantes
│   │   ├── Materiales.jsx   # Materiales de estudio (protegido)
│   │   ├── Nosotros.jsx     # Información del colegio
│   │   ├── Noticias.jsx     # Noticias y anuncios
│   │   └── Contacto.jsx     # Formulario de contacto
│   ├── App.jsx              # Componente principal
│   └── index.css            # Estilos globales
├── tailwind.config.js       # Configuración de Tailwind
└── package.json
```

## 🛠️ Instalación y Ejecución

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Pasos

1. **Instalar dependencias**
```bash
cd escuela-chilena
npm install
```

2. **Ejecutar en modo desarrollo**
```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

3. **Build para producción**
```bash
npm run build
```

## 👤 Credenciales de Demostración

Para acceder al portal de estudiantes:

- **RUT**: `12345678-9`
- **Contraseña**: `1234`

También funciona:
- **RUT**: `98765432-1`
- **Contraseña**: `1234`

## 🎯 Páginas Disponibles

| Ruta | Descripción | Acceso |
|------|-------------|--------|
| `/` | Página de inicio | Público |
| `/nosotros` | Historia, misión, visión y equipo directivo | Público |
| `/noticias` | Noticias y anuncios del liceo | Público |
| `/contacto` | Formulario de contacto e información | Público |
| `/login` | Login para estudiantes | Público |
| `/materiales` | Materiales de estudio | **Solo logueados** |

## 🎨 Paleta de Colores

La aplicación utiliza los colores institucionales del colegio:

- **Rojo Principal**: `#C41E3A`
- **Rojo Oscuro**: `#8B0000`
- **Amarillo**: `#FFD700`
- **Amarillo Claro**: `#FFF8DC`
- **Blanco**: `#FFFFFF`
- **Gris**: `#F5F5F5`

## 🔮 Preparado para SQL Server

El proyecto está estructurado para facilitar la implementación con una base de datos SQL Server en el futuro:

- Los datos actuales están en `src/data/mockData.js`
- El contexto de autenticación (`AuthContext.jsx`) puede ser conectado a una API
- La estructura de componentes facilita la integración con backend

### Próximos Pasos para Implementación con BD

1. Crear API REST o GraphQL
2. Reemplazar `mockData.js` con llamadas a la API
3. Conectar `AuthContext` con endpoints de autenticación reales
4. Implementar middleware de seguridad
5. Configurar conexión a SQL Server

## 📱 Capturas

La aplicación incluye:

- ✅ Navbar responsive con menú móvil
- ✅ Hero section con animaciones
- ✅ Sección de estadísticas
- ✅ Cards de noticias con hover effects
- ✅ Formulario de login con validación
- ✅ Dashboard de materiales con filtros
- ✅ Footer informativo

## 📄 Licencia

Proyecto de demostración para fines educativos.

---

**Desarrollado con ❤️ para la educación chilena**
