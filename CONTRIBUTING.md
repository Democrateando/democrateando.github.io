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

Procure usar un título descriptivo y conciso, además una descripción detallada de la funcionalidad o reporte que quiera agregar al proyecto.

Elige la etiqueta correspondiente:

- `funcionalidad`: Nueva funcionalidad
- `bicho`: Algo no funciona bien
- `documentación`: Mejoras o adiciones a la documentación
- `duplicado`: Lo solicitado ya existe
- `mejora`: Mejora de una funcionalidad

Finalmente elige el proyecto `Democrateando` con el estado de `Borrador` para esperar su aprobación.

### Trabajando en una _issue_

Ingresa a la sección del [proyecto](https://github.com/orgs/Democrateando/projects/1), y elige del tablero una _issue_ que esté en la columna de `Por Hacer`, asígnate la _issue_ y muévela a la columna de `En Progreso`.

### Notación de ramas

Para mayor facilidad, se recomienda usar feat/issue-number o fix/issue-number de acorde al tipo de _issue_ que se está trabajando. Ejemplo: feat/5 o fix/7.

### Convención de commits

Se sigue la convención de commits de [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/).

Ejemplo de commit, que debe estar en tiempo verbal imperativo:

```
feat: agrega funcionalidad de búsqueda
```

La idea es que el mensaje de commit complete esta frase: "Si aplico este commit, entonces este commit..." Ejemplos:

- "... agrega una nueva consulta"

- "... corrige un error en la validación"

Si es necesario agregar más información, se puede usar el cuerpo del commit para explicar el cambio.

### _Pull Request_

Crea un _Pull Request_ con el título de la _issue_ y la descripción detallada de los cambios realizados, adicionalmente asigna la revisión al usuario `meyer-pidiache`, selecciona el proyecto `Democrateando` con el estado de `Borrador`.

Con lo anterior realizado, se revisará su aporte y se procederá a su integración al proyecto si se considera que cumple con los requisitos.
