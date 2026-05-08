#!/usr/bin/env node
// Cross-platform bundle analyzer runner.
// `ANALYZE=true next build` works on bash but not on Windows cmd/PowerShell,
// so we set the env var in Node and spawn `next build` ourselves.
const { spawnSync } = require('node:child_process');
const path = require('node:path');

const isWindows = process.platform === 'win32';
const nextBin = path.join(
  __dirname,
  '..',
  'node_modules',
  '.bin',
  isWindows ? 'next.cmd' : 'next',
);

const result = spawnSync(nextBin, ['build'], {
  stdio: 'inherit',
  env: { ...process.env, ANALYZE: 'true' },
  shell: false,
});

process.exit(result.status ?? 1);
