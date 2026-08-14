# Radar de Equipos – Sitio web

Sitio estático listo para publicar en un host gratuito.

## Archivos
- `index.html`
- `styles.css`
- `app.js`

## Fuente de datos
El sitio incrusta la vista web del archivo de Excel ubicado en SharePoint/OneDrive:

`https://lacomer413-my.sharepoint.com/:x:/g/personal/manuelalvarez_lacomer413_onmicrosoft_com/IQBEkYF2vcneQ7Q8Ofum5R6DAdD9379cuC9-2FtNLEjXSGQ?e=u16GmE`

El sitio no copia la base de datos. El flujo operativo sigue siendo:

**Microsoft Forms → Power Automate → Excel/Power Query → Hoja Reporte → Sitio web**

## Publicar gratis

### Netlify
1. Descomprime este ZIP.
2. Entra a Netlify.
3. Arrastra la carpeta completa al área de despliegue manual.
4. Netlify generará una URL HTTPS.

### GitHub Pages
1. Crea un repositorio.
2. Sube `index.html`, `styles.css` y `app.js`.
3. Activa Pages desde Settings → Pages.

### Cloudflare Pages
1. Crea un nuevo proyecto de Pages.
2. Sube o conecta la carpeta/repositorio.
3. No requiere proceso de build; el directorio raíz contiene el sitio.

## Importante sobre SharePoint
La visualización embebida depende de la configuración de permisos de Microsoft 365.

- Si el libro exige autenticación, el usuario verá el inicio de sesión de Microsoft dentro o antes de la vista.
- Si SharePoint impide el iframe por políticas del tenant, usa el botón **Abrir en Excel** o genera desde Microsoft 365 un vínculo específico de **Insertar/Embed** y reemplaza el `src` del iframe en `index.html`.
- Publicar esta web en GitHub Pages/Netlify hace públicos los archivos HTML/CSS/JS. El vínculo de SharePoint queda visible en el código fuente, aunque el contenido del libro seguirá protegido por los permisos configurados en Microsoft 365.

## Personalización
El diseño usa una estética editorial minimalista en blanco, negro y verde, inspirada en el lenguaje visual contemporáneo de OpenAI, sin usar logotipos oficiales.
