/**
 * IndexNow notification script
 * Sends recently changed URLs to search engines via IndexNow API
 * Run after sitemap generation: npm run postbuild
 */

const fs = require('node:fs');
const path = require('node:path');
const https = require('node:https');

const SITE_URL = 'https://www.arteonagency.pl';
const INDEX_NOW_KEY = '07acb80d206b4bceb1264b34217656b2';
const INDEX_NOW_ENDPOINT = 'https://api.indexnow.org/indexnow';

/**
 * Parse sitemap XML and extract URLs
 */
function parseSitemapUrls(xmlContent) {
  const urls = [];
  const locRegex = /<loc>([^<]+)<\/loc>/g;
  let match;
  while ((match = locRegex.exec(xmlContent)) !== null) {
    urls.push(match[1]);
  }
  return urls;
}

/**
 * Read all URLs from generated sitemaps
 */
function getAllSitemapUrls() {
  const publicDir = path.join(process.cwd(), 'public');
  const sitemapFiles = fs.readdirSync(publicDir).filter((f) => f.startsWith('sitemap') && f.endsWith('.xml'));

  const allUrls = [];
  for (const file of sitemapFiles) {
    const content = fs.readFileSync(path.join(publicDir, file), 'utf8');

    // Check if it's a sitemap index
    if (content.includes('<sitemapindex')) {
      // Skip index file, we'll read individual sitemaps
      continue;
    }

    const urls = parseSitemapUrls(content);
    allUrls.push(...urls);
  }

  return [...new Set(allUrls)]; // Remove duplicates
}

/**
 * Send URLs to IndexNow API
 */
function sendToIndexNow(urls) {
  return new Promise((resolve, reject) => {
    if (urls.length === 0) {
      console.log('No URLs to submit to IndexNow');
      resolve();
      return;
    }

    // IndexNow accepts max 10,000 URLs per request
    const batch = urls.slice(0, 10000);

    const payload = JSON.stringify({
      host: 'www.arteonagency.pl',
      key: INDEX_NOW_KEY,
      keyLocation: `${SITE_URL}/${INDEX_NOW_KEY}.txt`,
      urlList: batch,
    });

    const options = {
      hostname: 'api.indexnow.org',
      port: 443,
      path: '/indexnow',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(payload),
      },
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          console.log(`✓ IndexNow: Submitted ${batch.length} URLs (status: ${res.statusCode})`);
          resolve();
        } else {
          console.log(`⚠ IndexNow response: ${res.statusCode} - ${data}`);
          // Don't fail build on IndexNow errors
          resolve();
        }
      });
    });

    req.on('error', (err) => {
      console.log(`⚠ IndexNow error: ${err.message}`);
      // Don't fail build on IndexNow errors
      resolve();
    });

    req.write(payload);
    req.end();
  });
}

async function main() {
  try {
    console.log('IndexNow: Reading sitemaps...');
    const urls = getAllSitemapUrls();
    console.log(`IndexNow: Found ${urls.length} URLs`);

    await sendToIndexNow(urls);
  } catch (err) {
    console.log(`⚠ IndexNow script error: ${err.message}`);
    // Don't fail build
  }
}

main();
