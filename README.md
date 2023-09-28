# Como instalar el script para que se ejecute cada vez que se inicia Windows

Estando en la carpeta raíz del proyecto:

0. npm install
1. npm install -g pm2
2. npm install pm2-windows-startup -g
3. pm2-startup installs
4. pm2 start usb_print_server.js (con esto arranca el script)
5. pm2 save (con esto se debería iniciar con Windows, para revertir usar `pm2 cleardump`)

Para ver el estado del script corriendo: `pm2 status`
Para apagar los scripts: `pm2 kill`
Para revertir el pm2 save: `pm2 cleardump`

En caso de reemplazar/actualizar el codigo, revisar el estado del servicio con `pm2 status` y si esta corriendo
apagarlo con `pm2 kill` y volver a correr ejecutando `pm2 start usb_print_server.js` y dspues `pm2 save`.
