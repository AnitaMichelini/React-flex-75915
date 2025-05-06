# React + Vite - Serie de pasos
Clase 1

Creamos nuestra carpeta y abrimos VSC desde ahí
Ejecutamos el comando "npm create vite"
Le ponemos nombre, seleccionamos la opción "React" y "Javascript"
Tenemos dos opciones: 
1. Podemos hacer cd nombreDelProyecto para acceder a esa carpeta desde la terminal o ;
2. Podemos tomar la carpeta creada y mover todos los archivos fuera de la carpeta. Luego eliminarla(en caso de tomar esta opción)
Ejecutamos "npm install" y luego "npm run dev" para que el servidor corra en "http://localhost:5173"

·· Archivos a eliminar
- 'index.css' se elimina
- 'App.css' se borra todo su contenido
- En 'main.jsx' quitamos strictMode tanto en la línea 1 (importación) como en la etiqueta que envuelve al <app />. También quitamos la importación de 'index.css' ya que este archivo no existe más.

Clase 2
 
 -JSX : Es la combinación de JS con HTML (XML realmente)
 - Cuando trabajamos con JSX debemos retornar único elemento. Es decir, si quiero retornar dos etiquetas, necesito envolverlas en un único div o bien en un fragment (<> </>)

 · Sugar sintax

 Manera simplificada de realizar algunas tareas 
  - Ejemplo: let contador = 0 // contador++ le asigna el valor de contador sumado a 1
  - Destructuring de objetos // const {nombre} = objeto corresponde a crear una variable nombre con un valor objeto.nombre
  - Destructuring de arrays // const [primero, segundo] = array corresponde a crear una variables priemro y segundo  con un valor array [0] y array [1] respectivamente.
  