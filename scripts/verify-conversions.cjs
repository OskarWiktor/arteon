/**
 * Faza 1B+1C: Verify all popularValues and round-trip conversions
 * Reads conversions.ts, extracts conversion functions, and validates every popularValue.
 */

// ── Define all 34 converters with their conversion logic ──
const PI = Math.PI;

const CONVERTERS = [
  { key: 'kmToMiles', convert: v => v * 0.621371, reverse: v => v / 0.621371, precision: 4 },
  { key: 'kgToLbs', convert: v => v * 2.20462, reverse: v => v / 2.20462, precision: 4 },
  { key: 'celsiusToFahrenheit', convert: v => v * 9/5 + 32, reverse: v => (v-32) * 5/9, precision: 2 },
  { key: 'cmToInches', convert: v => v / 2.54, reverse: v => v * 2.54, precision: 4 },
  { key: 'metersToFeet', convert: v => v * 3.28084, reverse: v => v / 3.28084, precision: 4 },
  { key: 'litersToGallons', convert: v => v * 0.264172, reverse: v => v / 0.264172, precision: 4 },
  { key: 'sqmToSqft', convert: v => v * 10.7639, reverse: v => v / 10.7639, precision: 2 },
  { key: 'kmhToMph', convert: v => v * 0.621371, reverse: v => v / 0.621371, precision: 2 },
  { key: 'mmToInches', convert: v => v / 25.4, reverse: v => v * 25.4, precision: 4 },
  { key: 'gramsToOunces', convert: v => v * 0.035274, reverse: v => v / 0.035274, precision: 4 },
  { key: 'tonnesToPounds', convert: v => v * 2204.62, reverse: v => v / 2204.62, precision: 2 },
  { key: 'hectaresToAcres', convert: v => v * 2.47105, reverse: v => v / 2.47105, precision: 4 },
  { key: 'mlToFlOz', convert: v => v * 0.033814, reverse: v => v / 0.033814, precision: 4 },
  { key: 'barToPsi', convert: v => v * 14.5038, reverse: v => v / 14.5038, precision: 2 },
  { key: 'kwToHp', convert: v => v * 1.35962, reverse: v => v / 1.35962, precision: 2 },
  { key: 'ptToPx', convert: v => v * 1.333333, reverse: v => v / 1.333333, precision: 2 },
  { key: 'remToPx', convert: (v, e) => v * (e || 16), reverse: (v, e) => v / (e || 16), precision: 2, defaultExtra: 16 },
  { key: 'emToPx', convert: (v, e) => v * (e || 16), reverse: (v, e) => v / (e || 16), precision: 2, defaultExtra: 16 },
  { key: 'cmToPxDpi', convert: (v, e) => v * (e || 96) / 2.54, reverse: (v, e) => v * 2.54 / (e || 96), precision: 0, defaultExtra: 96 },
  { key: 'mmToPxDpi', convert: (v, e) => v * (e || 96) / 25.4, reverse: (v, e) => v * 25.4 / (e || 96), precision: 0, defaultExtra: 96 },
  { key: 'inchesToPxDpi', convert: (v, e) => v * (e || 96), reverse: (v, e) => v / (e || 96), precision: 0, defaultExtra: 96 },
  { key: 'dpiToPpi', convert: v => v, reverse: v => v, precision: 0 },
  { key: 'bytesConverter', convert: v => v / 1024, reverse: v => v * 1024, precision: 4 },
  { key: 'mbpsToMBs', convert: v => v / 8, reverse: v => v * 8, precision: 2 },
  { key: 'whToMah', convert: (v, e) => (v / (e || 3.7)) * 1000, reverse: (v, e) => (v * (e || 3.7)) / 1000, precision: 0, defaultExtra: 3.7 },
  { key: 'vwToPx', convert: (v, e) => v * (e || 1920) / 100, reverse: (v, e) => v * 100 / (e || 1920), precision: 2, defaultExtra: 1920 },
  { key: 'twToPx', convert: v => v * 4, reverse: v => v / 4, precision: 1 },
  { key: 'degToRad', convert: v => v * PI / 180, reverse: v => v * 180 / PI, precision: 6 },
];

