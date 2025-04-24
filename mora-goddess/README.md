Live link: `https://midnattlantern.github.io/mora-goddess/`
This repository is dedicated to the Mora Goddess project, commissioned by Yviira. Here you can download images as well as read about the progress. I also made it as proof that I made it and that it's genuine in case it's getting compromised by someone or AI. 

This site is built on the Vite React framwork and published to GitHub pages.

Theme Font: 
```css
.Font {

}
```


Setting up Vite React:
===
``` zsh
npm create vite@latest
```

Preparing Github Pages deployment:
1. install save dev
``` zsh
npm install --save-dev gh-pages
```

2. edit `vite.config.ts` by including `base: '/repo-name/',`
```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/mora-goddess/',
  plugins: [react()],
})

```

3. edit `package.json`
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

4. deploy by running:
```zsh
npm run deploy
```


SVG support
===
1. paste in the terminal:
```svg
npm install vite-plugin-svgr --save-dev
```

2. update the file `vite.config.ts`:
```TypeScript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  base: '/mora-goddess/',
  plugins: [react(), svgr()],
})
```

3. update the file `vite-env.d-ts`:
```TypeScript
/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />
```


Routing
===
This feature has been scrapped as GitHub pages does not support Routing.
Routing allow the app to display different components depending on the routing (or link).

1. Install Routing:
```zsh
npm install react-router-dom
```

2. Inside `main.tsx`, disable:
```TypeScript
import { createRoot } from 'react-dom/client'
```

3. Inside `main.tsx`, import
```TypeScript
import { BrowserRouter } from 'react-router-dom';
import { PayPalContextProvider } from './contexts/PayPalContext.tsx';
```

4. Inside `main.tsx`, wrap the app with
``TypeScript
<BrowserRouter>
  <App />
</BrowserRouter>
```

5. Routes can be used with the Routes element:
```TypeScript
<Routes>
  <Route path="/destination" element={
    <Element />
  }/>
</Routes>
```

Unless <a> is used for downloading files, use <Link> tag instead for better and flexible routing:
```TypeScript
import { Link } from "react-router-dom";
```
```TypeScript
<Link to={"./destination"}>
    {"content"}
</Link>
```

Routing has been replaced with a custom RenderPage context, as Routing isn't supported for static Github Pages applications.

Responsive guidelines
===
desktop: more than 1024
tablet: 1024 or less
phone: 440 or less


Live link: `https://midnattlantern.github.io/mora-goddess/`