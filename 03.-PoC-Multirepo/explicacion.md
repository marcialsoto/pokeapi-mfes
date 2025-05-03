# Punto 03 – Prueba de Concepto (PoC) Multirepo

## Descripción

Esta prueba de concepto implementa una arquitectura de microfrontends con Angular 19 utilizando el enfoque **multirepo**, en el que cada aplicación (host y remotas) vive en un proyecto independiente. Se utiliza la librería `@angular-architects/native-federation` para integrar los módulos.

## Estructura

Cada uno de los siguientes proyectos fue generado en su propia carpeta, con estilo CSS:

- `app-shell` – Host principal (puerto 4200)
- `app-pokedex` – Remoto 1: listado de Pokémon (puerto 4201)
- `app-types` – Remoto 2: tipos de Pokémon (puerto 4202)
- `app-abilities` – Remoto 3: habilidades (puerto 4203)

## Configuración técnica

### 1. Generación de proyectos

```bash
ng new app-shell --routing --style=css
cd app-shell
npm install @angular-architects/native-federation
ng g @angular-architects/native-federation:init --project=app-shell --port=4200 --type=dynamic-host