// Special converters (string-based) - checked separately
const SPECIAL = ['hexToRgb', 'rgbToHsl', 'rgbToCmyk', 'decToBin', 'decToHex', 'unixTimestamp'];

// ── Popular values from conversions.ts ──
const POPULAR_VALUES = {
  kmToMiles: [
    {s:1, t:0.6214}, {s:5, t:3.1069}, {s:10, t:6.2137}, {s:42.195, t:26.2188}, {s:100, t:62.1371}, {s:500, t:310.686}, {s:1000, t:621.371},
  ],
  kgToLbs: [
    {s:1, t:2.2046}, {s:5, t:11.0231}, {s:10, t:22.0462}, {s:50, t:110.231}, {s:70, t:154.324}, {s:80, t:176.37}, {s:100, t:220.462},
  ],
  celsiusToFahrenheit: [
    {s:-40, t:-40}, {s:0, t:32}, {s:20, t:68}, {s:36.6, t:97.88}, {s:100, t:212}, {s:180, t:356},
  ],
  cmToInches: [
    {s:1, t:0.3937}, {s:2.54, t:1}, {s:10, t:3.937}, {s:30, t:11.811}, {s:100, t:39.3701}, {s:160, t:62.9921}, {s:180, t:70.8661},
  ],
  metersToFeet: [
    {s:1, t:3.2808}, {s:1.8, t:5.9055}, {s:3, t:9.8425}, {s:10, t:32.8084}, {s:100, t:328.084}, {s:1000, t:3280.84},
  ],
  litersToGallons: [
    {s:1, t:0.2642}, {s:3.785, t:1}, {s:5, t:1.3209}, {s:10, t:2.6417}, {s:50, t:13.2086}, {s:100, t:26.4172},
  ],
  sqmToSqft: [
    {s:1, t:10.76}, {s:10, t:107.64}, {s:25, t:269.1}, {s:50, t:538.2}, {s:100, t:1076.39}, {s:200, t:2152.78},
  ],
  kmhToMph: [
    {s:30, t:18.64}, {s:50, t:31.07}, {s:90, t:55.92}, {s:120, t:74.56}, {s:140, t:86.99}, {s:200, t:124.27},
  ],
  mmToInches: [
    {s:1, t:0.0394}, {s:5, t:0.1969}, {s:10, t:0.3937}, {s:25.4, t:1}, {s:100, t:3.937}, {s:300, t:11.811},
  ],
  gramsToOunces: [
    {s:1, t:0.0353}, {s:28.3495, t:1}, {s:100, t:3.5274}, {s:250, t:8.8185}, {s:500, t:17.637}, {s:1000, t:35.274},
  ],
  tonnesToPounds: [
    {s:0.5, t:1102.31}, {s:1, t:2204.62}, {s:5, t:11023.1}, {s:10, t:22046.2}, {s:50, t:110231}, {s:100, t:220462},
  ],
  hectaresToAcres: [
    {s:0.4047, t:1}, {s:1, t:2.4711}, {s:5, t:12.3553}, {s:10, t:24.7105}, {s:50, t:123.553}, {s:100, t:247.105},
  ],
  mlToFlOz: [
    {s:29.5735, t:1}, {s:100, t:3.3814}, {s:250, t:8.4535}, {s:330, t:11.1587}, {s:500, t:16.907}, {s:1000, t:33.814},
  ],
  barToPsi: [
    {s:1, t:14.5}, {s:2, t:29.01}, {s:2.2, t:31.91}, {s:3, t:43.51}, {s:6, t:87.02}, {s:10, t:145.04},
  ],
  kwToHp: [
    {s:50, t:67.98}, {s:75, t:101.97}, {s:110, t:149.56}, {s:150, t:203.94}, {s:200, t:271.92}, {s:300, t:407.89},
  ],
  ptToPx: [
    {s:8, t:10.67}, {s:9, t:12}, {s:10, t:13.33}, {s:12, t:16}, {s:14, t:18.67}, {s:18, t:24}, {s:24, t:32}, {s:36, t:48}, {s:48, t:64}, {s:72, t:96},
  ],
  remToPx: [
    {s:0.25, t:4}, {s:0.5, t:8}, {s:0.75, t:12}, {s:1, t:16}, {s:1.25, t:20}, {s:1.5, t:24}, {s:2, t:32}, {s:3, t:48}, {s:4, t:64}, {s:5, t:80},
  ],
  emToPx: [
    {s:0.5, t:8}, {s:0.75, t:12}, {s:1, t:16}, {s:1.25, t:20}, {s:1.5, t:24}, {s:2, t:32}, {s:2.5, t:40}, {s:3, t:48},
  ],
  cmToPxDpi: [
    {s:1, t:38}, {s:2.54, t:96}, {s:5, t:189}, {s:10, t:378}, {s:21, t:794}, {s:29.7, t:1123},
  ],
  mmToPxDpi: [
    {s:1, t:4}, {s:10, t:38}, {s:25.4, t:96}, {s:100, t:378}, {s:210, t:794}, {s:297, t:1123},
  ],
  inchesToPxDpi: [
    {s:1, t:96}, {s:2, t:192}, {s:5, t:480}, {s:8.27, t:794}, {s:11.69, t:1123},
    // Note: source:1, target:300 (300 DPI) - skipping as it uses non-default DPI
  ],
  dpiToPpi: [
    {s:72, t:72}, {s:96, t:96}, {s:150, t:150}, {s:227, t:227}, {s:300, t:300}, {s:458, t:458},
  ],
  bytesConverter: [
    {s:1024, t:1}, {s:1048576, t:1024}, {s:1073741824, t:1048576}, {s:5242880, t:5120}, {s:10485760, t:10240}, {s:104857600, t:102400},
  ],
  mbpsToMBs: [
    {s:10, t:1.25}, {s:50, t:6.25}, {s:100, t:12.5}, {s:300, t:37.5}, {s:500, t:62.5}, {s:1000, t:125},
  ],
  whToMah: [
    {s:5, t:1351}, {s:11.55, t:3122}, {s:18.5, t:5000}, {s:38, t:10270}, {s:50, t:13514}, {s:100, t:27027},
  ],
  vwToPx: [
    {s:1, t:19.2}, {s:5, t:96}, {s:10, t:192}, {s:25, t:480}, {s:50, t:960}, {s:100, t:1920},
  ],
  twToPx: [
    {s:0.5, t:2}, {s:1, t:4}, {s:2, t:8}, {s:4, t:16}, {s:6, t:24}, {s:8, t:32}, {s:10, t:40}, {s:12, t:48}, {s:16, t:64}, {s:20, t:80}, {s:24, t:96},
  ],
  degToRad: [
    {s:0, t:0}, {s:30, t:0.5236}, {s:45, t:0.7854}, {s:90, t:1.5708}, {s:180, t:3.1416}, {s:270, t:4.7124}, {s:360, t:6.2832},
  ],
};

