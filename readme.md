# Week 2 Challenge 5 🦠

El challenge de este fin de semana consiste en reproducir a través de JS el [Juego de la vida de Conway](https://es.wikipedia.org/wiki/Juego_de_la_vida).

| Los requisitos básicos son:                                    |                         Los milestones son: |
| :------------------------------------------------------------- | ------------------------------------------: |
| - [x] Testear con jest                                         |             - [ ] Programa funcional con JS |
| - [x] Utilizar SonarCloud para comprobar la calidad del código |                - [ ] Programa 100% testeado |
| - [x] Utilizar Husky para manejar los git-hooks                | - [ ] Crear un entorno de uso en HTML y CSS |
| - [x] Utilizar GitActions para cumplir el workflow             |                  - [ ] Desplegar en Netlify |
| - [x] Proteger el main para mergear sólo por pull request      |                                             |
| - [ ] Si se llega a HTML/CSS usar BEM y Sass                   |                                             |

## Dudas

Cómo puedo hacer que el test me cubra un código como este, ya que realmente la condición de dentro nunca se va a incumplir, pero no ponerla es detectada como error por el eslint:

```javascript
for (const i in object) {
  if (i !== undefined) {
    previousRow++;
  }
}
```
