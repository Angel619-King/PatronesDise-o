# Patrón de Diseño: Adapter

## Descripción Breve
El patrón *Adapter* permite que clases con interfaces incompatibles trabajen juntas mediante un "adaptador" que convierte la interfaz de una clase en otra.

---

## Problema que Resuelve
Cuando se necesitan integrar clases que no pueden interactuar directamente debido a diferencias en sus interfaces, el patrón *Adapter* proporciona una solución para conectarlas sin modificar su código original.

---

## Cómo Funciona
Un adaptador actúa como intermediario entre dos interfaces. Los elementos clave son:

- **Cliente**: El código que desea utilizar una funcionalidad específica.
- **Target**: La interfaz esperada por el cliente.
- **Adaptado**: La clase existente cuya interfaz es incompatible con el cliente.
- **Adaptador**: La clase que convierte la interfaz del adaptado a la interfaz esperada por el cliente.

El adaptador implementa la interfaz del *Target* y traduce las solicitudes del cliente a llamadas compatibles con el adaptado.

---

## Ventajas
1. **Reutilización de Código**: Permite reutilizar clases existentes sin modificarlas.
2. **Separación de Responsabilidades**: Mejora la cohesión al encapsular la lógica de adaptación en una clase específica.
3. **Flexibilidad**: Facilita la integración de sistemas legados o de terceros.

---

## Desventajas
1. **Incremento de Complejidad**: Aumenta el número de clases en el sistema.
2. **Sobrecarga Inicial**: Requiere planificación adicional para implementar correctamente el adaptador.

---

## Ejemplo de Uso
Imagina que necesitas utilizar un dispositivo con enchufe europeo en un tomacorriente americano. 

- **Cliente**: El dispositivo eléctrico.
- **Target**: La interfaz del tomacorriente americano.
- **Adaptado**: El enchufe europeo.
- **Adaptador**: Un convertidor que traduce las conexiones del enchufe europeo para que encaje y funcione en el tomacorriente americano.

## Representacion grafica
![Diagrama del Patrón Adapter](https://reactiveprogramming.io/_next/image?url=%2Fbooks%2Fpatterns%2Fimg%2Fpatterns-articles%2Fadapter-diagram.png&w=3840&q=75)

---

## Código de Ejemplo en Python
```python
# Target: La interfaz esperada por el cliente.
class AmericanSocket:
    def connect(self):
        return "Conectado a una toma americana."

# Adaptado: La clase existente cuya interfaz es incompatible.
class EuropeanPlug:
    def plug_in(self):
        return "Conectado a un enchufe europeo."

# Adaptador: Convierte la interfaz del adaptado en la interfaz esperada.
class Adapter(AmericanSocket):
    def __init__(self, european_plug):
        self.european_plug = european_plug

    def connect(self):
        # Traduce la solicitud de conexión
        return self.european_plug.plug_in()

# Cliente: Usa la interfaz Target.
def main():
    european_plug = EuropeanPlug()
    adapter = Adapter(european_plug)
    print(adapter.connect())

if __name__ == "__main__":
    main()
## Representación Gráfica