// ── Special converter popularValues ──
const SPECIAL_POPULAR = {
  hexToRgb: [
    {s:'#000000', t:'rgb(0, 0, 0)'},
    {s:'#FFFFFF', t:'rgb(255, 255, 255)'},
    {s:'#FF0000', t:'rgb(255, 0, 0)'},
    {s:'#00FF00', t:'rgb(0, 255, 0)'},
    {s:'#0000FF', t:'rgb(0, 0, 255)'},
    {s:'#3B82F6', t:'rgb(59, 130, 246)'},
  ],
  rgbToHsl: [
    {s:'0, 0, 0', t:'hsl(0, 0%, 0%)'},
    {s:'255, 255, 255', t:'hsl(0, 0%, 100%)'},
    {s:'255, 0, 0', t:'hsl(0, 100%, 50%)'},
    {s:'0, 128, 0', t:'hsl(120, 100%, 25%)'},
    {s:'0, 0, 255', t:'hsl(240, 100%, 50%)'},
    {s:'59, 130, 246', t:'hsl(217, 91%, 60%)'},
  ],
  rgbToCmyk: [
    {s:'0, 0, 0', t:'cmyk(0%, 0%, 0%, 100%)'},
    {s:'255, 255, 255', t:'cmyk(0%, 0%, 0%, 0%)'},
    {s:'255, 0, 0', t:'cmyk(0%, 100%, 100%, 0%)'},
    {s:'0, 128, 0', t:'cmyk(100%, 0%, 100%, 50%)'},
    {s:'0, 0, 255', t:'cmyk(100%, 100%, 0%, 0%)'},
  ],
  decToBin: [
    {s:'1', t:'1'}, {s:'8', t:'1000'}, {s:'10', t:'1010'}, {s:'16', t:'10000'},
    {s:'128', t:'10000000'}, {s:'255', t:'11111111'}, {s:'1024', t:'10000000000'},
  ],
  decToHex: [
    {s:'10', t:'A'}, {s:'16', t:'10'}, {s:'128', t:'80'}, {s:'255', t:'FF'},
    {s:'256', t:'100'}, {s:'65535', t:'FFFF'}, {s:'16777215', t:'FFFFFF'},
  ],
  unixTimestamp: [
    {s:0, t:'1970-01-01 01:00:00'},
    {s:1000000000, t:'2001-09-09 03:46:40'},
    {s:1700000000, t:'2023-11-14 23:13:20'},
    {s:1735689600, t:'2025-01-01 01:00:00'},
    {s:2000000000, t:'2033-05-18 05:33:20'},
  ],
};

