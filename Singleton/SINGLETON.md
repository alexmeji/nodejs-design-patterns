# Patrón Singleton

Se asegura de que una clase se limite a tener una única instancia en nuestro programa y proporcionarnos acceso global de ella.

## Ejemplo

En este ejemplo, podremos observar que creamos una clase Logger, la cual nos servirá para imprimir mensajes a la consola y almacenarlos dentro de un arreglo para obtener posteriormente su tamaño y evaluar si al final es el tamaño esperado o no.

La clase persona dentro de su constructor utiliza el Logger que creamos con anterioridad e imprime un pequeño mensaje.

## Como utilizar los ejemplos

Para el patrón singleton, tendremos dos ejemplos, unos mostrando una mala implementación la cual creara múltiples instancias de un objeto y otra mostrando la implementación del patrón Singleton y evaluando su funcionalidad. Como vemos dentro de la estructura de carpetas, tenemos dos, **bad** en esta se encuentra la implementación sin el uso del patrón, y **good** en donde se encontrar el mismo ejemplo, solo que implementando el patrón.

Antes de ejecutar los ejemplos, asegúrate de estar ubicado dentro de la carpeta del patrón a evaluar.

### Mala implementación

Para ejecutar el ejercicio escribamos en nuestra consola:
```sh
node ./bad/index.js
```

Como podemos observar en el ultimo Log, esperábamos que el Logger que creamos tuviera 4 entradas dentro de su arreglo (ya que la clase Person lo utiliza dentro del constructor), pero este unicamente nos retorno que tenia 2 elementos dentro de su arreglo de logs.

Hasta este momento, se han creado tres instancias de la clase Logger, la primera dentro del archivo index.js y una en cada ejecuión del constructor de la clase Person.

### Implementando el patrón

Para ejecutar el ejercicio escribamos en nuestra consola:
```sh
node ./good/index.js
```

Ahora hicimos unos pequeños cambios dentro de nuestro archivo logger.js, como podemos observar creamos una clase Singleton dentro de ella e hicimos lo siguiente:

```js
class Singleton {
  constructor() {
    if(!Singleton.instance) {
      Singleton.instance = new Logger();
    }
  }

  getInstance() {
    return Singleton.instance;
  }
}
```

Importante de observar es que ahora exportamos la clase Singleton y no la clase Logger.

```js
module.exports = Singleton
```

## Explicación

Lo que logramos es que únicamente la primera vez que se cree un nuevo objeto de Logger, este ahora pasara por la evaluación de la clase Singleton y hara una evaluación si ya existe una instancia creada, si la instancia no existe creara una nueva, si la instancia ya existe, la retorna y utiliza esa referencia de memoria.
