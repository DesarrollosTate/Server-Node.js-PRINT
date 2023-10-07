# Servidor NODE.JS impresion remota

Instalar Node.JS de ser necesario, version 16.13.0 (ver como hacer instalacion de NVM mas abajo)

## Estando en la carpeta raíz del proyecto:

```bash
    npm install
```

Si no se instala ver posibles errores mas abajo.

### Instalacion de PM2

```bash
    npm install -g pm2
```

### Arrancar el script

```bash
    pm2 start usb_print_server.js
```

### Para arrancar con inicio de Window:

Ubicar el archivo automatizacion.bat en el repositorio descargado, abrir ejecutar (Win + R), poner 'shell:strartup' , enter y copiar el archivo en la carpeta.

## Instalacion de NVM

1. Descargar NVM desde el siguiente link: https://github.com/coreybutler/nvm-windows#nvm-for-windows
2. Una vez descargado verificar instalacion con 'nvm --v'
3. Para instalar version 16.13.0 de Node con nvm ejecutar 'nvm install v16.13.0'
4. Una vez instalada la version vamos a hacer uso de la version con 'nvm use v16.13.0'
5. Para ver si esta corriendo esa version de NVM ejecutar 'nvm list'. Verá en la pantalla las versiones de Node instaladas en la pc (En caso de tener otras versiones) y marcada con \* la version que esta en uso.

## Posibles errores

### No se instala el npm install

Lo que hay que hacer en este caso es verificar que tengamos git descargado en nuestra maquina. Si no esta instalado hacer la respectiva instalacion y hacer la configuracion global de git que seria:

1. git config --global user.name "username"
2. git config --global user.email "useremail@gmail.com"

Volver a tirar npm install, si no se instala verificar que la version de Node sea la correcta (16.13.0). De ser dicha version tirar 'npm install --force'

## Adicionales

Para ver el estado del script corriendo: `pm2 status`
Para apagar los scripts: `pm2 kill`
Para revertir el pm2 save: `pm2 cleardump`

En caso de reemplazar/actualizar el codigo, revisar el estado del servicio con `pm2 status` y si esta corriendo
apagarlo con `pm2 kill` y volver a correr ejecutando `pm2 start usb_print_server.js` y dspues `pm2 save`.
