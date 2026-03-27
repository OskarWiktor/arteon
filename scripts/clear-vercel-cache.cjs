#!/usr/bin/env node

/**
 * Script to clear Vercel cache after deployment
 * This ensures content changes are visible immediately
 */

const { execSync } = require('child_process');

console.log('🔄 Clearing Vercel cache...');

try {
  // Clear Vercel Edge cache
  execSync('npx vercel cache purge --scope arteonagency', { stdio: 'inherit' });
  console.log('✅ Vercel cache cleared successfully');
} catch (error) {
  console.error('❌ Failed to clear Vercel cache:', error.message);
  process.exit(1);
}
