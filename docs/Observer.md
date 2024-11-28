---
sidebar_position: 4
---

# Observer

El patrón **Observer** define una relación de uno a muchos entre objetos, de modo que cuando un objeto cambia su estado, se notifica automáticamente a todos los objetos dependientes. Este patrón es ideal para implementar sistemas de notificación o eventos.

## ¿Cómo funciona?
1. **Sujeto (Subject):** Mantiene una lista de observadores y les notifica cualquier cambio en su estado.
2. **Observador (Observer):** Se registra en el sujeto y responde a los cambios de estado.

## Ejemplo práctico
Un sistema de noticias:
- **Sujeto:** Fuente de noticias que publica actualizaciones.
- **Observadores:** Suscriptores que reciben las noticias.

```javascript
class Noticiero {
  constructor() {
    this.suscriptores = [];
  }

  agregarSuscriptor(suscriptor) {
    this.suscriptores.push(suscriptor);
  }

  notificar(articulo) {
    this.suscriptores.forEach(suscriptor => suscriptor.actualizar(articulo));
  }
}


// Ejemplo de uso
const noticiero = new Noticiero();
const juan = new Suscriptor('Juan');
const maria = new Suscriptor('María');

noticiero.agregarSuscriptor(juan);
noticiero.agregarSuscriptor(maria);

noticiero.notificar('¡Nueva noticia publicada!');
