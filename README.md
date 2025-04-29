# React + Vite - Serie de pasos

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