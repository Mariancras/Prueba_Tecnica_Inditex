## Ejercicio 3: "Tratamiento de datos en APIs"
Resuelto en Postman y ejecutado en Newman. Se aporta la colección y ambiente usado en la carpeta Ejercicio_3. (para su ejecución se puede utilizar tanto Postman como Newman)
Se agrega tambien el resultado del test: Ejercicio_3.postman_test_run.json

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


### Instalación del repositorio:  

1. Clona este repositorio en tu local: (si no tienes git instalado deberás descargarlo y descomprimirlo)

```bash
git clone https://github.com/Mariancras/PRUEBA_TECNICA_INDITEX.git
```

2. Ubicarse en el directorio del proyecto:

```bash
cd PRUEBA_TECNICA_INDITEX
```

3. Instalar las dependencias necesarias del proyecto:

```bash
npm install
```



### Ejecución de pruebas Ejercicio 3:

Para ejecutar los test con Newman:

En consola, dentro del directorio PRUEBA_TECNICA_INDITEX ingreso a la carpeta Ejercicio 3:
```bash
cd Ejercicio_3
```

Ejecuto Newman utilizando la colección y el ambiente exportado:
```bash
newman run Ejercicio_3.postman_collection.json -e Test_Environment.postman_environment.json
```

## Para ejecutar los Test con Postman:
(se adjuntan los resultados del test en postman: Ejercicio_3.postman_test_run.json)

Importe la colección: Ejercicio_3.postman_collection.json

Importe el ambiente: Test_Environment.postman_environment.json

Ejecute la Colección