# Servidor NODE.JS impresion remota

Instalar Node.JS de ser necesario, version 16.13.0 (con nvm)

## Estando en la carpeta raíz del proyecto:

```bash
    npm install
```

### Instalacion de PM2

```bash
    npm install -g pm2
```

```bash
    npm install pm2-windows-startup -g
```

```bash
    pm2-startup installs
```

### Arrancar el script

```bash
    pm2 start usb_print_server.js
```

### Con esto deberia iniciar con Windows, para revertir usar 'pm2 cleardump'

```bash
    pm2 save
```

## Adicionales

Para ver el estado del script corriendo: `pm2 status`
Para apagar los scripts: `pm2 kill`
Para revertir el pm2 save: `pm2 cleardump`

En caso de reemplazar/actualizar el codigo, revisar el estado del servicio con `pm2 status` y si esta corriendo
apagarlo con `pm2 kill` y volver a correr ejecutando `pm2 start usb_print_server.js` y dspues `pm2 save`.
