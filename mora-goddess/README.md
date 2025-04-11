This repository is dedicated to the Mora Goddess project, commissioned by Yviira. Here you can download images as well as read about the progress.

This site is built on the Vite React framwork and published to GitHub pages.

Setting up Vite React:
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