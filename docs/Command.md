---
sidebar_position: 4
---

# Command

El patrón **Command** es un patrón de diseño de comportamiento que encapsula una solicitud o acción como un objeto. Esto permite:

- Parametrizar objetos con diferentes solicitudes.
- Programar la ejecución de acciones.
- Registrar solicitudes en un historial para su posible reversión.
- Promover un diseño desacoplado entre emisores y receptores.

Este patrón es especialmente útil en sistemas donde se requiere ejecutar comandos bajo diferentes contextos, soportar operaciones reversibles (deshacer/rehacer) o manejar filas de solicitudes.

---

## ¿Cómo funciona?

1. **Comando (Command):** Declara una interfaz común para ejecutar operaciones.
2. **Receptor (Receiver):** Ejecuta la acción concreta.
3. **Invocador (Invoker):** Solicita al comando que ejecute la acción.

---

## Representación Gráfica

![Diagrama del patrón Command](https://reactiveprogramming.io/_next/image?url=%2Fbooks%2Fpatterns%2Fimg%2Fpatterns%2Fcommand2.png&w=3840&q=75)

---

## Ejemplo práctico

Un sistema de control remoto con las siguientes partes:

- **Comandos:** Encender y apagar la luz.
- **Receptor:** La luz, que ejecuta las acciones.
- **Invocador:** Un control remoto que invoca los comandos.

```javascript
// Receptor: Clase que ejecuta las acciones concretas.
class Luz {
  encender() {
    console.log('La luz está encendida.');
  }

  apagar() {
    console.log('La luz está apagada.');
  }
}

// Comando: Clase base para comandos.
class EncenderLuz {
  constructor(luz) {
    this.luz = luz;
  }

  ejecutar() {
    this.luz.encender();
  }
}

class ApagarLuz {
  constructor(luz) {
    this.luz = luz;
  }

  ejecutar() {
    this.luz.apagar();
  }
}

// Invocador: Control remoto que invoca los comandos.
class ControlRemoto {
  setComando(comando) {
    this.comando = comando;
  }

  presionarBoton() {
    this.comando.ejecutar();
  }
}

// Ejemplo de uso
const luz = new Luz();
const encenderLuz = new EncenderLuz(luz);
const apagarLuz = new ApagarLuz(luz);

const control = new ControlRemoto();

// Encender la luz
control.setComando(encenderLuz);
control.presionarBoton();

// Apagar la luz
control.setComando(apagarLuz);
control.presionarBoton();
