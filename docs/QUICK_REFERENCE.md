# ⚡ QUICK REFERENCE - Copy/Paste Commands

## 🚀 Setup Inicial

```bash
# Clona repositorio
git clone https://github.com/montesjoseines24-lang/Soe-app.git
cd Soe-app

# Instala dependencias
npm install

# Inicia servidor local
npm start

# Abre en navegador
http://localhost:3000
```

---

## 💻 Comandos Principales

### Desarrollo
```bash
npm start       # Servidor local (http://localhost:3000)
npm test        # Ejecuta tests
npm run build   # Build para producción
npm run eject   # ⚠️ No usar - irreversible
```

### Git
```bash
# Estado
git status
git log --oneline

# Commits
git add .
git commit -m "tu mensaje"
git push origin main

# Ramas
git branch
git checkout -b nombre-rama
git switch main
```

---

## 🔧 Troubleshooting Rápido

### Error: "npm: command not found"
```bash
# Windows/Mac/Linux
# Descarga Node.js https://nodejs.org
# Verifica instalación
node --version
npm --version
```

### Error: "Port 3000 already in use"
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -i :3000
kill -9 <PID>

# O usa otro puerto
PORT=3001 npm start
```

### App no carga
```bash
# Limpia todo
rm -rf node_modules package-lock.json
npm install
npm start

# Clearing cache
Ctrl+Shift+Delete (DevTools) → Clear
```

---

## 🌐 Deploy Rápido

### Netlify Drag & Drop
```bash
npm run build
# Arrastra carpeta /build a:
https://app.netlify.com/drop
```

### Netlify GitHub (Automático)
```bash
# 1. Push a GitHub
git push origin main

# 2. En Netlify conecta GitHub
# 3. Deploy automático en cada push
```

### GitHub Pages
```bash
npm install --save-dev gh-pages
npm run deploy
```

---

## 📁 Estructura Rápida

```
soe-app/
├── docs/                # 📚 Documentación
├── src/                 # 💻 Código
│   ├── components/      # React components
│   ├── utils/           # Funciones helper
│   ├── data/            # JSON data
│   ├── App.jsx
│   └── index.js
├── public/              # 🌐 HTML/Assets
├── package.json         # Dependencias
└── README.md            # Guía principal
```

---

## 📦 Agregar Dependencias

```bash
# Instalar paquete
npm install nombre-paquete

# Con versión específica
npm install nombre-paquete@1.2.3

# Dev dependency
npm install --save-dev nombre-paquete

# Desinstalar
npm uninstall nombre-paquete
```

---

## 🎨 Componentes Básicos

### Crear componente funcional
```jsx
// src/components/MiComponente.jsx
export default function MiComponente() {
  return <div>Hola mundo</div>;
}
```

### Usar en App.jsx
```jsx
import MiComponente from './components/MiComponente';

export default function App() {
  return <MiComponente />;
}
```

### Con props
```jsx
// Componente
export default function Saludo({ nombre }) {
  return <h1>Hola {nombre}</h1>;
}

// Uso
<Saludo nombre="Juan" />
```

### Con state
```jsx
import { useState } from 'react';

export default function Contador() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}
```

---

## 📊 Importar Recharts

```jsx
import { LineChart, Line, XAxis, YAxis } from 'recharts';

const data = [
  { name: 'Ene', value: 400 },
  { name: 'Feb', value: 300 },
];

export default function Grafico() {
  return (
    <LineChart width={400} height={300} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Line type="monotone" dataKey="value" />
    </LineChart>
  );
}
```

---

## 💾 Guardar en LocalStorage

```jsx
// Guardar
localStorage.setItem('clave', JSON.stringify(datos));

// Obtener
const datos = JSON.parse(localStorage.getItem('clave'));

// Eliminar
localStorage.removeItem('clave');

// Limpiar todo
localStorage.clear();
```

---

## 🌍 Variables de Entorno

### Crear .env
```
REACT_APP_API_URL=https://api.example.com
REACT_APP_VERSION=1.0.0
```

### Usar en código
```jsx
const apiUrl = process.env.REACT_APP_API_URL;
console.log(apiUrl);
```

---

## 🎯 Debugging

### Console Logging
```jsx
console.log('texto:', variable);
console.error('Error:', error);
console.table(arrayDatos);
```

### React DevTools
- Descarga extensión Chrome: React Developer Tools
- F12 → Componentes

### Network Tab
- F12 → Network
- Revisa requests/responses
- Verifica status codes

---

## 📱 Responsive Design

```css
/* Mobile first */
.container {
  padding: 10px;
}

/* Tablet y arriba */
@media (min-width: 768px) {
  .container {
    padding: 20px;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .container {
    padding: 40px;
  }
}
```

---

## 🔐 Seguridad Básica

```jsx
// NO hacer
const url = `https://api.com/user?id=${userId}`;

// Sí hacer
const url = new URL('https://api.com/user');
url.searchParams.append('id', userId);

// XSS Protection
import DOMPurify from 'dompurify';
const clean = DOMPurify.sanitize(userInput);
```

---

## 📈 Performance

```bash
# Analizar bundle
npm install -g webpack-bundle-analyzer

# Build con análisis
npm run build -- --analyze
```

---

## 🚀 Keyboard Shortcuts

| Shortcut | Acción |
|----------|--------|
| F12 | DevTools |
| Ctrl+K | Command palette |
| Ctrl+/ | Comentar código |
| Ctrl+D | Seleccionar palabra siguiente |
| Alt+↑↓ | Mover línea |

---

## 📞 Recursos Rápidos

- React: https://react.dev
- Recharts: https://recharts.org
- Netlify: https://netlify.com
- Vercel: https://vercel.com
- MDN Web: https://developer.mozilla.org

---

**Última actualización**: 2026-06-13
