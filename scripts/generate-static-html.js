import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');

const routes = [
  '/sinshin/',
  '/sinshin/products',
  '/sinshin/articles',
  '/sinshin/aboutus',
  '/sinshin/Gallery'
];

async function generateStaticHTML() {
  console.log('Starting static HTML generation...');

  // Create a Vite server in production mode
  const server = await createServer({
    configFile: path.resolve(projectRoot, 'vite.config.js'),
    server: { middlewareMode: true },
    appType: 'spa'
  });

  try {
    // Generate HTML for each route
    for (const route of routes) {
      console.log(`Processing route: ${route}`);

      // Transform the index.html
      const transformed = await server.transformIndexHtml(route, 
        fs.readFileSync(path.resolve(projectRoot, 'index.html'), 'utf-8')
      );

      // Create the file path
      let filePath;
      if (route === '/sinshin/') {
        filePath = path.resolve(projectRoot, 'dist', 'index.html');
      } else {
        // Remove the /sinshin/ prefix and add .html
        const routePath = route.replace('/sinshin/', '');
        filePath = path.resolve(projectRoot, 'dist', `${routePath}.html`);
      }

      // Ensure directory exists
      const dir = path.dirname(filePath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }

      // Write the HTML file
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
