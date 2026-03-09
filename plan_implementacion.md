# Plan de Implementación de "Aurellis" (Fase de Codificación)

Este documento detalla la hoja de ruta técnica para llevar el diseño y la arquitectura de **Aurellis** desde la conceptualización hasta la construcción real, respetando estrictamente la arquitectura visual elegante y las reglas modulares ya establecidas.

---

## Fase 1: Setup Técnico y Arquitectura Base
**Objetivo:** Establecer una base rigurosa y escalable que soporte el diseño sofisticado de las interacciones.
- **Stack Tecnológico Recomendado:**
  - **Framework:** Next.js (App Router) o React + Vite. (Next.js es ideal si se va a manejar SEO, SSR o lógica de API directa).
  - **Lenguaje:** TypeScript (indispensable para la robustez y disciplina que exige el código de una app premium).
  - **Estilos:** Tailwind CSS (optimizado y extendido con utilidades propias del Design System de Aurellis) + CSS Modules (para ruido o texturas).
  - **Animación:** GSAP y/o Framer Motion (GSAP recomendado por el control absoluto del "scroll smoothing" y *mask reveals*).
- **Acciones Inmediatas:**
  - Inicializar proyecto: `npx create-next-app@latest aurellis-platform`.
  - Configurar políticas de formato: ESLint y Prettier.
  - Generar el esqueleto modular de directorios:
    - `/apps` / `/src`
    - `/components` (UI elements base).
    - `/features` (Módulos de negocio: prospección, CRM, templates).
    - `/lib` (Integraciones, Prisma/Drizzle).

---

## Fase 2: Configuración del Motor de Diseño (Design Tokens)
**Objetivo:** Trasladar la paleta "susurro", la tipografía escultural y las reglas de espacio al motor de estilos.
- **Acciones:**
  - **Modificar `tailwind.config.ts`:**
    - Insertar colores corporativos: *Ivory Mist*, *Soft Linen*, *Stone Taupe*, *Graphite Ink*, *Muted Gold*, *Deep Olive*.
    - Ajustar jerarquía tipográfica base. (Fuentes: Instrument Serif / Inter).
    - Sobrescribir espaciados y establecer bordes (`12px`, `14px`, `20px` max).
    - Insertar texturas (ej: clase `.bg-noisy-linen`).
  - **Creación de Componentes Primitivos (Atomic Design):**
    - `Button.tsx` (Lógica clara y estados limpios, hover lifts a través de CSS puro).
    - `Typography.tsx` (Para el control de Headings serif y cuerpo de texto sans).
    - `Input.tsx`, `Table.tsx`, `Badge.tsx` y `Card.tsx` (con su sombra extra-liviana).

---

## Fase 3: Interfaz Principal (Shell Layout)
**Objetivo:** Construir el "cascarón" o área de trabajo central manteniendo el principio de mucho espacio negativo.
- **Acciones:**
  - Side-navigation o Top-navigation súper minimalista.
  - Implementación del atajo Command/Ctrl + K (Paleta de comandos).
  - Creación de Layout para páginas de contenido usando márgenes editoriales y restricciones de ancho máximo para leer cómodamente.

---

## Fase 4: Implementación de Módulos (Frontend)
El trabajo se divide en los 5 bloques planteados en la propuesta original:

1. **Dashboard y Flujo Activo (El CRM ligero):**
   - Construcción de las vistas del Board (Pipelines y tableros), con tipografía espaciosa. 
   - Gráficos integrados sutiles (Recharts o similar, rediseñados usando solo 2-3 colores sin grids agresivos).
2. **Centro de Prospección:**
   - Tablas de datos curadas (DataTables) con paginación limpia.
   - Vistas detalladas del prospecto en *Drawer* lateral deslizante.
3. **Editor de Plantillas & IA:**
   - Interfaz de previsualización (WYSIWYG sobrio). Textarea que parezca papel. 
   - Botón mágico (IA) usando animaciones sutiles (*Muted Gold* brillando ligeramente).
4. **Onboarding / Post-venta:**
   - Flujos modales limpios para envío de documentos.

---

## Fase 5: Conexión Backend e Integraciones APIs
**Objetivo:** Darle lógica a la interacción, guardado y análisis.
- **Bases de Datos & ORM:** Modelado en Prisma o Drizzle ORM hacia PostgreSQL (Supabase / Render). 
- **Módulo de Parsing/Scraping:** Microservicios Python o Node.js con Puppeteer / Cheerio para la lectura y recolección controlada.
- **Integración de IA:** Endpoints apuntando a la API de OpenAI/Anthropic para generar plantillas en función del contexto del perfil extraído.
- **Motor de Email:** Integración con proveedores OAuth para G-Suite/Outlook, o Resend/SendGrid para envíos automatizados desde los dominios verificados.
- **Autenticación (Auth):** Clientes conectados a través de Auth.js (NextAuth) o Clerk (con diseño modificado para Aurellis).

---

## Fase 6: Pulido Sensorial y Microinteracciones (GSAP Layer)
**Objetivo:** Implementar la "calidez intelectual" prometida en las reglas de diseño.
- **Acciones:**
  - Instalar plugins necesarios de GSAP.
  - Envolver componentes principales en transiciones de entrada. (Ej: Cuando cambia de ruta, el texto y las cartas hacen un pequeño _shift up_ + _fade-in_ editorial).
  - Asegurar la fluidez (60fps persistentes). Eliminar efectos ruidosos.

## Fase 7: Testing QA y Pruebas Alpha
- Audición técnica y validación del tono visual.
- Testing automatizado (Playwright/Cypress) en los flujos principales.
- Verificación del comportamiento del "Modo Oscuro" carbón/grafito.
