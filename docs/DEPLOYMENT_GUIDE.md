# 🌐 DEPLOYMENT GUIDE - Poner Online tu App

## 🎯 3 Opciones de Deploy

---

## ✅ Opción 1: Netlify (RECOMENDADO)

### Paso 1: Preparar Build
```bash
npm run build
```

### Paso 2: Opción A - Drag & Drop (Más Fácil)

1. Abre https://app.netlify.com/drop
2. Arrastra carpeta `/build`
3. ¡Listo! Tu URL en 1 minuto

**Resultado**: `https://random-name.netlify.app`

### Paso 2: Opción B - GitHub (Deploy Automático)

1. **Crea cuenta Netlify** https://netlify.com
2. **Conecta GitHub**
   - Click: "New site from Git"
   - Selecciona: GitHub
   - Autoriza Netlify
   - Selecciona repositorio

3. **Configuración de Build**
   - Build command: `npm run build`
   - Publish directory: `build`
   - Click: "Deploy site"

4. **Automatización**
   - Cada push a `main` = deploy automático
   - Status badge en GitHub

### Configurar Dominio Personalizado

```
1. Settings → Domain management
2. Click: "Add custom domain"
3. Ingresa: tudominio.com
4. Sigue instrucciones DNS
5. ¡Listo en 24-48 horas!
```

---

## ✅ Opción 2: Vercel

### Paso 1: Preparar
```bash
npm run build
```

### Paso 2: Deploy

1. **Abre** https://vercel.com
2. **Click** "New Project"
3. **Selecciona** repositorio
4. **Automático** - Detecta React
5. **Click** "Deploy"

### Configuración
- Build: Automática
- Deploy: Automático en cada push
- Dominio: `proyecto.vercel.app`

### Dominio Personalizado
```
Settings → Domains → Add
Sigue instrucciones DNS
```

---

## ✅ Opción 3: GitHub Pages

### Paso 1: Configurar package.json

Abre `package.json` y agrega:
```json
{
  "homepage": "https://username.github.io/soe-app",
  "scripts": {
    ...
  }
}
```

Reemplaza `username` con tu usuario GitHub.

### Paso 2: Instalar gh-pages

```bash
npm install --save-dev gh-pages
```

### Paso 3: Actualizar Scripts

En `package.json`:
```json
{
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "deploy": "npm run build && gh-pages -d build",
    "predeploy": "npm run build"
  }
}
```

### Paso 4: Deploy

```bash
npm run deploy
```

### Paso 5: Activar GitHub Pages

1. Repositorio → Settings
2. Pages → Source
3. Selecciona: `gh-pages` branch
4. Click: Save

**Resultado**: `https://username.github.io/soe-app`

---

## 🚀 Comparativa de Opciones

| Criterio | Netlify | Vercel | GitHub Pages |
|----------|---------|--------|--------------|
| Facilidad | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| Gratis | ✅ | ✅ | ✅ |
| Auto deploy | ✅ | ✅ | ✅ |
| Dominio custom | ✅ | ✅ | ⚠️ (limitado) |
| Performance | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| Analytics | ✅ | ✅ | ❌ |
| Serverless | ✅ | ✅ | ❌ |

---

## 🔧 Troubleshooting

### Error: "Cannot find build folder"
```bash
# Reconstruye
npm run build
# Verifica carpeta /build existe
ls -la build/
```

### Error: "npm: command not found"
```bash
# Instala Node.js https://nodejs.org
# En Windows: descarga e instala
# En Mac: brew install node
# Verifica: node --version
```

### App muestra 404
- Verifica: `npm run build` completó
- Verifica: carpeta `build/` tiene archivos
- Limpia cache: Ctrl+Shift+R (o Cmd+Shift+R)

### Build falla
```bash
# Limpia
rm -rf node_modules package-lock.json
npm install
npm run build
```

---

## 📊 Post-Deploy Checklist

```
☐ URL pública funciona
☐ Cargan todas las páginas
☐ Responsive en móvil
☐ Sin errores en console
☐ Imágenes cargan
☐ Animaciones funcionan
☐ Formularios envían (si hay)
☐ Velocidad aceptable (< 3seg)
☐ SEO basic (favicon, meta tags)
☐ HTTPS activo
```

---

## ⚡ Optimizaciones Post-Deploy

### 1. Agregar Favicon
```html
<!-- En public/index.html -->
<link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
```

### 2. Meta Tags para SEO
```html
<meta name="description" content="SOE - Generador de Ideas para Videos TikTok">
<meta name="keywords" content="tiktok, videos, ideas, generador">
<meta property="og:image" content="screenshot.jpg">
```

### 3. Comprimir Imágenes
```bash
npm install --save-dev imagemin-webpack-plugin
# Reduce tamaño de assets
```

### 4. Monitorar Performance
- Abre DevTools (F12)
- Tab: Network
- Verifica tiempos de carga
- Target: < 3 segundos

---

## 🎯 Próximos Pasos

1. **Deploy** una de las 3 opciones
2. **Verifica** funciona en mobile
3. **Comparte** URL con amigos
4. **Recibe feedback**
5. **Itera** y mejora

---

## 📞 Soporte

- Netlify: https://support.netlify.com
- Vercel: https://vercel.com/support
- GitHub: https://docs.github.com/en/pages

---

**Versión**: 1.0  
**Última actualización**: 2026-06-13
