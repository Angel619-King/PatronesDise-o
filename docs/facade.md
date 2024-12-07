---
sidebar_position: 7
---

# Patrón de Diseño: Facade

## Descripción Breve
El patrón *Facade* proporciona una interfaz simplificada para interactuar con un sistema complejo de clases, librerías o frameworks.

---

## Problema que Resuelve
Cuando un sistema está compuesto por múltiples clases o subsistemas con interacciones complicadas, el patrón *Facade* facilita la interacción al ocultar la complejidad y exponer solo lo esencial.

---

## Cómo Funciona
El *Facade* actúa como intermediario, encapsulando las funcionalidades de un conjunto de clases o subsistemas y exponiéndolas a través de una única interfaz simple. Esto permite al cliente utilizar el sistema sin necesidad de conocer sus detalles internos.

### Elementos Clave:
1. **Cliente**: El código que utiliza el sistema simplificado.
2. **Facade**: La interfaz simplificada que oculta los detalles internos del sistema.
3. **Subsistemas**: Las clases o componentes complejos que son accesibles a través del *Facade*.

El cliente interactúa solo con el *Facade*, y este se encarga de gestionar las interacciones con los subsistemas.

---

## Ventajas
1. **Simplicidad**: Reduce la complejidad al ofrecer una única interfaz de entrada.
2. **Separación de Abstracción**: Mantiene al cliente independiente de los detalles internos del sistema.
3. **Flexibilidad**: Permite cambiar la implementación interna sin afectar al cliente.

---

## Desventajas
1. **Funcionalidad Oculta**: Puede limitar el acceso a características avanzadas de las clases subyacentes.
2. **Dependencia**: Si el *Facade* no está bien diseñado, el cliente puede volverse dependiente de él.

---

## Ejemplo de Uso
En una aplicación que manipula archivos, el cliente podría necesitar realizar varias operaciones como:

- Abrir un archivo.
- Leer datos.
- Escribir datos.
- Cerrar el archivo.

El *Facade* simplificaría estas interacciones ofreciendo una única interfaz que encapsula todas estas operaciones en una sola llamada.

---

## Representación Gráfica

![Diagrama del Patrón Facade](https://www.ionos.mx/digitalguide/fileadmin/DigitalGuide/Schaubilder/diagrama-de-clase-uml-del-patron-fachada.png)

---

## Código de Ejemplo en Python

```python
# Subsistemas
class AbrirArchivo:
    def abrir(self, nombre):
        print(f"Archivo '{nombre}' abierto.")

class LeerArchivo:
    def leer(self):
        print("Leyendo datos del archivo.")

class EscribirArchivo:
    def escribir(self, datos):
        print(f"Escribiendo datos: {datos}")

class CerrarArchivo:
    def cerrar(self):
        print("Archivo cerrado.")

# Facade
class SistemaDeArchivos:
    def __init__(self, nombre_archivo):
        self.nombre_archivo = nombre_archivo
        self.abrir = AbrirArchivo()
        self.leer = LeerArchivo()
        self.escribir = EscribirArchivo()
        self.cerrar = CerrarArchivo()

    def procesar_archivo(self, datos):
        self.abrir.abrir(self.nombre_archivo)
        self.leer.leer()
        self.escribir.escribir(datos)
        self.cerrar.cerrar()

# Cliente
def main():
    sistema = SistemaDeArchivos("archivo.txt")
    sistema.procesar_archivo("Datos de ejemplo")

if __name__ == "__main__":
    main()
