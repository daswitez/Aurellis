# Plan de Interfaz y Experiencia de Usuario (UI/UX) - Aurellis

Este plan describe la estrategia para llevar los principios de marca y reglas visuales a la capa de experiencia interactiva de **Aurellis**. Al diseñar para consultores independientes, creativos, desarrolladores y firmas boutique (nuestros principales *Buyer Personas*), la utilidad técnica debe acompañarse del máximo confort cognitivo posible. 

*Nota: Todas las decisiones de interfaz detalladas aquí responden directamente a la **Estrategia de Marketing y Posicionamiento** de la plataforma: vender estatus, tranquilidad financiera y productividad sin fricciones.*

## 1. Estrategia de Experiencia de Usuario (UX)

### 1.1. Revelación Progresiva Curada
La arquitectura de la información estará diseñada para ser silenciosa. Las interfaces de SaaS clásicas agobian con sidebars pesados y múltiples toolbars. En Aurellis:
- Solo expondremos el elemento necesario para la acción inmediata.
- Las opciones avanzadas o metadatos de prospectos estarán en estado "dormido" (escondidos de manera bella en modales laterales ligeros o expansores sutiles) hasta que el usuario demuestre intención.

### 1.2. Fricción Elegante (Control)
Mientras la mayoría del software busca reducir clics a cualquier costo (fomentando el caos), Aurellis utilizará fricciones intencionadas:
- Descartar listas de prospectos o enviar emails a múltiples contactos tendrá un paso de confirmación sereno y hermoso, confirmando calidad y revisión humana. "Estás a punto de enviar una comunicación clave, ¿todo luce impecable?".

### 1.3. Onboarding y Orientación por Diseño
No habrá tutores parpadeantes (pop-overs y modales con mascotas corporativas). 
- El sistema se explica por sí solo a través de *Empty States* (Estados vacíos) ilustrados con la máxima sofisticación y *Microcopy* de orientación inteligente en grises claros.

### 1.4. Flujo "Power User" (Orientado a la Productividad)
- Inclusión de un menú de comandos global discreto (activable vía "Cmd / Ctrl + K").
- Atajos para acciones repetitivas (ejemplo: tabular entre prospectos, clasificar rápidamente).
- Los profesionales prefieren el teclado porque simboliza velocidad y disciplina. *(Especialmente valorado por el segmento de Software Devs y Productores Audiovisuales).*

### 1.5. UX Orientada a la Sensibilidad y Estatus
- **Para Creativos y Diseñadores:** La plataforma debe operar como un canvas invisible. Cero distracciones. El diseño de Aurellis debe sentirse tan pulcro como sus propios portafolios.
- **Para Coaches y Consultores:** La validación de acciones (ej. antes de enviar emails) debe reforzar la sensación de "control de daños" para cuidar su reputación corporativa. La UX debe garantizarles que no van a enviar spam.

---

## 2. Estrategia de Interfaz de Usuario (UI)

### 2.1. Arquitectura Espacial (Respiración)
- El espacio negativo se usará como elemento principal de estructuración. En lugar de dibujar una caja alrededor de los datos, el aire mismo separará los módulos.
- La rejilla utilizará saltos de *paddings* de gran tamaño (32px, 64px, 96px) para dar ese peso "escultórico" demandado por la visión del producto.

### 2.2. Coreografía Dinámica del Contenido (GSAP)
El objetivo de las micro-interacciones es crear una "calidez intelectual".
- **Entrada de página (Page Enter):** Cascada suave e imperceptible donde los títulos aparecen en un mask-reveal y las tarjetas flotan hacia su posición con una transición de opacidad.
- **Notificaciones silenciadas (Toasts):** Aparecerán con un ligero deslizamiento en la base, usando tonos Muted Gold o Graphite, en vez de interrumpir la vista del centro de trabajo.

### 2.3. Tipografía como Componente Visual Activo
Se usará la tipografía Serif (Cormorant Garamond / Instrument Serif) como el ancla principal de atención para generar autoridad ("Trust"). Cuando un usuario entre al panel, un titular grande, con mucho aire y en Serif, establecerá inmediatamente el tono, empujando la interfaz técnica más abajo en la jerarquía. 

### 2.4. Integración del Copywriting y SEO
- **Microcopy:** Todos los estados vacíos y botones deben respetar la "Voz de Marca" (Brand Voice). Nada de urgencias falsas o botones fluorescentes. Tonos asépticos y elegantes.
- **Semántica Técnica (SEO):** La UI debe respetar un único `<h1>` por vista. La limpieza del DOM (usando Next.js sin dependencias redundantes) garantizará tiempos de carga instantáneos (Core Web Vitals), lo que refuerza la precepción de "Alta Gama" exigida en la estrategia de marketing.

---

## 3. Hoja de Ruta Ejecutiva (Siguientes Pasos UX/UI)

1. **Arquitectura de Flujos de Tareas (User Flows):**
   - Mapeo de la ruta: Identificación de prospecto > Generación de plantilla IA > Aprobación humana > Seguimiento (CRM).

2. **Wireframing Baja Fidelidad (Wireflows):**
   - Definir los contenedores principales. Testear si el "espacio vital" de la interfaz respira suficientemente antes de aplicar colores.

3. **Sistema de Componentes Maestros (Figma):**
   - Construcción atómica del *Aurellis UI Kit*. (Cards, Inputs de borde fino, Botones minimalistas, Jerarquía tipográfica configurada).

4. **Prototipado en Alta Fidelidad:**
   - Montaje del "Dashboard" (Centro de Mando) y de la "Vista de detalle de Prospecto".

5. **Afinación de *GSAP Easing*:**
   - Programación de las curvas de renderizado de animaciones en la prueba de concepto real para asegurar el ritmo "respirado" (power2.out, duración ~0.8s).
