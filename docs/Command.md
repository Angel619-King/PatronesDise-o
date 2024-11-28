
# Command

El patrón **Command** encapsula una solicitud como un objeto, lo que permite parametrizar objetos con solicitudes, retrasar la ejecución de una solicitud o soportar operaciones reversibles.

## ¿Cómo funciona?
1. **Comando (Command):** Declara una interfaz común para ejecutar operaciones.
2. **Receptor (Receiver):** Ejecuta la acción concreta.
3. **Invocador (Invoker):** Solicita al comando que ejecute la acción.

## Ejemplo práctico
Un sistema de control remoto:
- **Comandos:** Encender y apagar la luz.
- **Receptor:** Luz.
- **Invocador:** Control remoto.

```javascript
class Luz {
  encender() {
    console.log('La luz está encendida.');
  }

  apagar() {
    console.log('La luz está apagada.');
  }
}

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

class ControlRemoto {
  setComando(comando) {
    this.comando = comando;
  }

  presionarBoton() {
    this.comando.ejecutar();
  }
}

const luz = new Luz();
const encenderLuz = new EncenderLuz(luz);
const apagarLuz = new ApagarLuz(luz);

const control = new ControlRemoto();

control.setComando(encenderLuz);
control.presionarBoton();

control.setComando(apagarLuz);
control.presionarBoton();