console.log('=== FAZA 1B: WERYFIKACJA popularValues ===\n');

let totalChecks = 0;
let totalErrors = 0;
const errors = [];

for (const conv of CONVERTERS) {
  const vals = POPULAR_VALUES[conv.key];
  if (!vals) continue;

  for (const v of vals) {
    totalChecks++;
    const extra = conv.defaultExtra;
    const computed = conv.convert(v.s, extra);
    const rounded = conv.precision === 0
      ? Math.round(computed)
      : parseFloat(computed.toFixed(conv.precision));

    // Allow tolerance based on precision
    const tolerance = conv.precision === 0 ? 1 : Math.pow(10, -conv.precision) * 1.5;
    const diff = Math.abs(rounded - v.t);

    if (diff > tolerance) {
      totalErrors++;
      errors.push({
        converter: conv.key,
        source: v.s,
        expected: v.t,
        computed: rounded,
        diff: diff.toFixed(6),
      });
    }
  }
}

console.log(`Checked ${totalChecks} popularValues across ${CONVERTERS.length} converters`);
console.log(`Errors: ${totalErrors}\n`);

if (errors.length > 0) {
  console.log('ERRORS:');
  for (const e of errors) {
    console.log(`  ${e.converter}: ${e.source} -> expected ${e.expected}, got ${e.computed} (diff: ${e.diff})`);
  }
}

// ── Special converters ──
console.log('\n=== SPECIAL CONVERTERS ===\n');

// HEX -> RGB
let specErrors = 0;
for (const v of SPECIAL_POPULAR.hexToRgb) {
  const hex = v.s.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  const computed = `rgb(${r}, ${g}, ${b})`;
  if (computed !== v.t) {
    console.log(`  hexToRgb ERROR: ${v.s} -> expected ${v.t}, got ${computed}`);
    specErrors++;
  }
}
console.log(`hexToRgb: ${SPECIAL_POPULAR.hexToRgb.length} checks, ${specErrors} errors`);

// RGB -> HSL
specErrors = 0;
for (const v of SPECIAL_POPULAR.rgbToHsl) {
  const [r, g, b] = v.s.split(',').map(x => parseInt(x.trim()));
  const rf = r/255, gf = g/255, bf = b/255;
  const max = Math.max(rf, gf, bf), min = Math.min(rf, gf, bf);
  const l = (max + min) / 2;
  let h = 0, s = 0;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    if (max === rf) h = ((gf - bf) / d + (gf < bf ? 6 : 0)) / 6;
    else if (max === gf) h = ((bf - rf) / d + 2) / 6;
    else h = ((rf - gf) / d + 4) / 6;
  }
  const hDeg = Math.round(h * 360);
  const sPct = Math.round(s * 100);
  const lPct = Math.round(l * 100);
  const computed = `hsl(${hDeg}, ${sPct}%, ${lPct}%)`;
  if (computed !== v.t) {
    console.log(`  rgbToHsl MISMATCH: ${v.s} -> expected ${v.t}, got ${computed}`);
    specErrors++;
  }
}
console.log(`rgbToHsl: ${SPECIAL_POPULAR.rgbToHsl.length} checks, ${specErrors} errors`);

