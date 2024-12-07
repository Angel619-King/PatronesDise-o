---
sidebar_position: 8
---

# Composite

El patrón **Composite** organiza objetos en estructuras jerárquicas como árboles, permitiendo que los clientes interactúen con elementos individuales (*Leaf*) o compuestos (*Composite*) de manera uniforme.

---

## ¿Cómo Funciona?

El patrón **Composite** define una jerarquía de clases que incluye:

1. **Component:** Una interfaz común para todos los objetos en la estructura (hojas y compuestos).
2. **Leaf (Hoja):** Representa los elementos individuales sin componentes secundarios.
3. **Composite:** Representa los elementos compuestos que pueden contener otros componentes, ya sean hojas u otros compuestos.

### Ejemplo en un Árbol Jerárquico
- **Leaf:** Archivos individuales.
- **Composite:** Carpetas que contienen otros archivos o carpetas.

Los clientes interactúan con los componentes a través de la interfaz común sin preocuparse por si están tratando con una hoja o un compuesto.

---

## Representación Gráfica

![Diagrama del Patrón Composite](https://reactiveprogramming.io/_next/image?url=%2Fbooks%2Fpatterns%2Fimg%2Fpatterns-articles%2Fcomposite-diagram.png&w=2048&q=75)

---

## Ventajas

1. **Uniformidad:** Los clientes pueden interactuar con hojas y compuestos de la misma manera.
2. **Extensibilidad:** Facilita la adición de nuevos tipos de componentes.
3. **Legibilidad:** Mejora el diseño y mantenimiento de estructuras complejas.

---

## Desventajas

1. **Sobrecarga:** Puede ser innecesariamente complicado si la estructura no es suficientemente compleja.
2. **Dificultad Inicial:** Requiere planificación para implementar correctamente la jerarquía de clases.

---

## Ejemplo Práctico

En un sistema operativo, los archivos y carpetas pueden representarse mediante el patrón **Composite**:

- **Archivo (Leaf):** Elementos individuales sin capacidad de contener otros elementos.
- **Carpeta (Composite):** Puede contener archivos y otras carpetas.

El cliente puede interactuar con ambos usando la misma interfaz, por ejemplo, para calcular el tamaño total o listar su contenido.

```javascript
// Componente común
class Componente {
  constructor(nombre) {
    this.nombre = nombre;
  }

  mostrar() {
    throw new Error('Este método debe ser implementado.');
  }
}

// Leaf: Representa un archivo
class Archivo extends Componente {
  mostrar() {
    console.log(`Archivo: ${this.nombre}`);
  }
}

// Composite: Representa una carpeta que contiene otros componentes
class Carpeta extends Componente {
  constructor(nombre) {
    super(nombre);
    this.contenido = [];
  }

  agregar(componente) {
    this.contenido.push(componente);
  }

  mostrar() {
    console.log(`Carpeta: ${this.nombre}`);
    this.contenido.forEach(componente => componente.mostrar());
  }
}

// Ejemplo de uso
const archivo1 = new Archivo('archivo1.txt');
const archivo2 = new Archivo('archivo2.txt');

const carpeta1 = new Carpeta('Carpeta 1');
carpeta1.agregar(archivo1);

const carpetaPrincipal = new Carpeta('Carpeta Principal');
carpetaPrincipal.agregar(carpeta1);
carpetaPrincipal.agregar(archivo2);

carpetaPrincipal.mostrar();
