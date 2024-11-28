
# Strategy

El patrón **Strategy** permite definir una familia de algoritmos, encapsularlos y hacerlos intercambiables. Esto permite que el algoritmo varíe independientemente del cliente que lo utiliza.

## ¿Cómo funciona?
1. **Estrategia (Strategy):** Define una interfaz común para todos los algoritmos.
2. **Contexto (Context):** Mantiene una referencia a una estrategia y la utiliza para ejecutar el algoritmo.

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
