# Diseño de Interfaz y Experiencia (UI/UX) - Plataforma Aurellis

Este documento establece la visión, arquitectura visual y principios de interacción para la plataforma principal de Aurellis (Dashboard, CRM, Gestión de Leads, Aprobaciones y Contratos). El objetivo es trasladar la estética *"Premium Tech"* de la landing page a un entorno de trabajo altamente funcional, intuitivo y estéticamente impecable.

## 1. Principios de Diseño Fundamentales

1.  **Claridad sobre Densidad (Menos es Más):** La plataforma debe evitar abrumar al usuario con datos innecesarios. Se utilizará el espacio en blanco (negative space) de manera generosa para guiar la vista hacia las acciones clave. Los datos complejos se ocultan progresivamente (progressive disclosure).
2.  **Reducción de Carga Cognitiva:** El usuario solo debe ver lo que necesita en el momento exacto. Si el sistema de prospección es autónomo, la interfaz no debe ser un centro de control complejo, sino una *sala de mando ejecutiva* donde solo se toman decisiones estratégicas (ej. Aprobar/Rechazar).
3.  **Estética "Editorial Tecnológica":**
    *   **Titulares y Datos Clave:** Tipografía Serif (`Playfair Display` o similar) para mantener la elegancia y autoridad de la firma.
    *   **Metadatos, Status, Tablas y Código:** Tipografía Monospace (`JetBrains Mono`) para transmitir precisión técnica y funcionalidad de software avanzado.
4.  **Feedback Sensorial y Micro-interacciones:** La plataforma debe sentirse "viva" y fluida. Se usarán efectos de cristal (Glassmorphism sutil), estados de \`hover\` que revelan información, y transiciones suaves (ej. framer-motion o GSAP guiado por estado) al mover leads de una columna a otra.

---

## 2. Arquitectura de Navegación (Layout)

Para mantener la inmersión y el enfoque, se propone una estructura limpia que maximice el área de trabajo:

### A. Navegación Principal (Sidebar Colapsable)
Una barra lateral izquierda muy sutil y estrecha. En lugar de grandes bloques de color sólido, usará un fondo `#0A0A09` con un ligero borde o un efecto de transparencia si el fondo general es texturizado.
*   **Ítems con Iconografía Fina:** (Lucide React - `strokeWidth={1.5}`).
*   **Secciones Principales:**
    *   `[Icono Radar]` **Hub:** Vista ejecutiva y métricas generales.
    *   `[Icono Inbox]` **Action Center (Aprobaciones):** Donde el usuario revisa los borradores generados por la IA.
    *   `[Icono Pipeline]` **Pipeline:** CRM visual (Kanban) de prospectos activos.
    *   `[Icono Archivo]` **Documentos:** Contratos y onboarding.
    *   `[Icono Engranaje]` **Ajustes:** Configuración del IA y facturación.

### B. Command Menu (Paleta de Comandos - CMD+K)
Es la herramienta definitiva para el usuario avanzado (el "Tech" en "Premium Tech"). Un buscador global accesible vía atajo de teclado que permite:
*   Saltar rápidamente a un prospecto específico (`Ir a "Juan Pérez"`).
*   Ejecutar acciones sin usar el mouse (`Aprobar todos los borradores`, `Pausar campaña`).

---

## 3. Vistas Clave y Experiencia de Usuario (Flujos)

### 3.1. El Hub (Dashboard Ejecutivo)
No es un panel de control técnico tradicional con docenas de gráficas de barras. Es un resumen financiero y operativo elegante.
*   **Tarjetas de KPIs (Glassmorphism):** Valores numéricos grandes en tipografía Romana Serif, acompañados de porcentajes de crecimiento en verde/rojo sutil monospace. (Ej: "Prospectos Contactados", "Tasa de Respuesta Positiva", "Ingresos Proyectados").
*   **Feed de Actividad Reciente:** Una lista tipo terminal a la derecha o abajo, usando monospace, detallando lo que la IA está haciendo en tiempo real (ej. `[14:02] Analizando perfil de XYZ Analytics...`).

### 3.2. Action Center (Centro de Aprobación Humana)
*El corazón del ciclo Aurellis.* Aquí se materializa la promesa de "personalización curada y supervisada".
*   **Vista tipo "Tinder" o "Inbox Inteligente":**
    *   En pantalla central se muestra la "Ficha del Prospecto" (Foto, Cargo, Empresa, Contexto clave detectado por la IA).
    *   Se muestra el **Borrador Sugerido** en un área que imita un editor de texto limpio.
    *   **Acciones:** Dos botones grandes y claros: `[Modificar Borrador]` (abre editor inline) y `[Aprobar y Enviar]` (con animación de envío satisfactoria).
    *   **UX:** Uso de atajos de teclado (Flecha Izquierda = Descartar, Flecha Derecha = Aprobar) para revisar prospectos en segundos.

### 3.3. Pipeline (Gestión de Leads / CRM)
Un tablero Kanban reimaginado. Olvídate de los fondos grises y bloques toscos.
*   **Columnas Clean:** Sin bordes duros. Solo títiulos sutiles (ej. `Contacto Inicial`, `Reunión Agendada`, `Propuesta Enviada`).
*   **Cards (Tarjetas):** Efecto de cristal oscuro. Muestran el nombre del cliente, el cargo (en `font-mono`) y un indicador visual sutil (un punto brillante) si hay una acción requerida (ej. el cliente respondió el correo).
*   **Drag & Drop:** Animaciones muy fluidas al mover un prospecto. Al caer en una nueva columna, un destello o sonido muy sutil indica éxito.

### 3.4. Generador de Documentos (El Toque Final)
Cuando un deal se mueve a "Cerrado Ganado", un drawer (panel lateral) emerge suavemente.
*   Pide 1 o 2 datos críticos (ej. Fecha de inicio, Monto final).
*   Muestra una previsualización en vivo (estilo PDF limpio) del contrato generándose.
*   Un botón destacado (Golden Accent): **"Generar y Enviar al Cliente"**.

---

## 4. UI Kit (Sistema de Diseño Extendido)

Para construir estas interfaces, nos basaremos en los tokens definidos en `theme.css`:

*   **Paleta de Colores:**
    *   `Background`: `#0A0A09` (Casi negro absoluto, da profundidad).
    *   `Surface / Panels`: `#111110` con `backdrop-blur-xl` e ` border-white/5` (Para tarjetas y modales que flotan sobre el fondo).
    *   `Accents`: `#B5A47D` (Dorado sutil, para los botones principales y enlaces).
    *   `Text`: Principalmente `#F6F3EE` y versiones rebajadas (60%, 40%) para jerarquía visual sin usar colores grises muertos.
    *   `Semantic States`: 
        *   Info/Process (Azul tech sutil o Cyan).
        *   Success (Esmeralda oscuro, no un verde chillante).
        *   Warning/Block (Carmesí oscuro/Rojo vino para mantener elegancia).

*   **Tipografía de Trabajo:**
    *   H1/H2 (Nombres de clientes, Títulos de sección): `font-serif`.
    *   Datos tabulares, badges de estatus, comandos, fechas: `font-mono text-[10px] a text-[12px] uppercase tracking-wider`.
    *   Lectura larga (Emails, Notas): `font-sans font-light`.

---

## Próximos Pasos (Implementación)

1.  Crear `src/app/platform/layout.tsx` configurando el Sidebar y el contenedor principal para las rutas `/platform/*`.
2.  Implementar el componente de Navegación Lateral (Sidebar).
3.  Desarrollar una estructura base en `/platform/page.tsx` (El Hub) introduciendo los componentes visuales de cristal que probamos en la landing page.
