---
sidebar_position: 4
---

# Observer

El patrón **Observer** define una relación de uno a muchos entre objetos, permitiendo que cuando un objeto central (el Sujeto) cambie su estado, notifique automáticamente a todos los objetos dependientes (los Observadores). Este patrón es ampliamente utilizado en sistemas donde se requiere una actualización automática en tiempo real de múltiples partes interesadas.

## ¿Cómo funciona?
1. **Sujeto (Subject):** Mantiene una lista de observadores y les notifica cualquier cambio en su estado.
2. **Observador (Observer):** Se registra en el sujeto y responde a los cambios de estado.

![Diagrama del patrón Observer](https://th.bing.com/th/id/OIP.mljHIxyVUUjwo0nQl30kqwHaEI?rs=1&pid=ImgDetMain)

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
