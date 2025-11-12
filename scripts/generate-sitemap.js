// generate-sitemap.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the current directory in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Helper function to extract data from JSX files
function extractDataFromJsx(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Find the start of the array
  const arrayStart = content.indexOf('[');
  if (arrayStart === -1) {
    throw new Error(`Could not find array start in ${filePath}`);
  }
  
  // Find the matching closing bracket
  let bracketCount = 0;
  let arrayEnd = -1;
  
  for (let i = arrayStart; i < content.length; i++) {
    if (content[i] === '[') {
      bracketCount++;
    } else if (content[i] === ']') {
      bracketCount--;
      if (bracketCount === 0) {
        arrayEnd = i + 1; // Include the closing bracket
        break;
      }
    }
  }
  
  if (arrayEnd === -1) {
    throw new Error(`Could not find array end in ${filePath}`);
  }
  
  const arrayString = content.substring(arrayStart, arrayEnd);
  
  try {
    // Use eval to parse the array - this is safe since we control the file content
    // eslint-disable-next-line no-eval
    return eval(arrayString);
  } catch (error) {
    throw new Error(`Error parsing data from ${filePath}: ${error.message}`);
  }
}

// Load the data
const articles = extractDataFromJsx(path.join(__dirname, '../src/datas/ArticlesData.jsx'));
const products = extractDataFromJsx(path.join(__dirname, '../src/datas/ProductsDatas.jsx'));

const baseUrl = 'https://www.sinshini.ir';
const distPath = path.resolve(__dirname, '../dist');

// Get current date in YYYY-MM-DD format
const currentDate = new Date().toISOString().split('T')[0];


if (!fs.existsSync(distPath)) {
  console.error('❌ پوشه dist یافت نشد. ابتدا پروژه را build کنید.');
  process.exit(1);
}



// Static pages
const mainPages = [
  { url: '/', priority: '1.0', changefreq: 'daily' },
  { url: '/products', priority: '0.9', changefreq: 'weekly' },
  { url: '/articles', priority: '0.8', changefreq: 'weekly' },
  { url: '/about', priority: '0.7', changefreq: 'monthly' },
  { url: '/gallery', priority: '0.6', changefreq: 'monthly' },
  { url: '/contact', priority: '0.5', changefreq: 'yearly' }
];

function generateUrlEntry(url, priority, changefreq) {
  return `  <url>
    <loc>${baseUrl}${url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

// تولید سایت‌مپ اصلی
let mainSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

mainPages.forEach(page => {
  mainSitemap += generateUrlEntry(page.url, page.priority, page.changefreq);
});

mainSitemap += '\n</urlset>';

// تولید سایت‌مپ محصولات
let productsSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

products.forEach(product => {
  productsSitemap += generateUrlEntry(
    `/products/${product.slug}`,
    '0.8',
    'weekly'
  );
});

productsSitemap += '\n</urlset>';

// تولید سایت‌مپ مقالات
let articlesSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

articles.forEach(article => {
  articlesSitemap += generateUrlEntry(
    `/articles/${article.slug}`,
    '0.7',
    'monthly'
  );
});

articlesSitemap += '\n</urlset>';

// تولید سایت‌مپ ایندکس
let indexSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${baseUrl}/sitemap-main.xml</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${baseUrl}/sitemap-products.xml</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${baseUrl}/sitemap-articles.xml</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </sitemap>
</sitemapindex>`;

// ذخیره فایل‌ها
try {
  fs.writeFileSync(path.join(distPath, 'sitemap-main.xml'), mainSitemap);
  fs.writeFileSync(path.join(distPath, 'sitemap-products.xml'), productsSitemap);
  fs.writeFileSync(path.join(distPath, 'sitemap-articles.xml'), articlesSitemap);
  fs.writeFileSync(path.join(distPath, 'sitemap-index.xml'), indexSitemap);

  console.log('✅ سایت‌مپ‌ها با موفقیت generated شدند!');
  console.log('📁 محل فایل‌ها:', distPath);
} catch (error) {
  console.error('❌ خطا در ذخیره فایل‌ها:', error.message);
}