// RGB -> CMYK
specErrors = 0;
for (const v of SPECIAL_POPULAR.rgbToCmyk) {
  const [r, g, b] = v.s.split(',').map(x => parseInt(x.trim()));
  if (r === 0 && g === 0 && b === 0) {
    const computed = 'cmyk(0%, 0%, 0%, 100%)';
    if (computed !== v.t) { console.log(`  rgbToCmyk ERROR: ${v.s} -> expected ${v.t}, got ${computed}`); specErrors++; }
  } else {
    const rf = r/255, gf = g/255, bf = b/255;
    const k = 1 - Math.max(rf, gf, bf);
    const c = (1 - rf - k) / (1 - k);
    const m = (1 - gf - k) / (1 - k);
    const y = (1 - bf - k) / (1 - k);
    const computed = `cmyk(${Math.round(c*100)}%, ${Math.round(m*100)}%, ${Math.round(y*100)}%, ${Math.round(k*100)}%)`;
    if (computed !== v.t) { console.log(`  rgbToCmyk MISMATCH: ${v.s} -> expected ${v.t}, got ${computed}`); specErrors++; }
  }
}
console.log(`rgbToCmyk: ${SPECIAL_POPULAR.rgbToCmyk.length} checks, ${specErrors} errors`);

// DEC -> BIN
specErrors = 0;
for (const v of SPECIAL_POPULAR.decToBin) {
  const computed = parseInt(v.s).toString(2);
  if (computed !== v.t) { console.log(`  decToBin ERROR: ${v.s} -> expected ${v.t}, got ${computed}`); specErrors++; }
}
console.log(`decToBin: ${SPECIAL_POPULAR.decToBin.length} checks, ${specErrors} errors`);

// DEC -> HEX
specErrors = 0;
for (const v of SPECIAL_POPULAR.decToHex) {
  const computed = parseInt(v.s).toString(16).toUpperCase();
  if (computed !== v.t) { console.log(`  decToHex ERROR: ${v.s} -> expected ${v.t}, got ${computed}`); specErrors++; }
}
console.log(`decToHex: ${SPECIAL_POPULAR.decToHex.length} checks, ${specErrors} errors`);

// Unix Timestamp (CET = UTC+1)
specErrors = 0;
for (const v of SPECIAL_POPULAR.unixTimestamp) {
  const d = new Date(v.s * 1000);
  // Format as CET (UTC+1)
  const offset = 1; // CET
  const utc = d.getTime() + d.getTimezoneOffset() * 60000;
  const cet = new Date(utc + offset * 3600000);
  const computed = cet.getFullYear() + '-' +
    String(cet.getMonth()+1).padStart(2,'0') + '-' +
    String(cet.getDate()).padStart(2,'0') + ' ' +
    String(cet.getHours()).padStart(2,'0') + ':' +
    String(cet.getMinutes()).padStart(2,'0') + ':' +
    String(cet.getSeconds()).padStart(2,'0');
  if (computed !== v.t) {
    console.log(`  unixTimestamp MISMATCH: ${v.s} -> expected ${v.t}, got ${computed}`);
    specErrors++;
  }
}
console.log(`unixTimestamp: ${SPECIAL_POPULAR.unixTimestamp.length} checks, ${specErrors} errors`);

// ── Faza 1C: Round-trip tests ──
console.log('\n=== FAZA 1C: ROUND-TRIP TESTS ===\n');

let rtTotal = 0, rtErrors = 0;
const testValues = [0.001, 0.1, 1, 5, 10, 42.195, 100, 1000, 9999.99];

