# Punto 02 – Prueba de Concepto (PoC) en Monorepo

## Descripción

Se ha creado una prueba de concepto (PoC) de arquitectura de microfrontends utilizando un entorno **Monorepo** con Angular 19 y `@angular-architects/native-federation`.

El proyecto principal contiene una aplicación host (`app-shell`) y tres aplicaciones remotas: `app-pokedex`, `app-types` y `app-abilities`.

## Estructura de carpetas en el Monorepo

pokeapi-mfes/
└── projects/
├── app-shell # Aplicación host
├── app-pokedex # Aplicación remota 1
├── app-types # Aplicación remota 2
├── app-abilities # Aplicación remota 3