# Reglas de Diseño de Aurellis

Este documento define las bases visuales y de interacción para la construcción de la interfaz de **Aurellis**.

## Concepto de Marca Visual
La plataforma debe sentirse como la intersección entre estas ideas:
- **Arte:** sensibilidad, composición, ritmo, silencio visual, belleza útil.
- **Productividad:** estructura, claridad, foco, fluidez.
- **Organización:** jerarquía, orden lógico, información limpia.
- **Lujo:** contención, materiales visuales sobrios, exclusividad sin ostentación.
- **Independencia profesional:** herramientas para gente que trabaja con criterio propio y quiere operar como firma premium.

La sensación general no debe ser “divertida”. Debe ser serena, inteligente, elegante y afilada.

## Personalidad y Dirección de Estilo
- **Palabras clave:** Serena, selectiva, editorial, escultórica, silenciosa, precisa, atemporal, contemporánea, curada, sofisticada.
- **Evitar:** Infantil, demasiado techy, SaaS tradicional (genérico), sobrecarga colorida, o estética de “productividad hacker”.
- **Dirección ideal:** Mezcla de software premium B2B, revista de diseño contemporáneo, estudio creativo de alto nivel, firma boutique de consultoría y galería de arte minimalista.

## Principios Rectores
1. **La interfaz debe respirar:** Mucho espacio negativo. El vacío es valor, transmite calma y control.
2. **Menos elementos, mejor elegidos:** Cada línea, sombra y forma debe justificar su existencia.
3. **La elegancia nace de la proporción:** No decorar. Alinear, espaciar, jerarquizar y refinar.
4. **Información curada:** Priorizar y revelar progresivamente.
5. **Premium por disciplina:** Consistencia absoluta en estados, paddings, radios, tamaños y animaciones.
6. **Calidez intelectual:** Humana, culta y artesanal; no fría como corporación ni juguetona como app social.

---

## Paleta de Colores
El color entra como un susurro. 
*Regla de uso: 75% neutros, 20% grises/tonos de estructura, 5% acentos.*

### Base Neutra
- **Ivory Mist `#F6F3EE`**: Fondo principal cálido, elegante, casi papel fino.
- **Soft Linen `#EAE4DA`**: Superficies secundarias, bordes suaves.
- **Stone Taupe `#C8BFB1`**: Divisores, estados apagados, apoyo.
- **Graphite Ink `#1E1E1A`**: Texto principal, íconos prioritarios.
- **Charcoal Velvet `#2A2926`**: Fondos oscuros premium, tarjetas destacadas.

### Acentos Premium
- **Muted Gold `#B49A6C`**: Acento principal medido (solo para estados premium, puntos de luz, énfasis crítico).
- **Deep Olive `#5F6657`**: Secundario para dar madurez y estabilidad.
- **Slate Blue Grey `#66707A`**: Funcional para datos o analítica.

### Estados Suaves (Sin estridencias)
- **Success Moss `#6B7A62`**
- **Warning Umber `#8A6B4F`**
- **Error Clove `#8B5C57`**

---

## Sistema Tipográfico
Dupla que combine sensibilidad artística y usabilidad técnica.

**1. Serif para Display y Headings** (Cormorant Garamond o Instrument Serif)
- *Usar en:* Hero, títulos de secciones clave, frases editoriales, métricas premium.

**2. Sans para Interfaz y Cuerpo** (Inter o Satoshi)
- *Usar en:* Tablas, menús, botones, párrafos de interfaz.

### Jerarquía
- **Display Hero:** 48-72px, Serif, Medium/Semibold, Tracking levemente cerrado.
- **Heading 1:** 36-48px para secciones clave.
- **Heading 2:** 28-32px, Sans, limpio, peso 600.
- **Body Large / Body:** 18px (Onboarding) y 15-16px (Base).
- **Small / Meta:** 12-13px, estados, métricas auxiliares.
- *Reglas:* Máximo 3 pesos (regular, medium, semibold). Interlineado generoso.

---

## Layout y Estructura Espacial
- **Grid de separación preferido:** Múltiplos de 8 (16, 24, 32, 64).
- **Lectura Visual:** 1) Qué estoy viendo -> 2) Qué importa más -> 3) Qué puedo hacer -> 4) Detalle revisable.
- Secciones amplias separadas por al menos 64px; paneles de tarjeta con padding de 20-24px.

---

## Componentes UI Clave

### Tarjetas y Superficies
Fondo marfil (o carbón), sombras casi invisibles o bordes muy difusos. Radios entre 16 y 20px.

### Botones
- **Radios:** 12 a 14px. Sin botones de píldora exagerados.
- **Primary:** Fondo grafito/carbón, texto marfil. Hover eleva ligeramente la luminosidad o sombra.
- **Secondary:** Fondo transparente, borde fino, texto grafito.
- **Ghost:** Acciones secundarias muy sutiles.

### Formularios y Tablas
- **Inputs:** Bordes ultrafinos, fondo suave, *focus ring* en oliva o dorado. Radio 12px.
- **Tablas:** Líneas mínimas, enorme espacio vertical. Énfasis mediante color de texto, no fondos de celda.

### Iconografía y Visuales
- **Íconos:** Lucide o Phosphor (Fine/Thin). Mismo grosor de línea en toda la plataforma. Uso como apoyo.
- **Texturas:** Ruido levísimo, patrones de papel. Cero ondulaciones "startup" o blobs. Nada de ilustraciones flat coloridas.

---

## Animaciones (GSAP)
Animar para enfatizar "revelación, control, arte y deslumbramiento sutil".
- **Reveal Vertical:** Opacidad 0 a 1, shift Y de 16-24px a 0. (Duración 0.8s - 1.2s).
- **Hover Drift:** Los elementos interactivos flotan 2-3px en hover, suavizando su sombra.
- **No Permitido:** Bounces, physics extremas, rotaciones o morphs ruidosos.
- **Easings Preferidos:** `power2.out`, `power3.out`.

## Lenguaje y Tono de Redacción
Escritura directa, inteligente y sofisticada. 
* "Prospectos seleccionados" (No "Leads masivos")
* "Flujo activo" (No "¡Campaña on fire!")
* "Clientes incorporados" (No "¡Éxito!")
