Bienvenido al proyecto llamado "HECHO EN OAXACA"  
El proyecto está hecho a base de una idea que el equipo ha desarrollado, mismo que consiste en un marketplace para la venta de productos artesanales la cual conlleva el uso de la web 3.0, es decir, la plataforma en la que hemos pensado y misma de la que se ha plasmado las ideas principales en este proyecto consiste en el uso de una wallet digital para el acceso de los usuarios en cualquier plataforma como es en la que hemos pensado.  

El siguiente sistema consiste en una plataforma online enfocada a la web 3.0 para ofrecer servicios para los artesanos en ellos puedan vender sus productos como lo son las artesanías, textiles y dulces. En donde los usuarios puedan comprar productos autentificados.  

Si desea probar su proyecto localmente, puede utilizar los siguientes comandos:  
Inicia la réplica, ejecutándose en segundo plano.  
`dfx start --background`  
Instala las librerías necesarias.  
`npm install`  
Implementa sus contenedores en la réplica y genera su interfaz candid.  
`dfx deploy`  

Para obtener más información antes de comenzar a trabajar con conectando, consulte la siguiente documentación disponible en línea:  

Inicio rápido  
[Herramientas de desarrollo SDK](https://internetcomputer.org/docs/current/developer-docs/build/install-upgrade-remove)  
Guía del lenguaje de programación Motoko  
Referencia rápida del lenguaje Motoko  
Referencia de la API de JavaScript  
# Clonar el proyecto

https://github.com/MLR062998/C-digo-Hecho-en-Oaxaca.git
# Ejecuta el comando para despliegue

npm install
# Deten procesos de dfx que tengas iniciados, (en dado caso que no omite este comando):

pkill dfx
# Verifica los procesos detenidos de dfx:

ps aux | grep dfx
# Iniciar dfx:

dfx start
# Compilar canister

dfx build
# Desplegar:
dfx deploy y npm run dev

`Si desea comenzar a trabajar en su proyecto de inmediato, puede probar los siguientes comandos:  
Estar en la raíz del proyecto (codigoHechoenOaxaca)`  
`dfx help`  
`dfx canister --help`  

Ejecutando el proyecto localmente  
Si desea probar su proyecto localmente, puede utilizar los siguientes comandos:  

# Inicia la réplica, ejecutándose en segundo plano.  
`dfx start --background`

# Implementa tus contenedores en la réplica y genera tu interfaz sincera  
`dfx deploy`  
Una vez que se complete el trabajo, su aplicación estará disponible en `http://localhost:4943?canisterId={asset_canister_id}`.  

Si ha realizado cambios en su contenedor backend, puede generar una nueva interfaz sincera con  
`npm run generate`  
en cualquier momento. Esto se recomienda antes de iniciar el servidor de desarrollo frontend y se ejecutará automáticamente cada vez que ejecute `dfx deploy`.

Si está realizando cambios en la interfaz, puede iniciar un servidor de desarrollo con  
`npm start`  
Lo que iniciará un servidor en `http://localhost:8080`, enviando solicitudes de API a la réplica en el puerto 4943.  

Nota sobre las variables de entorno del frontend  
Si aloja código de interfaz en algún lugar sin utilizar DFX, es posible que deba realizar uno de los siguientes ajustes para garantizar que su proyecto no obtenga la clave raíz en producción:  

- Establezca `DFX_NETWORK` en `ic` si está utilizando Webpack.  
- Utilice su propio método preferido para reemplazar `process.env.DFX_NETWORK` en las declaraciones generadas automáticamente.  
- Configurar contenedores -> `{asset_canister_id}` -> declaraciones -> `env_override` en una cadena en `dfx.json` reemplazará `process.env.DFX_NETWORK` con la cadena en las declaraciones generadas automáticamente.  
- Escribe tu propio constructor `createActor`.  

## Important
Para el correcto funcionamiento de la plataforma en desarrollo es necesario instalar estas librerías:  
`npm install react-router-dom`  
`npm install react react-dom`  
`npm install reactstrap`  
`npm install react-modal`  
`npm install react-icons`  
`npm install bootstrap`  
`npm install style-loader css-loader --save-dev`  
`npm install styled-components`

## Tecnologías utilizadas
Los lenguajes con los que se desarrollo es haciendo uso de Motoko y React.


