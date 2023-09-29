# Como instalar el script para que se ejecute cada vez que se inicia Windows

Instalar Node.JS de ser necesario, version 16.13.0

Estando en la carpeta raíz del proyecto:

0. npm install 01. Si ocurre algun problema con el comando npm install descargar git en caso de no tenerlo y poner las credenciales. 02. git config --global user.name 'Enzo' 03. git config --global user.email 'enzo_vazquez@outlook.com' 04. Volver a tirar npm install, si no se installa probar con npm install --f
1. npm install -g pm2 (con esto se instala el pm2)
2. npm install pm2-windows-startup -g
3. pm2-startup installs
4. pm2 start usb_print_server.js (con esto arranca el script)
5. pm2 save (con esto se debería iniciar con Windows, para revertir usar `pm2 cleardump`)

Para ver el estado del script corriendo: `pm2 status`
Para apagar los scripts: `pm2 kill`
Para revertir el pm2 save: `pm2 cleardump`

En caso de reemplazar/actualizar el codigo, revisar el estado del servicio con `pm2 status` y si esta corriendo
apagarlo con `pm2 kill` y volver a correr ejecutando `pm2 start usb_print_server.js` y dspues `pm2 save`.
