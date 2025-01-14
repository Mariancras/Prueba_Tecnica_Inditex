# Prueba Técnica: Inditex

El presente git es una solución a la Prueba técnica de QA DEV propuesta por Merlin Software/Inditex, a quien corresponde los derechos y la autoría de las consignas, expuestas en: Consigna Prueba Tecnica.pdf

### Ejercicio 1: "Prueba exploratoria y reporte"
Resuelto en la carpeta Ejercicio_1, dentro de esta se encontraran diferentes archivos y la correspondiente explicación.

### Ejercicio 2: "Automatización de una web"
Resuelto en Cypress v 13.9, se utilizo Cucumber-preprocessor v4.3.1 y se lo integro con browserstack para probar en distintos navegadores y sistemas operativos. 
El proyecto se encuentra en el presente repositorio.


### Ejercicio 3: "Tratamiento de datos en APIs"
Resuelto en Postman y ejecutado en Newman. Se aporta la colección y ambiente usado en la carpeta Ejercicio_3. (para su ejecución se puede utilizar tanto Postman como Newman)
Se agrega también el resultado del test: Ejercicio_3.postman_test_run.json


## Aclaraciones:

* El presente proyecto se toma como respuesta a una prueba técnica por lo que pueden haber comentarios, referencias y aclaraciones que carecen de sentido o pueden obviarse si se enfoca el proyecto a un ámbito profesional. 
* Se implemento un patrón de diseño Page Object Model que mejora la mantenibilidad del código pero en ocasiones puede ser menos legible a simple vista por el usuario, esto puede modificarse o atenerse a los parámetros establecidos en cada marco laboral.
* Los ejercicios realizados son breves por lo que no se planteo un código 100% modular y escalable a futuro, ya que para estas actividades complejizaria el código sin un beneficio directo.
* Se utilizo Node.js, Cypress, Cucumber y una integración con BrowserStack que permite probar los test en distintos navegadores y sistemas operativos mediante una virtualización. Dado que se hizo en una cuenta trial actualmente esta utilidad no funciona por no contar con minutos de prueba.





## Proceso de instalación y prueba del repositorio:


### Requisitos Previos

#### Tener instalado Node.js. 

El proyecto se realizo con Node.js v20.12.2 pero con Node.js 18.x es suficiente.

Se puede corroborar la versions instalada desde la consola de comandos de windows (cmd.exe) con la linea: 
```bash
node -v
```

Si no se tiene instalado se puede descargar desde: https://nodejs.org/es/download/ 

#### Tener instalado NPM (requiere Node.js previamente)

El proyecto se realizo con NPM 10.5.0. 

Se puede corroborar la versions instalada desde la consola de comandos de windows (cmd.exe) con la linea: 
```bash
npm -v
```

Si no se tiene instalado se puede instalar (previamente es necesario tener instalado Node.js) desde la consola de comandos de windows (cmd.exe) con la linea: 
```bash
npm install npm@latest -g
```

#### Tener Git instalado (opcional)

(Esta herramienta no es 100% necesaria ya que se puede descargar el repositorio como un zip y montarlo en la local.)

Se puede corroborar la versions instalada desde la consola de comandos de windows (cmd.exe) con la linea: 
```bash
git --version
```

Si se desea instalar se puede hacer desde https://gitforwindows.org/


#### Tener Newman + reporter instalado (opcional, se puede ejecutar el test directamente desde Postman)

Para el proyecto se uso Newman v6.1.2 y Reporter-htmlextra v1.23.1.

Se puede corroborar la versions instalada desde la consola de comandos de windows (cmd.exe) con la linea: 

Para Newman:
```bash
newman -v
```

Para Reporter-htmlextra:
```bash
newman-reporter-htmlextra -v
```

Si no se tienen instalados se puede instalar (previamente es necesario tener instalado Node.js) desde la consola de comandos de windows (cmd.exe) con la linea: 

Para Newman:
```bash
npm install -g newman
```

Para Reporter-htmlextra:
```bash
npm install -g newman-reporter-htmlextra
```



***
### Instalación del repositorio:  

1. Clona este repositorio en tu local: (si no tienes git instalado deberás descargarlo y descomprimirlo)

```bash
git clone https://github.com/Mariancras/Prueba_Tecnica_Inditex.git
```

2. Ubicarse en el directorio del proyecto:

```bash
cd Prueba_Tecnica_Inditex
```

3. Instalar las dependencias necesarias del proyecto:

```bash
npm install
```


***
### Ejecución de pruebas - Ejercicio 2:

Se recomienda ejecutar las pruebas con la interfaz gráfica de cypress para poder seleccionar el navegador, puede hacerse con:

En consola, dentro del directorio Prueba_Tecnica_Inditex:
```bash
npx cypress open
```

También puede realizar los test de formas headless cpn el Browser Electron 118 con el comando:

En consola, dentro del directorio Prueba_Tecnica_Inditex:
```bash
npm test
```

***
### Ejecución de pruebas Ejercicio 3:

Para ejecutar los test con Newman:

En consola, dentro del directorio Prueba_Tecnica_Inditex ingreso a la carpeta Ejercicio 3:
```bash
cd Ejercicio_3
```

Ejecuto Newman utilizando la colección y el ambiente exportado:
```bash
newman run Ejercicio_3.postman_collection.json -e Test_Environment.postman_environment.json
```

Para ejecutar los test con Postman:
(se adjuntan los resultados del test en postman: Ejercicio_3.postman_test_run.json)

1.Importe la colección: Ejercicio_3.postman_collection.json

2.Importe el ambiente: Test_Environment.postman_environment.json

3.Ejecute la Colección

