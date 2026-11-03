import { build } from 'vite';
import { readFile, writeFile, rm } from 'node:fs/promises';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

// Ship real page content to crawlers, link previews and visitors without JS.
// React mounts normally on the client so the intro remains a client-only effect.
await build();
const serverDir = resolve('node_modules/.cache/portfolio-prerender');
try {
  await build({
    build: {
      ssr: 'src/entry-prerender.tsx',
      outDir: serverDir,
      emptyOutDir: true,
      copyPublicDir: false,
      rollupOptions: { output: { entryFileNames: 'entry.mjs' } },
    },
  });
  const { render } = await import(pathToFileURL(resolve(serverDir, 'entry.mjs')).href);
  const template = await readFile('dist/index.html', 'utf8');
  if (!template.includes('<div id="root"></div>')) throw new Error('Missing prerender root');
  await writeFile('dist/index.html', template.replace('<div id="root"></div>', () => `<div id="root">${render()}</div>`));
  console.log('Prerendered portfolio into dist/index.html');
} finally {
  await rm(serverDir, { recursive: true, force: true });
}
