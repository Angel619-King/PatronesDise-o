
# Strategy

El patrón **Strategy** es un patrón de diseño de comportamiento que permite definir un conjunto de algoritmos, encapsularlos en clases separadas y hacerlos intercambiables según las necesidades del cliente. Esto brinda flexibilidad al permitir cambiar dinámicamente el algoritmo utilizado por un objeto sin modificar su código.

Este patrón es especialmente útil cuando un sistema necesita ejecutar diferentes comportamientos o algoritmos dependiendo de las circunstancias, sin tener que usar estructuras condicionales complejas.

## ¿Cómo funciona?
1. **Estrategia (Strategy):** Define una interfaz común para todos los algoritmos.
2. **Contexto (Context):** Mantiene una referencia a una estrategia y la utiliza para ejecutar el algoritmo.


![Diagrama del patrón Strategy](https://thepowerups-learning.com/wp-content/uploads/2021/03/Strategy.jpg)

## Ejemplo práctico
Un sistema de pago con diferentes métodos:
- **Estrategias:** Pago con tarjeta de crédito, PayPal y criptomonedas.
- **Contexto:** Plataforma de pagos.

```javascript
// Estrategias
class PagoTarjeta {
  procesarPago(monto) {
    console.log(`Pago de $${monto} procesado con tarjeta de crédito.`);
  }
}

class PagoPayPal {
  procesarPago(monto) {
    console.log(`Pago de $${monto} procesado con PayPal.`);
  }
}

class PagoCripto {
  procesarPago(monto) {
    console.log(`Pago de $${monto} procesado con criptomonedas.`);
  }
}

// Contexto
class PlataformaPago {
  setEstrategia(estrategia) {
    this.estrategia = estrategia;
  }

  ejecutarPago(monto) {
    this.estrategia.procesarPago(monto);
  }
}

// Ejemplo de uso
const plataforma = new PlataformaPago();
const pagoTarjeta = new PagoTarjeta();
const pagoPayPal = new PagoPayPal();

plataforma.setEstrategia(pagoTarjeta);
plataforma.ejecutarPago(100);

plataforma.setEstrategia(pagoPayPal);
plataforma.ejecutarPago(50);