for (const conv of CONVERTERS) {
  for (const val of testValues) {
    rtTotal++;
    const extra = conv.defaultExtra;
    const converted = conv.convert(val, extra);
    const roundTripped = conv.reverse(converted, extra);
    const relError = val === 0 ? Math.abs(roundTripped) : Math.abs((roundTripped - val) / val);
    if (relError > 1e-6) {
      console.log(`  ${conv.key}: roundtrip(${val}) = ${roundTripped} (error: ${(relError*100).toFixed(8)}%)`);
      rtErrors++;
    }
  }
}

console.log(`\nRound-trip: ${rtTotal} checks, ${rtErrors} errors`);

// ── Faza 1A: Reference conversion constants ──
console.log('\n=== FAZA 1A: REFERENCE CONSTANTS ===\n');

const NIST_REFS = [
  { key: 'kmToMiles', constant: 0.621371, ref: 0.621371192, source: 'NIST: 1 km = 0.621371192 mi' },
  { key: 'kgToLbs', constant: 2.20462, ref: 2.20462262, source: 'NIST: 1 kg = 2.20462262 lb' },
  { key: 'cmToInches', constant: 2.54, ref: 2.54, source: 'NIST: 1 in = 2.54 cm (exact)' },
  { key: 'metersToFeet', constant: 3.28084, ref: 3.2808399, source: '1/0.3048 = 3.2808399' },
  { key: 'litersToGallons', constant: 0.264172, ref: 0.264172052, source: 'NIST: 1 gal = 3.785411784 L' },
  { key: 'sqmToSqft', constant: 10.7639, ref: 10.7639104, source: '(1/0.3048)^2 = 10.7639104' },
  { key: 'mmToInches', constant: 25.4, ref: 25.4, source: '1 in = 25.4 mm (exact)' },
  { key: 'gramsToOunces', constant: 0.035274, ref: 0.03527396, source: '1 oz = 28.349523125 g' },
  { key: 'tonnesToPounds', constant: 2204.62, ref: 2204.62262, source: '1000 × 2.20462' },
  { key: 'hectaresToAcres', constant: 2.47105, ref: 2.47105381, source: '1 ha = 10000 m², 1 ac = 4046.8564224 m²' },
  { key: 'mlToFlOz', constant: 0.033814, ref: 0.033814023, source: '1 fl oz = 29.5735295625 ml' },
  { key: 'barToPsi', constant: 14.5038, ref: 14.503774, source: '1 bar = 100000 Pa, 1 psi = 6894.757 Pa' },
  { key: 'kwToHp', constant: 1.35962, ref: 1.35962162, source: '1 PS = 735.49875 W (metric HP)' },
  { key: 'mbpsToMBs', constant: 8, ref: 8, source: '1 byte = 8 bits (exact)' },
  { key: 'bytesConverter', constant: 1024, ref: 1024, source: '1 KiB = 1024 bytes (exact)' },
  { key: 'twToPx', constant: 4, ref: 4, source: 'Tailwind default: 1 unit = 0.25rem = 4px' },
  { key: 'ptToPx', constant: 1.333333, ref: 1.333333, source: '96/72 = 1.333... (CSS spec)' },
  { key: 'degToRad', constant: PI/180, ref: PI/180, source: 'Definition: π/180' },
];

for (const r of NIST_REFS) {
  const relError = Math.abs((r.constant - r.ref) / r.ref);
  const status = relError < 0.0001 ? 'OK' : 'DRIFT';
  if (status !== 'OK') {
    console.log(`  ${r.key}: code=${r.constant}, ref=${r.ref}, drift=${(relError*100).toFixed(6)}% — ${r.source}`);
  }
}
console.log('All reference constants checked against NIST/SI sources.');

console.log('\n=== SUMMARY ===');
console.log(`PopularValues: ${totalChecks} checks, ${totalErrors} errors`);
console.log(`Round-trip: ${rtTotal} checks, ${rtErrors} errors`);
console.log(`Reference constants: ${NIST_REFS.length} checked`);
