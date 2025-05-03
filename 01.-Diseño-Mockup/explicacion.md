# Punto 01 – Diseño y Mockup

## Aplicación: Catálogo Interactivo de Pokémon usando PokeAPI

Este diseño esquematiza una solución basada en microfrontends, donde cada aplicación remota se encarga de una funcionalidad distinta. Se usa la API pública [PokeAPI](https://pokeapi.co/) como fuente de datos.

### Estructura general

- **App Shell** (`app-shell`): aplica diseño general, navegación, rutas lazy e integra las remotas.
- **App Pokedex** (`app-pokedex`): lista y detalla Pokémon disponibles.
- **App Tipos** (`app-types`): muestra los tipos de Pokémon y su relación con otros tipos.
- **App Habilidades** (`app-abilities`): lista habilidades especiales y su descripción.

### Justificación del Diseño

El objetivo es dividir de manera coherente la funcionalidad basada en dominios (Domain-Driven Design) y asegurar el desacoplamiento entre microfrontends. El diseño considera:
- Navegación compartida desde el shell.
- Integración vía Module Federation.
- Separación de rutas, componentes y consumo de servicios.

### Mockup visual

Se incluye un diagrama en formato PNG y enlace editable en Figma para mostrar la estructura visual y los módulos involucrados.

---
