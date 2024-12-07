# Patrón de Diseño: Composite

## Descripción Breve
El patrón *Composite* organiza objetos en estructuras jerárquicas como árboles, permitiendo que los clientes interactúen con elementos individuales o compuestos de manera uniforme.

---

## Problema que Resuelve
Cuando se manejan estructuras complejas con elementos individuales y compuestos, el patrón *Composite* simplifica la interacción al proporcionar una interfaz común para ambos tipos de elementos.

---

## Cómo Funciona
El patrón *Composite* define una jerarquía de clases que incluye:

1. **Component**: Una interfaz común para todos los objetos en la estructura (hojas y compuestos).
2. **Leaf (Hoja)**: Representa los elementos individuales sin componentes secundarios.
3. **Composite**: Representa los elementos compuestos que pueden contener otros componentes, sean hojas u otros compuestos.

Los clientes interactúan con los componentes a través de la interfaz común sin preocuparse por si están tratando con una hoja o un compuesto.

### Ejemplo en un Árbol Jerárquico
- **Leaf**: Archivos individuales.
- **Composite**: Carpetas que contienen otros archivos o carpetas.

---

## Ventajas
1. **Uniformidad**: Los clientes pueden interactuar con hojas y compuestos de la misma manera.
2. **Extensibilidad**: Facilita la adición de nuevos tipos de componentes.
3. **Legibilidad**: Mejora el diseño y mantenimiento de estructuras complejas.

---

## Desventajas
1. **Sobrecarga**: Puede ser innecesariamente complicado si la estructura no es suficientemente compleja.
2. **Dificultad Inicial**: Requiere planificación para implementar correctamente la jerarquía de clases.

---

## Ejemplo de Uso
En un sistema operativo, los archivos y carpetas pueden representarse mediante el patrón *Composite*:

- **Archivo (Leaf)**: Elementos individuales sin capacidad de contener otros elementos.
- **Carpeta (Composite)**: Puede contener archivos y otras carpetas.

El cliente puede interactuar con ambos usando la misma interfaz, por ejemplo, para calcular el tamaño total o listar su contenido.

---

## Representación Gráfica
```plaintext
Composite ---> Leaf (Hoja)
          ---> Composite ---> Leaf (Hoja)
                         ---> Composite ---> Leaf (Hoja)
