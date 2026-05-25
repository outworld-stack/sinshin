import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');

const routes = [
  '/',
  '/products',
  '/articles',
  '/aboutus',
  '/Gallery'
];

function generateStaticHTML() {
  console.log('Starting static HTML generation from built assets...');
  const distDir = path.resolve(projectRoot, 'dist');
  const indexHtmlPath = path.join(distDir, 'index.html');

  if (!fs.existsSync(indexHtmlPath)) {
    console.error('dist/index.html not found. Please run vite build first.');
    process.exit(1);
  }

  const indexContent = fs.readFileSync(indexHtmlPath, 'utf-8');

  for (const route of routes) {
    let filePath;
    if (route === '/') {
      // index.html already exists
      console.log(`Skipping root route (dist/index.html already exists)`);
      continue;
    } else {
      const routeName = route.slice(1); // remove leading slash
      filePath = path.join(distDir, `${routeName}.html`);
      // copy content of index.html to route file
      fs.writeFileSync(filePath, indexContent);
      console.log(`Created: ${filePath}`);
    }
  }

  console.log('Static HTML generation completed!');
}

generateStaticHTML();