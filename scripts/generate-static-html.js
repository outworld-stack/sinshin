import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');

const routes = [
  '/',
  '/products',
  '/articles',
  '/aboutus',
  '/Gallery'
];

async function generateStaticHTML() {
  console.log('Starting static HTML generation...');

  const distDir = path.resolve(projectRoot, 'dist');
  // اطمینان از وجود پوشه dist
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }

  // ایجاد سرور Vite در حالت middleware
  const server = await createServer({
    configFile: path.resolve(projectRoot, 'vite.config.js'),
    server: { middlewareMode: true },
    appType: 'spa'
  });

  try {
    for (const route of routes) {
      console.log(`Processing route: ${route}`);

      const indexHtmlPath = path.resolve(projectRoot, 'index.html');
      let htmlContent = fs.readFileSync(indexHtmlPath, 'utf-8');

      // اعمال transform مخصوص مسیر
      const transformed = await server.transformIndexHtml(route, htmlContent);

      let filePath;
      if (route === '/') {
        filePath = path.join(distDir, 'index.html');
      } else {
        // تبدیل '/products' به 'products.html'
        const routeName = route.slice(1); // حذف اسلش اول
        filePath = path.join(distDir, `${routeName}.html`);
      }

      // اطمینان از وجود دایرکتوری (احتیاط)
      const dir = path.dirname(filePath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }

      fs.writeFileSync(filePath, transformed);
      console.log(`Created: ${filePath}`);
    }

    console.log('Static HTML generation completed!');
  } catch (error) {
    console.error('Error generating static HTML:', error);
    process.exit(1);
  } finally {
    await server.close();
  }
}

generateStaticHTML();