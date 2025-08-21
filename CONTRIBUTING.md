# Guía de Contribución

Bienvenido a Democrateando, aquí encontrarás información para que puedas colaborar en este proyecto.

## Tabla de Contenidos

- [Código de conducta](#código-de-conducta)
- [Cómo contribuir](#cómo-contribuir)
  - [Crear una _issue_](#crear-una-issue)
  - [Trabajando en una _issue_](#trabajando-en-una-issue)
  - [Notación de ramas](#notación-de-ramas)
  - [Convención de commits](#convención-de-commits)
  - [_Pull Request_](#pull-request)

## Código de conducta

Democrateando es un espacio neutral, no se busca favorecer o desfavorecer ningún tipo de ideología y/o partido político. Sé respetuoso con los demás evitando comentarios o acciones degradantes.

## Cómo contribuir

### Crear una _issue_

Procura usar un título descriptivo y en **modo imperativo**, además una descripción detallada de la funcionalidad o reporte que quieras agregar.

Ejemplo de título: `Mejora la documentación de contribución`

Elige la etiqueta correspondiente:

- `funcionalidad`: Nueva funcionalidad
- `bicho`: Algo no funciona bien
- `documentación`: Mejoras o adiciones a la documentación
- `duplicado`: Lo solicitado ya existe
- `mejora`: Mejora de una funcionalidad

Finalmente elige el proyecto `Democrateando` con el estado de `Borrador` para esperar su aprobación.

### Trabajando en una _issue_

Ingresa a la sección del [proyecto](https://github.com/orgs/Democrateando/projects/1), elige una _issue_ en la columna `Por Hacer`, asígnate la _issue_ y muévela a la columna `En Progreso`.

### Notación de ramas

Para mayor facilidad, se recomienda usar la siguiente notación para las ramas según el tipo de issue:

- `func/número-issue` para funcionalidades
- `crre/número-issue` para correcciones
- `docs/número-issue` para documentación

Ejemplo: `func/5`, `crre/7`, `docs/9`

### Convención de commits

Se sigue la convención de commits de [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/), adaptada a español.

Ejemplo de commit, que debe estar en **modo imperativo**: `func: agrega funcionalidad de búsqueda`

La idea es que el mensaje de commit complete esta frase:  
_"Si aplico este commit, entonces este commit..."_ Ejemplos:

- "... agrega una nueva consulta"
- "... corrige un error en la validación"

Si necesitas dar más información, utiliza el cuerpo del commit para explicar el cambio.

### _Pull Request_

Crea un _Pull Request_ con el título de la _issue_ en modo imperativo y la descripción detallada de los cambios realizados. Asigna la revisión al usuario `meyer-pidiache`, y selecciona el proyecto `Democrateando` con el estado `Borrador`.

Ejemplo de título de PR:  
`Mejora la documentación de contribución`

Con lo anterior realizado, se revisará tu aporte y se procederá a integrarlo al proyecto si cumple con los requisitos.
