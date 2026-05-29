# BlazorXpanduApp - Firma Electrónica y Análisis IA con XpandU

Aplicación Blazor Server con Syncfusion para firma electrónica, captura de documentos responsive y análisis de imágenes con IA usando XpandU.

## Características Principales

### ✍️ Firma Electrónica
- Componente **SignaturePad** de Syncfusion
- Soporte para mouse, touchpad y pantallas táctiles
- Exportación de firma en formato PNG (base64)
- Limpieza y guardado de firmas

### 📷 Captura de Documentos Responsive
- **Detección automática** del tipo de dispositivo (móvil/desktop)
- Componente **Camera** de Syncfusion
- Ajuste automático de tamaño según el dispositivo
- Acceso a cámara nativa en móviles
- Previsualización de fotos capturadas

### 🤖 Análisis con IA (XpandU)
- Integración con **XpandU API** para análisis de imágenes
- Soporte para modelos multimodales (texto + imagen)
- Visualización de razonamiento interno (thinking)
- Upload de imágenes para análisis
- Prompt personalizado para cada análisis

## Requisitos

- .NET 8.0 SDK
- Navegador moderno con soporte para WebAssembly
- Acceso a cámara (para funcionalidad de captura de documentos)

## Instalación

1. **Clonar o copiar el proyecto**
   ```bash
   cd /workspace/BlazorXpanduApp
   ```

2. **Restaurar paquetes NuGet**
   ```bash
   dotnet restore
   ```

3. **Ejecutar la aplicación**
   ```bash
   dotnet run
   ```

4. **Abrir en el navegador**
   - HTTP: http://localhost:5000
   - HTTPS: https://localhost:5001

## Estructura del Proyecto

```
BlazorXpanduApp/
├── Components/
│   ├── App.razor              # Componente raíz
│   ├── Routes.razor           # Enrutamiento
│   ├── Layout/
│   │   ├── MainLayout.razor   # Layout principal
│   │   └── NavMenu.razor      # Menú de navegación
│   └── Pages/
│       ├── Home.razor         # Página de inicio
│       ├── Firma.razor        # Firma electrónica
│       ├── Documento.razor    # Captura de documentos
│       └── Analisis.razor     # Análisis con IA
├── Services/
│   └── XpanduService.cs       # Servicio para XpandU API
├── wwwroot/
│   ├── css/
│   │   └── site.css           # Estilos personalizados
│   └── images/                # Imágenes estáticas
├── Program.cs                 # Punto de entrada
└── BlazorXpanduApp.csproj     # Archivo de proyecto
```

## Configuración de XpandU

La aplicación viene preconfigurada con las credenciales de XpandU:

- **Endpoint**: `https://api.xpandu.io/serve/86b3c1ac-d1ca-4920-a1b4-926da7d403c4/v1/chat/completions`
- **API Key**: `2ed5c52392dda56cc87b04352f1d988f0a8b57f841b3712e111463d96f0f0740`

Para cambiar las credenciales, edita `Services/XpanduService.cs`.

## Uso de la Aplicación

### 1. Firma Electrónica
1. Navega a "Firma Electrónica"
2. Dibuja tu firma usando el mouse o pantalla táctil
3. Haz clic en "Guardar Firma" para ver la previsualización
4. Usa "Limpiar" para comenzar de nuevo

### 2. Capturar Documento
1. Navega a "Capturar Documento"
2. La aplicación detecta automáticamente si estás en móvil o desktop
3. Haz clic en "Activar Cámara"
4. Toma una foto del documento
5. Opcional: Analiza la imagen con IA

### 3. Análisis con IA
1. Navega a "Análisis IA"
2. Sube una imagen o usa una capturada previamente
3. Escribe instrucciones para la IA (prompt)
4. Haz clic en "Analizar con IA"
5. Revisa el resultado y el proceso de razonamiento

## Dependencias

- **Syncfusion.Blazor** (24.1.41) - Componentes UI
- **Syncfusion.Blazor.SignaturePad** - Pad de firma
- **Syncfusion.Blazor.Camera** - Acceso a cámara
- **Newtonsoft.Json** - Procesamiento JSON
- **.NET 8.0** - Framework base

## Responsive Design

La aplicación es completamente responsive:

- **Desktop (>768px)**: Sidebar fijo, layout horizontal
- **Móvil (≤768px)**: Menú horizontal scrollable, layout vertical
- **Cámara**: Tamaño ajustable según dispositivo
- **Tarjetas**: Grid adaptable (auto-fit)

## Notas Importantes

1. **Permisos de cámara**: El navegador solicitará permiso para acceder a la cámara
2. **HTTPS requerido**: Algunas funcionalidades requieren contexto seguro (HTTPS)
3. **Base64**: Las imágenes se manejan en base64 para compatibilidad
4. **XpandU API**: Requiere conexión a internet para el análisis con IA

## Licencia

Este proyecto es de demostración y uso educativo.

## Soporte

Para problemas con XpandU:
- Web: https://xpandu.io
- Email: contacto@xpandu.io

Para problemas con Syncfusion:
- Documentación: https://www.syncfusion.com/blazor-components
